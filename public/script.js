/*AQUI ES PARA EDITAR EL INDEX, SON LAS IMAGENES Y TEXTO DEL PRINCIPIO*/
const reservas = [
    {
        id: 1,
        slug: "MachuPicchu",
        titulo: "Machu Picchu",
        categoria: "tour",
        precio: 150,
        img: "https://www.peru.travel/Contenido/Noticia/Imagen/es/1135/1.0/Principal/Machu%20turis.jpg",
        desc: "Aventura completa por la ciudadela Inca.",
        tags: ["Desayuno incluido", "Vista a la montaña", "WiFi gratis", "Tour guiado"],
        rating: "⭐ 9.2 - Excelente ubicación",
        mapQuery: "Machu Picchu Peru"
    },
    {
        id: 2,
        slug: "LagoTiticaca",
        titulo: "Lago Titicaca",
        categoria: "hotel",
        precio: 85,
        img: "https://www.peru.travel/Contenido/Atractivo/Imagen/es/32/1.1/Principal/isla-flotante-en-el-lago-titicaca-puno-desktop.jpg",
        desc: "Vista al lago y desayuno incluido.",
        tags: ["Desayuno incluido", "Vista al lago", "WiFi gratis", "Tour guiado"],
        rating: "⭐ 9.2 - Excelente ubicación",
        mapQuery: "Lago Titicaca Peru"
    },
    {
        id: 3,
        slug: "Nazca",
        titulo: "Nazca",
        categoria: "tour",
        precio: 120,
        img: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=1210,dpr=1/tour_img/5e59a564465e9.jpeg",
        desc: "Sobrevuelo de 30 min con guía experto.",
        tags: ["Desayuno incluido", "Vista al desierto", "WiFi gratis", "Sobrevuelo incluido"],
        rating: "⭐ 9.0 - Experiencia única",
        mapQuery: "Nazca Peru"
    },
    {
        id: 4,
        slug: "Iquitos",
        titulo: "Iquitos",
        categoria: "hotel",
        precio: 210,
        img: "https://upload.wikimedia.org/wikipedia/commons/2/21/Catedral_de_Iquitos%2C_Per%C3%BA.jpg",
        desc: "Experiencia de lujo en el Amazonas.",
        tags: ["Desayuno incluido", "Vista a la selva", "Excursiones guiadas", "WiFi gratis"],
        rating: "⭐ 9.3 - Aventura en la selva",
        mapQuery: "Iquitos Peru"
    },
    {
        id: 5,
        slug: "Ancash",
        titulo: "Ancash",
        categoria: "tour",
        precio: 100,
        img: "https://www.rcrperu.com/wp-content/uploads/2020/02/ancash-1.jpg",
        desc: "Descubre los paisajes de Ancash.",
        tags: ["Desayuno incluido", "Vista a la montaña", "WiFi gratis", "Tours de trekking"],
        rating: "⭐ 9.3 - Aventura en los Andes",
        mapQuery: "Ancash Peru"
    },
    {
        id: 6,
        slug: "Cajamarca",
        titulo: "Cajamarca",
        categoria: "hotel",
        precio: 95,
        img: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Plaza_de_cajamarca.jpg",
        desc: "Historia y cultura en Cajamarca.",
        tags: ["Desayuno incluido", "Vista a la montaña", "WiFi gratis", "Baños termales cercanos"],
        rating: "⭐ 9.0 - Historia y naturaleza andina",
        mapQuery: "Cajamarca Peru"
    },
    {
        id: 7,
        slug: "Chiclayo",
        titulo: "Chiclayo",
        categoria: "hotel",
        precio: 90,
        img: "https://urbania.pe/blog/wp-content/uploads/2024/12/imovelwebcomunicacaoltda_quintoandarperu_image_336.jpeg",
        desc: "Tierra del Señor de Sipán.",
        tags: ["Desayuno incluido", "Ubicación céntrica", "WiFi gratis", "Cultura y museos"],
        rating: "⭐ 8.9 - Cultura y gastronomía norteña",
        mapQuery: "Chiclayo Peru"
    },
    {
        id: 8,
        slug: "Chimbote",
        titulo: "Chimbote",
        categoria: "hotel",
        precio: 80,
        img: "https://blog.casa-andina.com/wp-content/uploads/2025/04/plaza-armas-chimbote-ancash.jpg",
        desc: "Puerto y gastronomía marina.",
        tags: ["Desayuno incluido", "Vista al mar", "WiFi gratis", "Cerca al malecón"],
        rating: "⭐ 8.5 - Buena ubicación costera",
        mapQuery: "Chimbote Peru"
    },
    {
        id: 9,
        slug: "Huanuco",
        titulo: "Huánuco",
        categoria: "hotel",
        precio: 85,
        img: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Font_del_Parc_de_San_Sebasti%C3%A1n_amb_l%27esgl%C3%A9sia_de_San_Sebasti%C3%A1n_darrera_a_Hu%C3%A1nuco.jpg",
        desc: "Clima templado y naturaleza.",
        tags: ["Desayuno incluido", "Clima templado", "WiFi gratis", "Tours cercanos"],
        rating: "⭐ 8.7 - Excelente clima y tranquilidad",
        mapQuery: "Huanuco Peru"
    },
    {
        id: 10,
        slug: "Huaraz",
        titulo: "Huaraz",
        categoria: "hotel",
        precio: 110,
        img: "https://blog.casa-andina.com/wp-content/uploads/2025/01/plaza-armas-huaraz.jpg",
        desc: "Aventura en la Cordillera Blanca.",
        tags: ["Desayuno incluido", "Vista a la montaña", "WiFi gratis", "Excursiones de trekking"],
        rating: "⭐ 9.3 - Aventura en la Cordillera Blanca",
        mapQuery: "Huaraz Peru"
    },
    {
        id: 11,
        slug: "Ica",
        titulo: "Ica",
        categoria: "hotel",
        precio: 100,
        img: "https://www.ytuqueplanes.com/imagenes/fotos/novedades/interna-SEMANA-TURISTICA-DE-ICA-3.jpg",
        desc: "Dunas y oasis impresionantes.",
        tags: ["Desayuno incluido", "Vista al oasis", "WiFi gratis", "Tour en buggy"],
        rating: "⭐ 9.0 - Experiencia única en el desierto",
        mapQuery: "Huacachina Ica Peru"
    },
    {
        id: 12,
        slug: "Lambayeque",
        titulo: "Lambayeque",
        categoria: "tour",
        precio: 90,
        img: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Cathedral_of_Lambayeque.jpg",
        desc: "Riqueza arqueológica del norte.",
        tags: ["Desayuno incluido", "Cultura y museos", "WiFi gratis", "Ubicación céntrica"],
        rating: "⭐ 8.9 - Experiencia cultural y gastronómica",
        mapQuery: "Lambayeque Peru"
    },
    {
        id: 13,
        slug: "Lima",
        titulo: "Lima",
        categoria: "hotel",
        precio: 70,
        img: "https://www.civitatis.com/blog/wp-content/uploads/2012/11/shutterstock_111550142-scaled.jpg",
        desc: "Capital gastronómica del Perú.",
        tags: ["Desayuno incluido", "Vista al mar", "WiFi gratis", "Cerca a zonas turísticas"],
        rating: "⭐ 8.8 - Excelente ubicación urbana",
        mapQuery: "Lima Peru"
    },
    {
        id: 14,
        slug: "Loreto",
        titulo: "Loreto",
        categoria: "hotel",
        precio: 130,
        img: "https://cdn.labrujulaverde.com/wp-content/uploads/2019/09/034454_450.jpg",
        desc: "Selva amazónica y biodiversidad.",
        tags: ["Desayuno incluido", "Vista a la selva", "WiFi limitado", "Excursiones guiadas"],
        rating: "⭐ 9.3 - Experiencia en la naturaleza",
        mapQuery: "Iquitos Loreto Peru"
    },
    {
        id: 15,
        slug: "LunaHuana",
        titulo: "Lunahuaná",
        categoria: "hotel",
        precio: 75,
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Lunahuana_Principal_Church.jpg",
        desc: "Aventura y canotaje.",
        tags: ["Desayuno incluido", "Vista al río", "WiFi gratis", "Deportes de aventura"],
        rating: "⭐ 9.2 - Aventura y naturaleza",
        mapQuery: "Lunahuana Peru"
    },
    {
        id: 16,
        slug: "Piura",
        titulo: "Piura",
        categoria: "tour",
        precio: 95,
        img: "https://elcomercio.pe/resizer/4XbaVz4JUJv2GMajcjg3Bl4QDOw=/3000x2000/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/2AXNFE5EWVDZJIAEC7VIOPWCWA.jpg",
        desc: "Playas cálidas todo el año.",
        tags: ["Desayuno incluido", "Clima cálido", "WiFi gratis", "Cerca a playas"],
        rating: "⭐ 8.8 - Sol, playa y relax",
        mapQuery: "Piura Peru"
    },
    {
        id: 17,
        slug: "PuertoMaldonado",
        titulo: "Puerto Maldonado",
        categoria: "tour",
        precio: 140,
        img: "https://blog.casa-andina.com/wp-content/uploads/2024/12/plaza-armas-puerto-maldonado-e1733369427240.jpg",
        desc: "Puerta a la Amazonía.",
        tags: ["Desayuno incluido", "Vista a la selva", "WiFi limitado", "Excursiones amazónicas"],
        rating: "⭐ 9.4 - Aventura en la Amazonía profunda",
        mapQuery: "Puerto Maldonado Peru"
    },
    {
        id: 18,
        slug: "Puno",
        titulo: "Puno",
        categoria: "tour",
        precio: 100,
        img: "https://machupicchuviajesperu.com/wp-content/uploads/2025/06/main-square-of-Puno-scaled.webp",
        desc: "Cultura y lago Titicaca.",
        tags: ["Desayuno incluido", "Vista al lago", "WiFi gratis", "Cultura andina"],
        rating: "⭐ 9.1 - Cultura y paisaje del altiplano",
        mapQuery: "Puno Peru"
    },
    {
        id: 19,
        slug: "Tarapoto",
        titulo: "Tarapoto",
        categoria: "tour",
        precio: 110,
        img: "https://s3.us-east-1.amazonaws.com/ca-webprod/media/hoteles-tarapoto.webp?s=504134",
        desc: "Cataratas y selva alta.",
        tags: ["Desayuno incluido", "Piscina natural", "WiFi gratis", "Tours a cataratas"],
        rating: "⭐ 9.2 - Naturaleza y aventura amazónica",
        mapQuery: "Tarapoto Peru"
    },
    {
        id: 20,
        slug: "Trujillo",
        titulo: "Trujillo",
        categoria: "tour",
        precio: 85,
        img: "https://blog.redbus.pe/wp-content/uploads/2025/01/Proyecto-nuevo-6.jpg",
        desc: "Ciudad de la eterna primavera.",
        tags: ["Desayuno incluido", "Centro histórico", "WiFi gratis", "Cultura y arqueología"],
        rating: "⭐ 9.1 - Ciudad histórica y cultural",
        mapQuery: "Trujillo Peru"
    }
];

