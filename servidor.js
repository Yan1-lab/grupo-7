const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const users = [
    {
        usuario: 'admin',
        password: '1234',
        correo: 'admin@example.com',
        fechaNacimiento: '1990-01-01',
        dni: '00000000'
    }
];

const reservations = [];

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function calcularEdad(fechaNacimiento) {
    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesDiff = hoy.getMonth() - nacimiento.getMonth();
    if (mesDiff < 0 || (mesDiff === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

app.post('/api/register', (req, res) => {
    const { usuario, password, correo, fechaNacimiento, dni } = req.body;

    if (!usuario || !password || !correo || !fechaNacimiento || !dni) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    if (usuario.length < 3) {
        return res.status(400).json({ error: 'El usuario debe tener al menos 3 caracteres.' });
    }

    if (password.length < 6) {
        return res.status(400).json({ error: 'La contraseña debe tener mínimo 6 caracteres.' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
        return res.status(400).json({ error: 'El correo no es válido.' });
    }

    if (!/^\d{8}$/.test(dni)) {
        return res.status(400).json({ error: 'El DNI debe tener 8 dígitos.' });
    }

    const edad = calcularEdad(fechaNacimiento);
    if (edad < 18) {
        return res.status(400).json({ error: 'Debes tener al menos 18 años para registrarte.' });
    }

    if (users.some(u => u.usuario.toLowerCase() === usuario.toLowerCase())) {
        return res.status(400).json({ error: 'El usuario ya existe.' });
    }

    if (users.some(u => u.correo.toLowerCase() === correo.toLowerCase())) {
        return res.status(400).json({ error: 'El correo ya está registrado.' });
    }

    users.push({ usuario, password, correo, fechaNacimiento, dni });
    res.json({ success: true, usuario });
});

app.post('/api/login', (req, res) => {
    const { usuario, password } = req.body;
    if (!usuario || !password) {
        return res.status(400).json({ error: 'Usuario y contraseña son obligatorios.' });
    }

    const user = users.find(u => u.usuario.toLowerCase() === usuario.toLowerCase() && u.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Credenciales incorrectas.' });
    }

    res.json({ success: true, usuario: user.usuario });
});

app.get('/api/reservas', (req, res) => {
    const usuario = req.query.usuario;
    if (!usuario) {
        return res.status(401).json({ error: 'Usuario no autenticado.' });
    }

    const user = users.find(u => u.usuario.toLowerCase() === usuario.toLowerCase());
    if (!user) {
        return res.status(401).json({ error: 'Usuario no válido.' });
    }

    const userReservations = reservations.filter(r => r.usuario.toLowerCase() === usuario.toLowerCase());
    res.json(userReservations);
});

app.post('/api/reservas', (req, res) => {
    const { usuario, destino, dias, precio_total, imagen } = req.body;

    if (!usuario || !destino || !dias || !precio_total) {
        return res.status(400).json({ error: 'Faltan datos de la reserva.' });
    }

    const user = users.find(u => u.usuario.toLowerCase() === usuario.toLowerCase());
    if (!user) {
        return res.status(401).json({ error: 'Usuario no válido.' });
    }

    reservations.push({
        usuario: user.usuario,
        destino,
        dias,
        precio_total,
        imagen: imagen || '',
        fechaCreacion: new Date().toISOString()
    });

    res.json({ success: true });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado. Abre tu navegador en http://localhost:${PORT}`);
});