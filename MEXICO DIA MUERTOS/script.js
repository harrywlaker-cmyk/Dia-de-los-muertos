// ==========================
// MENÚ DINÁMICO (HOVER)
// ==========================
const menuItems = document.querySelectorAll(".navbar ul li");

menuItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = "#444";
    });

    item.addEventListener("mouseout", () => {
        item.style.backgroundColor = "transparent";
    });
});


// ==========================
// SLIDER AUTOMÁTICO
// ==========================
const imagenes = [
    "imagenes/slide1.jpg",
    "imagenes/slide2.jpg",
    "imagenes/slide3.jpg"
];

let index = 0;
const slider = document.getElementById("slider-img");

function cambiarImagen() {
    index = (index + 1) % imagenes.length;
    slider.src = imagenes[index];
}

// cambia cada 3 segundos
setInterval(cambiarImagen, 3000);


// ==========================
// MENSAJE PERSONALIZADO
// ==========================
const mensaje = document.getElementById("mensaje");

const hora = new Date().getHours();
const idioma = navigator.language;

let saludo = "";

// según hora
if (hora < 12) {
    saludo = "Buenos días";
} else if (hora < 18) {
    saludo = "Buenas tardes";
} else {
    saludo = "Buenas noches";
}

// según idioma
if (idioma.startsWith("es")) {
    mensaje.textContent = `${saludo}, bienvenido a la página del Día de los Muertos`;
} else {
    mensaje.textContent = `${saludo}, welcome to the Day of the Dead page`;
}


// ==========================
// BONUS (IDIOMA DINÁMICO)
// ==========================
if (idioma.startsWith("en")) {
    document.querySelector("h1").textContent = "DAY OF THE DEAD";
}