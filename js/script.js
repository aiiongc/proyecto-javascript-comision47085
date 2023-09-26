// Albums
let album1 = "The Fame 20USD";
let album2 = "Born this way 15USD";
let album3 = "Artpop 15USD";
let album4 = "Chromatica 30USD";

let albums = prompt('Bienvenida/o a nuestra disquería. ¿Qué quieres escuchar hoy?: \n1 -' + album1 + '\n2 -' + album2 + '\n3 -' + album3 + '\n4 -' + album4);
    switch (albums) {
        case "1":
            let mediosPago = prompt ('¿Con qué medio de pago pagas? \n1 - Debito \n2 - Credito');
                switch (mediosPago) {
                case "1":
                    alert('¡Tu compra está casi lista!')
                    let bancos = prompt('El total es 20 USD. Por favor selecciona a tu banco para completar el proceso \n1 - Banco Estado \n2 - Banco BBVA \n3 - Banco Santander');
                    switch (bancos) {
                        case "1": 
                            login();
                        case "2":
                            login();
                        case "3":
                            login();
                    }
                case "2":
                    alert('¡Tu compra está casi lista!');
                    let bancos1 = prompt('El total es 15 USD. Por favor, selecciona a tu banco para completar el proceso \n1 - Banco Estado \n2 - Banco BBVA \n3 - Banco Santander');
                    switch (bancos1) {
                        case "1": 
                            login();
                        case "2":
                            login();
                        case "3":
                            login();
                    }
                }
        case "2":
            let mediosPago2 = prompt ('¿Con qué medio de pago pagas? \n1 - Debito \n2 - Credito');
                switch (mediosPago2) {
                case "1":
                    alert('¡Tu compra está casi lista!');
                    let bancos2 = prompt('El total es 15 USD. Por favor selecciona a tu banco para completar el proceso \n1 - Banco Estado \n2 - Banco BBVA \n3 - Banco Santander');
                    switch (bancos2) {
                        case "1": 
                            login();
                        case "2":
                            login();
                        case "3":
                            login();
                    }
                case "2":
                    alert('¡Tu compra está casi lista!');
                    let bancos22 = prompt('El total es 30 USD. Por favor, selecciona a tu banco para completar el proceso \n1 - Banco Estado \n2 - Banco BBVA \n3 - Banco Santander');
                    switch (bancos22) {
                        case "1": 
                            login();
                        case "2":
                            login();
                        case "3":
                            login();
                            }
                }
        case "3":
            let mediosPago3 = prompt ('¿Con qué medio de pago pagas? \n1 - Debito \n2 - Credito');
            switch (mediosPago3) {
            case "1":
                alert('¡Tu compra está casi lista!')
                let bancos3 = prompt('Por favor selecciona a tu banco para completar el proceso \n1 - Banco Estado \n2 - Banco BBVA \n3 - Banco Santander');
                switch (bancos3) {
                    case "1": 
                        login();
                    case "2":
                        login();
                    case "3":
                        login();
                }
            case "2":
                alert('¡Tu compra está casi lista!');
                let bancos33 = prompt('Por favor, selecciona a tu banco para completar el proceso \n1 - Banco Estado \n2 - Banco BBVA \n3 - Banco Santander');
                switch (bancos33) {
                    case "1": 
                        login();
                    case "2":
                        login();
                    case "3":
                        login();
                        }
            }
        case "4":
            let mediosPago4 = prompt ('¿Con qué medio de pago pagas? \n1 - Debito \n2 - Credito');
                switch (mediosPago4) {
                case "1":
                    alert('¡Tu compra está casi lista!')
                    let bancos4 = prompt('Por favor selecciona a tu banco para completar el proceso \n1 - Banco Estado \n2 - Banco BBVA \n3 - Banco Santander');
                    switch (bancos4) {
                        case "1": 
                            login();
                        case "2":
                            login();
                        case "3":
                            login();
                    }
                case "2":
                    alert('¡Tu compra está casi lista!');
                    let bancos44 = prompt('Por favor, selecciona a tu banco para completar el proceso \n1 - Banco Estado \n2 - Banco BBVA \n3 - Banco Santander');
                    switch (bancos44) {
                        case "1": 
                            login();
                        case "2":
                            login();
                        case "3":
                            login();
                            }
                }
    }
// login al banco
function login(){
    const PIN = '1234';
    const solicitud = prompt ('Por favor ingresa tu PIN');
    if (solicitud === PIN){
        alert('Gracias por comprar con nosotros.');
    }else{
        alert('Contraseña incorrecta');
    }
}