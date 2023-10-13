// Detalles de los discos
const discos= [
    {   
        nombre: "The Fame",
        precio: '20 USD',
        publicacion: "19 de agosto de 2008",
        genero: "Pop, electronica y dance",
        productores: "Lady Gaga, RedOne, Rob Fusari, Martin Kierszenbaum, Space Cowboy, Brian Kierulf y Josh Schwartz"
    },
    {   
        nombre: "Born This Way",
        precio: '20 USD',
        publicacion: "23 de mayo de 2011",
        genero: "Pop, electronica, dance y rock",
        productores: "Lady Gaga, Fernando Garibay, RedOne, Dj White Shadow, Robert Lange, Jeppe Laursen y Dj Snake"
    },
    {   
        nombre: "Artpop",
        precio: '15 USD',
        publicacion: "6 de noviembre de 2013",
        genero: "Synthpop",
        productores: "Lady Gaga, Dj White Shadow, Zedd, Madeon, Dino Zisis, Nick Monson, Rick Rubin, Giorgio Tuinfort, David Guetta, Dj Snake, Infected Mushroom, Will.i.am"
    },
    {
        nombre: "Chromatica",
        precio: '25 USD',
        publicacion: "29 de marzo de 2020",
        genero: "Dance pop, house, disco, electropop",
        productores: "Lady Gaga, BloodPop, Tchami, Max Martin, Anxwell, Benjamin Rice, Burns, Madeon, Skrillex"
    }
]

// Funcion para detalles de los discos
const detallesAlbum = () => {
    let titulo = "Albums de Lady Gaga: \n"
    discos.forEach((atributos)=>{
        titulo += `- Nombre: ${atributos.nombre}\n- Precio: ${atributos.precio}\n- Publicación: ${atributos.publicacion}\n- Género: ${atributos.genero}\n________________________________________________________________________________`
    });
    alert(titulo);
}

// Proceso de login al banco
let pin="1234";
function login(){
    let ingreso = false;
    let intentos = 4;
    for(let i=intentos; i > 0; i--){
        let pinUsuario=prompt("Por favor ingresa tu PIN");
        if(pinUsuario===pin){
            alert("Gracias por comprar con nosotros");
            ingreso=true;
            break
        }
        else if (i==1){
            alert("Lo siento no fue posible continuar con tu compra. Por favor recarga la página e intenta nuevamente.")
        }
        else{
            alert("Oops. Verifica que tu contraseña esté correcta. "+(i-1)+" intentos restantes.")
        }
    }
    return ingreso;
}

// Elección de discos. Hasta el momento sólo hay de Lady Gaga, proximamente se agregaran más.
let albums = prompt("Bienvenida/o a nuestra disquería. ¿Qué deseas?: \n1 - The Fame\n2 - Born This way \n3 - Artpop \n4 - Chromatica\n5 - Detalles \n6 - Busqueda por nombre");
    switch (albums) {
        case "1":
            eleccionPago()
            break
        case "2":
            eleccionPago()
            break
        case "3":
            eleccionPago()
            break
        case "4":
            eleccionPago()
            break
        case "5":
            detallesAlbum()
            break
        case "6": let productoElegido = prompt("Escribe el producto a buscar. Tu resultado se mostrará en la consola.")
        console.log(discos.find((disco) => disco.nombre === productoElegido))
    }

// Función para elegir banco
function eleccionBanco(){
    alert('¡Tu compra está casi lista!')
    let bancos = prompt('Por favor selecciona tu banco para completar el proceso \n1 - Banco Estado \n2 - Banco BBVA \n3 - Banco Santander');
    switch (bancos) {
        case "1": 
            login();
            break
        case "2":
            login();
            break
        case "3":
            login(); 
            break
        default:  
            alert('Error. Seleccione una opción posible.');
    }
}

// Función para elegir medio de pago
function eleccionPago(){
    let mediosPago = prompt ('¿Con qué medio de pago pagas? \n1 - Debito \n2 - Credito');
    switch (mediosPago) {
        case "1":
        eleccionBanco()
        break
        case "2":
        eleccionBanco()
        break
        default:
            alert('Error. Seleccione una opción posible.');
    }
}