const funcionCarrito = () => {
    carritoContenedor.innerHTML = "";
    carritoContenedor.style.display = "flex";
    const carritoHeader = document.createElement ("div");
    carritoHeader.className = "carrito-header";
    carritoHeader.innerHTML = `
        <h2 class="carrito-header-titulo">Tus compras<h2>
    `;
    
    carritoContenedor.append(carritoHeader);
    
    const cerrarCarrito = document.createElement("p");
    cerrarCarrito.innerText = "X";
    cerrarCarrito.className = "x-carrito";

    cerrarCarrito.addEventListener("click", () => {
        carritoContenedor.style.display = "none";
    });

    carritoHeader.append(cerrarCarrito);

    carrito.forEach((album) => {
        let carritoContenido = document.createElement("div");
        carritoContenido.className = "carrito-contenido";
        carritoContenido.innerHTML = `
            <img class="album-cover" src="${album.img}">
            <p class="nombre-album">${album.nombre}<p>
            <p class= "precio-album">$ ${album.precio}</p>
        `;
        carritoContenedor.append(carritoContenido);
        
        let eliminar = document.createElement("div");
        eliminar.innerHTML = `<img src="./assets/img/eliminar.png">`
        eliminar.className = "eliminar-producto";
        carritoContenido.append(eliminar);

        eliminar.addEventListener("click", eliminarDisco)
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    
    const totalCompra = document.createElement("div")
    totalCompra.className = "total-contenido"
    totalCompra.innerHTML = `Total a pagar: $ ${total}`;
    carritoContenedor.append(totalCompra);
};

activarCarrito.addEventListener("click", funcionCarrito);

const eliminarDisco = () => {
    const foundId = carrito.find((element) => element.id);
    
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoContador();
    almacenamientoLocal()
    funcionCarrito();

};

const carritoContador = () => {
    contadorCarrito.style.display = "block";

    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    contadorCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
};