let carritoCount = 0;
const STORAGE_KEY_RESERVAS = "misReservas";

function getCurrentUser() {
    return localStorage.getItem('usuario');
}

async function obtenerReservasGuardadas() {
    const usuario = getCurrentUser();
    if (!usuario) {
        return JSON.parse(localStorage.getItem(STORAGE_KEY_RESERVAS) || "[]");
    }

    try {
        const respuesta = await fetch(`/api/reservas?usuario=${encodeURIComponent(usuario)}`);
        if (respuesta.ok) {
            return await respuesta.json();
        }
        console.warn('Error al cargar reservas del servidor:', await respuesta.text());
    } catch (error) {
        console.error('Error al obtener reservas', error);
    }

    return JSON.parse(localStorage.getItem(STORAGE_KEY_RESERVAS) || "[]");
}

function guardarReservasGuardadas(reservas) {
    localStorage.setItem(STORAGE_KEY_RESERVAS, JSON.stringify(reservas));
}

async function actualizarContadorReservas() {
    const reservasGuardadas = await obtenerReservasGuardadas();
    const countEl = document.getElementById("cart-count");
    if (countEl) countEl.innerText = reservasGuardadas.length;
}

function renderReservasDropdown(reservasGuardadas) {
    const dropdown = document.getElementById("mis-reservas-dropdown");
    if (!dropdown) return;

    if (!reservasGuardadas || reservasGuardadas.length === 0) {
        dropdown.innerHTML = '<div class="reserva-empty">No hay reservas aún.</div>';
        return;
    }

    dropdown.innerHTML = reservasGuardadas.map(reserva => `
        <div class="reserva-item">
            <img src="${reserva.imagen}" alt="${reserva.destino}" />
            <div class="reserva-item-details">
                <strong>${reserva.destino}</strong>
                <span>Días: ${reserva.dias}</span>
                <span>Costo: ${reserva.precio_total}</span>
            </div>
        </div>
    `).join("");
}

