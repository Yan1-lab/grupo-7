const reservas = [
    { id: 1, titulo: "Machu Picchu Mágico", categoria: "tour", precio: 150, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXf3d65hM_mjGiK8FB69CA8mNxriHkFRXnLA&s", desc: "Aventura completa por la ciudadela Inca." },
    { id: 2, titulo: "Hotel Lago Titicaca", categoria: "hotel", precio: 85, img: "https://bing.com/th?asid=432345564363048627&id=OAUMA.DF335D61BD508041F0C1C94AF76E9A4B_90012EF672980592&pid=21.1&o=5&c=16&roil=0&roit=0&roir=1&roib=1&w=472&h=246&rs=2&qlt=100", desc: "Vista al lago y desayuno incluido." },
    { id: 3, titulo: "Vuelo Líneas de Nazca", categoria: "tour", precio: 120, img: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=1210,dpr=1/tour_img/5e59a564465e9.jpeg", desc: "Sobrevuelo de 30 min con guía experto." },
    { id: 4, titulo: "Resort Selva Iquitos", categoria: "hotel", precio: 210, img: "https://th.bing.com/th/id/R.78594f66f465b1df2861f4980f8f9133?rik=VEQNBr59yYkE%2fg&pid=ImgRaw&r=0" }
];

let carritoCount = 0;
const grid = document.getElementById('grid-reservas');
const busqueda = document.getElementById('busqueda');
const filtroCat = document.getElementById('filtro-categoria');
//ESTA FUNCION ES PARA EL RANGO DE PRECIOS
const filtroPrecio = document.getElementById('filtro.precio');
function aplicarFiltros(){
    const texto = busqueda.value.toLowerCase();
    const cat = filtroCat.value;
    const rango = filtroPrecio.value;
    const filtrados = reservas.filter(r => {
        const coincideTexto = r.titulo.toLowerCase().includes(texto);
        const coincideCat = (cat === 'todos' || r.categoria === cat);
//UNICAMENTE MODIFICAR ESTOS DATOS PARA AUMENTAR, O VARIAR EL RANGO DE LOS PRECIOS
        let coincidePrecio = true;
        if (rango === 'basico'){
            coincidePrecio = r.precio <= 100;
        } else if (rango === 'estandar') {
            coincidePrecio = r.precio > 100 && r.precio <=200;
        } else if (rango === 'premium'){
            coincidePrecio = r.precio > 200;
        }
        return coincideTexto && coincideCat && coincidePrecio;
    });
    mostrarTarjetas(filtrados);
}
function mostrarTarjetas(lista) {
    grid.innerHTML = '';
    lista.forEach(item => {
        grid.innerHTML += `
            <article class="tarjeta">
                <img src="${item.img}" alt="${item.titulo}">
                <div class="info-reserva">
                    <h3>${item.titulo}</h3>
                    <p>${item.desc}</p>
                    <p class="precio">$${item.precio}</p>
                    <button class="btn-reservar" onclick="añadirCarrito()">Reservar ahora</button>
                </div>
            </article>
        `;
    });
}

function añadirCarrito() {
    carritoCount++;
    document.getElementById('cart-count').innerText = carritoCount;
    alert("¡Reserva añadida con éxito!");
}

busqueda.addEventListener('input', (e) => {
    const texto = e.target.value.toLowerCase();
    const filtrados = reservas.filter(r => r.titulo.toLowerCase().includes(texto));
    mostrarTarjetas(filtrados);
});

filtroCat.addEventListener('change', (e) => {
    const cat = e.target.value;
    if(cat === 'todos') {
        mostrarTarjetas(reservas);
    } else {
        const filtrados = reservas.filter(r => r.categoria === cat);
        mostrarTarjetas(filtrados);
    }
});

mostrarTarjetas(reservas);
