const contenidoTienda = document.getElementById("contenidoTienda");
const activarCarrito = document.getElementById("activarCarrito");
const carritoContenedor = document.getElementById("carritoContenedor");
const contadorCarrito = document.getElementById("contadorCarrito");
const toastBtn = document.querySelector("#toastify")

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Traer productos desde JSON
const obtenerDiscos = async () => {
    const respuesta = await fetch ("product.json");
    const product = await respuesta.json();

// Generador de productos en tienda
    product.forEach((album)=> {
        let contenido = document.createElement("div");
        contenido.className = "tiendaCard"
        contenido.innerHTML = `
        <img src="${album.img}">
        <h3>${album.nombre}</h3>
        <p class="artista">${album.artista}<p>
        <p class="precio">$${album.precio}</p>
        `;

        contenidoTienda.append(contenido);

// Boton para añadir productos al carrito
        let botonCompra = document.createElement("button");
        botonCompra.className = "botonCarrito"
        botonCompra.innerText = "Agregar al carrito";

        contenido.append(botonCompra);

        botonCompra.addEventListener("click", () => {
            carrito.push({
                id : album.id,
                img: album.img,
                nombre : album.nombre,
                precio : album.precio,
            });

            Toastify({
                text: "Producto agregado al carro con éxito",
                className: "toastify",
                duration: 2000,
                gravity: "top",
                position: "left",
                style: {
                    background: "orange",
                    },
                }).showToast();
            carritoContador();
            almacenamientoLocal();
        });
    });
};

obtenerDiscos();

const almacenamientoLocal = () => {
localStorage.setItem("carrito", JSON.stringify(carrito));
};
carritoContador();