async function mostrarReservasDropdown() {
    const reservasGuardadas = await obtenerReservasGuardadas();
    renderReservasDropdown(reservasGuardadas);
}

const grid = document.getElementById('grid-reservas');
const busqueda = document.getElementById('busqueda');
const filtroCat = document.getElementById('filtro-categoria');
const filtroPrecio = document.getElementById('filtro-precio');

function aplicarFiltros() {
    const texto = busqueda ? busqueda.value.toLowerCase() : '';
    const cat = filtroCat ? filtroCat.value : 'todos';
    const rango = filtroPrecio ? filtroPrecio.value : 'todos';

    const filtrados = reservas.filter(r => {
        const coincideTexto = r.titulo.toLowerCase().includes(texto);
        const coincideCat = (cat === 'todos' || r.categoria === cat);

        let coincidePrecio = true;
        if (rango === 'basico') {
            coincidePrecio = r.precio <= 100;
        } else if (rango === 'estandar') {
            coincidePrecio = r.precio > 100 && r.precio <= 200;
        } else if (rango === 'premium') {
            coincidePrecio = r.precio > 200;
        }

        return coincideTexto && coincideCat && coincidePrecio;
    });

    mostrarTarjetas(filtrados);
}

function mostrarTarjetas(lista) {
    if (!grid) return;
    grid.innerHTML = '';

    const selector = document.getElementById("moneda");
    const moneda = selector ? selector.value : "USD";

    lista.forEach(item => {
        let simbolo = "$";
        if (moneda === "EUR") simbolo = "€";
        if (moneda === "PEN") simbolo = "S/";

        const precioConvertido = convertirPrecio(item.precio, moneda);

        grid.innerHTML += `
            <article class="tarjeta">
                <img src="${item.img}" alt="${item.titulo}">
                <div class="info-reserva">
                    <h3>${item.titulo}</h3>
                    <p>${item.desc}</p>
                    <p class="precio">${simbolo}${precioConvertido}</p>
                    <button class="btn-verinfo" data-id="${item.id}">Ver información</button>
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

if (busqueda) busqueda.addEventListener('input', aplicarFiltros);
if (filtroCat) filtroCat.addEventListener('change', aplicarFiltros);
if (filtroPrecio) filtroPrecio.addEventListener('change', aplicarFiltros);

function cargarMapaDesdeDestino(destino) {
    const mapa = document.getElementById("mapa");
    if (!mapa || !destino) return;

    const lugar = destino.replace(/\s+/g, "+");
    mapa.src = `https://www.google.com/maps?q=$${lugar}&output=embed`;
}

const subtitulos = {
    MachuPicchu: "Una aventura por vivir",
    LagoTiticaca: "Un viaje entre islas míticas",
    Nazca: "Un sobrevuelo lleno de misterio",
    Iquitos: "Selva y río en una sola experiencia",
    Ancash: "Montañas y naturaleza en su máximo esplendor",
    Cajamarca: "Termas, historia y cultura milenaria",
    Chiclayo: "Cuna de sabores y arqueología",
    Chimbote: "Mar, pesca y costa norteña",
    Huanuco: "Naturaleza y tranquilidad tropical",
    Huaraz: "Trekking y paisajes glaciares",
    Ica: "Desierto, oasis y aventura",
    Lambayeque: "Museos y tradición norteña",
    Lima: "Gastronomía y vida urbana",
    Loreto: "Aventura amazónica y biodiversidad",
    LunaHuana: "Aventura, río y adrenalina",
    Piura: "Sol, playa y calidez norteña",
    PuertoMaldonado: "Puerta a la Amazonía profunda",
    Puno: "Altiplano y cultura ancestral",
    Tarapoto: "Cataratas, selva y naturaleza",
    Trujillo: "Historia colonial y huacas milenarias"
};

const galerias = {
    Ancash: [
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/c8/d9/65/photo3jpg.jpg?w=1400&h=1400&s=1",
        "https://content.emarket.pe/common/collections/content/da/62/da62d4ab-64b3-4a85-ba88-d67fbcfd4427.jpg",
        "https://peru-spezialisten.com/wp-content/uploads/2019/07/Corongo-Acash-Peru.jpg",
        "https://www.peru.travel/Contenido/Destino/Imagen/en/15/1.1/Principal/shutterstock_763050412.jpg"
    ],
    Cajamarca: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Xr15DcVJ_6cP34L758UPjLNGRTY-XqtcHw&s",
        "https://larotativa.pe/wp-content/uploads/2021/02/La-Collpa-Cajamarca.jpg",
        "https://elperuano.pe/fotografia/thumbnail/2022/01/03/000145568M.jpg",
        "https://blog.redbus.pe/wp-content/uploads/2022/04/34684572402_ec874bce69_c.jpg"
    ],
    Chiclayo: [
        "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
        "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg",
        "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg",
        "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg"
    ],
    Chimbote: [
        "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
        "https://blog.casa-andina.com/wp-content/uploads/2025/04/lugares-turisticos-chimbote.jpg",
        "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
        "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg"
    ],
    Huanuco: [
        "https://www.civitatis.com/f/peru/huanuco/huanuco.jpg",
        "https://content.emarket.pe/common/collections/standard/e8/e4/e8e4ab5f-b14a-43be-a879-d692d3883121.jpg",
        "https://sobreelrastro.pe/wp-content/uploads/2024/07/huanuco.jpg",
        "https://www.alemape-tours.com/wp-content/uploads/2018/07/Hu%C3%A1nuco-025.jpg"
    ],
    Huaraz: [
        "https://images.pexels.com/photos/327394/pexels-photo-327394.jpeg",
        "https://pohcdn.com/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Huaraz.jpg",
        "https://www.ytuqueplanes.com/imagenes/fotos/novedades/interna-monumento-willcahuain-huaraz.jpg",
        "https://www.plataforma10.com.pe/viajes/wp-content/uploads/2023/07/huaraz-ciudad-montana.webp"
    ],
    Ica: [
        "https://data-peru.itp.gob.pe/api/image?slug=geo&memberSlug=ica-1101&size=splash",
        "https://image-tc.galaxy.tf/wijpeg-49z13106qfrozvgl2q15zje5m/iglesia-sea-or-de-luren_standard.jpg?crop=42%2C0%2C676%2C507",
        "https://www.caminosalkantay.com/blog/wp-content/uploads/2023/05/7-mejores-cosas-para-hacer-en-Ica.jpg",
        "https://blog.losportales.com.pe/wp-content/uploads/2025/10/que-hay-en-ica.jpeg"
    ],
    Iquitos: [
        "https://andeangreattreks.com/wp-content/uploads/What-to-do-in-Iquitos-Peru-History-of-Iquitos.png",
        "https://losdosviajeros.com/img/peru/boulevard-de-iquitos-las-mejores-vistas-de-la-ciudad.jpg",
        "https://www.peru.travel/Contenido/Noticia/Imagen/es/2035/1.0/Principal/iquitos-wma-2023-desktop.jpg",
        "https://viajeradicta.com/wp-content/uploads/2018/11/amanecer-malecon-tarapaca-iquitos-peru-8.jpg"
    ],
    LagoTiticaca: [
        "https://tse2.mm.bing.net/th/id/OIP.KT46OIMfDp93LAotqloh5AHaDP?rs=1&pid=ImgDetMain&o=7&rm=3",
        "https://estaticos-cdn.prensaiberica.es/clip/f58b69a2-8082-464c-bc66-46f613e4219f_alta-aspect-ratio_default_0.jpg",
        "https://www.inkatrailbackpacker.com/blog/wp-content/uploads/2019/04/titicaca-lake-IKTBP.jpg",
        "https://estaticos-cdn.prensaiberica.es/clip/0d8131eb-76a0-4c5f-b272-3f1d75760c50_woman-libre-1200_default_0.jpg"
    ],
    Lambayeque: [
        "https://www.elbrujo.pe/storage/noticias/August2021/XvO72gi2txRSBcyNlAjf.jpg",
        "https://www.usat.edu.pe/wp-content/uploads/elementor/thumbs/shutterstock_293351255-ri9zyee6sjp7oc38msymnjjz7waryqntcnj98xvjbw.webp",
        "https://data-peru.itp.gob.pe/api/image?slug=geo&memberSlug=lambayeque-1403&size=splash",
        "https://www.ytuqueplanes.com/imagenes/fotos/regiones/RC-BANNER-INT-Lambayeque.webp"
    ],
    Lima: [
        "https://www.imagina.pe/wp-content/uploads/2025/12/DISTRITOS.jpg",
        "https://www.latamairlines.com/content/dam/latamxp/sites/vamos-latam/news-per%C3%BA-enero-2022/destino-lima/Centro%20Historico.jpg",
        "https://cuscoperu.b-cdn.net/wp-content/uploads/2024/02/Atardece-Costa-verde-Lima.webp",
        "https://www.salkantaytrekmachu.com/img/lima-peru-where-tradition-is-a-trend-292.jpg"
    ],
    Loreto: [
        "https://www.peru.travel/Contenido/General/Imagen/es/834/1.1/loreto-pacaya-samiria.jpg",
        "https://www.italia.it/content/dam/tdh/es/interests/marche/il-santuario-di-loreto/media/20210316130205-panorama-loreto.jpg",
        "https://www.libertrekperutravel.com/wp-content/uploads/2023/07/Loreto.jpg",
        "https://www.radionacional.gob.pe/sites/default/files/iquitos_2.jpg"
    ],
    LunaHuana: [
        "https://miwayki.com/wp-content/uploads/2024/01/0.jpg",
        "https://images.trvl-media.com/place/6161536/0cbee5cc-bf78-4530-8a71-cbfcabab1054.jpg",
        "https://www.marvelousperu.com/wp-content/uploads/2025/07/LLUANAHUA-TURISMO.webp",
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/219138147.jpg?k=86a0d8e92904ce2593b6421b271986a4d86b1fa9fba8ea17a2496b8e67deed3a&o="
    ],
    MachuPicchu: [
        "https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2024/09/templo-del-sol-machu-picchu-full.jpg",
        "https://images.pexels.com/photos/2365456/pexels-photo-2365456.jpeg",
        "https://content-historia.nationalgeographic.com.es/medio/2023/01/25/istock-625007720_8708be48_230125153322_800x533.jpg",
        "https://images.pexels.com/photos/11743250/pexels-photo-11743250.jpeg"
    ],
    Nazca: [
        "https://picchutravel.com/wp-content/uploads/las-lineas-de-nazca-arana.jpg",
        "https://images.trvl-media.com/lodging/24000000/23100000/23092700/23092677/f99220be.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
        "https://images.trvl-media.com/place/6084593/c6022cb2-341e-40d4-8d7f-8d201bae66d8.jpg",
        "https://muyinteresante.okdiario.com/wp-content/uploads/sites/5/2024/10/66fe4ccba565a.jpeg"
    ],
    Piura: [
        "https://urbania.pe/blog/wp-content/uploads/2025/01/imovelwebcomunicacaoltda_quintoandarperu_image_500.jpeg",
        "https://elregionalpiura.com.pe/media/xt-adaptive-images/480/images/Fotografias/2022/Enero_2022/Plaza-de-armas-Catacaos-01.jpg",
        "https://peru21.pe/sites/default/efsfiles/2025-08/piura-grau-ai.jpeg",
        "https://inforegion.pe/wp-content/uploads/2023/12/30/parque-de-las-aguas-piura-3.webp"
    ],
    PuertoMaldonado: [
        "https://www.lorenzoexpeditions.com/wp-content/uploads/2023/10/Puerto-Maldonado-Peru.jpg",
        "https://cdn.getyourguide.com/img/location/5de8e50f80262.jpeg/99.jpg",
        "https://portal.andina.pe/EDPfotografia3/Thumbnail/2024/07/02/001078589M.webp",
        "https://viajesaperu.pe/web/121730f/paquete-turistico-puerto-maldonado-manu-3-dias.jpg"
    ],
    Puno: [
        "https://www.peru.travel/Contenido/General/Imagen/es/1055/1.1/isla-de-los-uros-desktop.jpg",
        "https://www.peru.travel/Contenido/General/Imagen/es/714/1.1/diablada-puno-candelaria.jpg",
        "https://www.caminosalkantay.com/blog/wp-content/uploads/2024/09/Puno-sus-misterios-y-las-islas-del-Titicaca.jpg",
        "https://cuscoperu.b-cdn.net/wp-content/uploads/2024/03/Tour-isla-Taquile-en-Puno.webp"
    ],
    Tarapoto: [
        "https://rusticahoteles.com/storage/slider/424-TARA%201%20copia.jpg",
        "https://cms.movilbus.pe/storage/blog-feature-images/conocer-destinos-tarapoto-bus.jpg",
        "https://www.dosgardeniastours.com/images/destinos/tarapoto/tarapoto.jpg",
        "https://www.mevoydeviaje.com/content/images/thumbs/0004129_tarapoto-week-exp_600.png"
    ],
    Trujillo: [
        "https://patrimoniomundial.cultura.pe/sites/default/files/styles/home_slider/adaptive-image/public/pm/galeria/tschudi-a%C3%A9rea.png?itok=m5TxR0m6",
        "https://s3.us-east-1.amazonaws.com/ca-webprod/media/hoteles-trujillo.webp?s=2388239",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/29/3c/4b/caption.jpg?w=900&h=500&s=1",
        "https://content-historia.nationalgeographic.com.es/medio/2025/07/07/trujillo_9a5e0d8c_250707103944_800x600.webp"
    ]
};

function getSubtitle(slug) {
    return subtitulos[slug] || "Una experiencia inolvidable";
}

function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

function obtenerReservaPorSlug(slug) {
    if (!slug) return null;
    return reservas.find(r => r.slug === slug || r.titulo.toLowerCase() === slug.toLowerCase() || String(r.id) === String(slug));
}

function renderDetalleDestino() {
    const slug = getQueryParam('destino') || localStorage.getItem('destino');
    const reserva = obtenerReservaPorSlug(slug);
    const errorContainer = document.getElementById('detalle-error');
    const tituloEl = document.getElementById('destino-title');
    const descEl = document.getElementById('detalle-descripcion');
    const tagsEl = document.getElementById('detalle-tags');
    const ratingEl = document.getElementById('detalle-rating');
    const precioHotelEl = document.querySelector('.precio-hotel');
    const principalImg = document.getElementById('img-principal');
    const miniaturas = document.getElementById('miniaturas');
    const mapa = document.getElementById('mapa');

    if (!reserva) {
        if (errorContainer) errorContainer.style.display = 'block';
        if (tituloEl) tituloEl.textContent = 'Destino no encontrado';
        if (descEl) descEl.textContent = 'Revisa el enlace o vuelve al listado principal.';
        if (miniaturas) miniaturas.innerHTML = '';
        if (precioHotelEl) precioHotelEl.textContent = '';
        if (ratingEl) ratingEl.textContent = '';
        return;
    }

    if (errorContainer) errorContainer.style.display = 'none';
    if (tituloEl) tituloEl.textContent = reserva.titulo;
    const subtitleEl = document.getElementById('destino-subtitle');
    if (subtitleEl) subtitleEl.textContent = getSubtitle(reserva.slug);
    if (descEl) descEl.textContent = reserva.desc;
    if (ratingEl) ratingEl.textContent = reserva.rating;
    if (precioHotelEl) {
        precioHotelEl.dataset.precio = reserva.precio;
        precioHotelEl.textContent = `$${reserva.precio.toFixed(2)}`;
    }
    if (principalImg) {
        principalImg.src = reserva.img;
        principalImg.alt = reserva.titulo;
    }

    if (tagsEl) {
        tagsEl.innerHTML = reserva.tags.map(tag => `<span>${tag}</span>`).join('');
    }

    const galleryImages = reserva.gallery && reserva.gallery.length
        ? reserva.gallery
        : galerias[reserva.slug] || [reserva.img, reserva.img, reserva.img, reserva.img];
    if (miniaturas) {
        miniaturas.innerHTML = galleryImages.map(src => `<img src="${src}" onclick="cambiarImagen(this)" onerror="this.onerror=null; this.src=document.getElementById('img-principal').src;">`).join('');
    }

    if (mapa) {
        const lugar = reserva.mapQuery || reserva.titulo;
        mapa.src = `https://www.google.com/maps?q=$${encodeURIComponent(lugar)}&output=embed`;
    }

    localStorage.setItem('destino', reserva.titulo);
    localStorage.setItem('precioBase', reserva.precio);
    localStorage.setItem('imagenPrincipal', reserva.img);

    document.title = `${reserva.titulo} | Reserva`;
    actualizarPreciosHoteles();
}

window.addEventListener("DOMContentLoaded", () => {
    const destino = localStorage.getItem("destino");
    const detalleContainer = document.getElementById('detalle-page');

    if (detalleContainer) {
        renderDetalleDestino();
    } else {
        cargarMapaDesdeDestino(destino);
    }

    const moneda = document.getElementById("moneda");

    if (moneda) {
        moneda.value = localStorage.getItem("moneda") || "USD";
        moneda.addEventListener("change", () => {
            localStorage.setItem("moneda", moneda.value);
            aplicarFiltros();
        });
    }

    if (grid) {
        mostrarTarjetas(reservas);
    }

    actualizarContadorReservas();

    const reservasToggle = document.getElementById("mis-reservas-toggle");
    const reservasDropdown = document.getElementById("mis-reservas-dropdown");

    if (reservasToggle && reservasDropdown) {
        reservasToggle.addEventListener("click", async (e) => {
            e.preventDefault();
            reservasDropdown.classList.toggle("visible");
            await mostrarReservasDropdown();
        });

        document.addEventListener("click", (e) => {
            if (!reservasToggle.contains(e.target) && !reservasDropdown.contains(e.target)) {
                reservasDropdown.classList.remove("visible");
            }
        });
    }
});

if (grid) {
    grid.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-verinfo")) {
            const card = e.target.closest(".tarjeta");
            const titulo = card.querySelector("h3").innerText;
            const id = e.target.dataset.id;

            const reserva = reservas.find(r => r.id == id);
            if (!reserva) return;

            localStorage.setItem("destino", titulo);
            localStorage.setItem("precioBase", reserva.precio);
            localStorage.setItem("imagenPrincipal", reserva.img);

            document.body.classList.add("fade-out");

            setTimeout(() => {
                location.href = `detalle.html?destino=${encodeURIComponent(reserva.slug)}`;
            }, 500);
        }
    });
}

const tasas = {
    USD: 1,
    EUR: 0.92,
    PEN: 3.70
};

function convertirPrecio(precioUSD, moneda) {
    return (precioUSD * tasas[moneda]).toFixed(2);
}

function actualizarPreciosHoteles() {
    const moneda = localStorage.getItem("moneda") || "USD";
    const elementos = document.querySelectorAll(".precio-hotel");
    elementos.forEach(el => {
        const precio = parseFloat(el.dataset.precio);
        const convertido = convertirPrecio(precio, moneda);
        let simbolo = "$";
        if (moneda === "EUR") simbolo = "€";
        if (moneda === "PEN") simbolo = "S/";
        el.textContent = simbolo + convertido;
    });
}

function cambiarImagen(img) {
    const principal = document.getElementById("img-principal");
    const temp = principal.src;

    principal.style.opacity = 0;
    principal.style.transform = "scale(0.95)";

    setTimeout(() => {
        principal.src = img.src;
        img.src = temp;

        principal.style.opacity = 1;
        principal.style.transform = "scale(1)";
    }, 200);
}

const precioHotelEl = document.querySelector(".precio-hotel");
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-reservar") && precioHotelEl) {
        const precioBase = parseFloat(precioHotelEl.dataset.precio);
        const imagenPrincipal = document.getElementById("img-principal").src;

        localStorage.setItem("precioBase", precioBase);
        localStorage.setItem("imagenPrincipal", imagenPrincipal);

        document.body.classList.add("fade-out");
        setTimeout(() => {
            location.href = "reserva.html";
        }, 500);
    }
});

// Quitar el fade-out cuando el usuario regresa a la página usando el botón "Atrás"
window.addEventListener("pageshow", (event) => {
    // Si la página se está restaurando desde la memoria caché del navegador (BFCache)
    if (event.persisted || (performance.getEntriesByType("navigation")[0] && performance.getEntriesByType("navigation")[0].type === "back_forward")) {
        document.body.classList.remove("fade-out");
    } else {
        // Por si acaso, lo quitamos también en una carga normal
        document.body.classList.remove("fade-out");
    }
});