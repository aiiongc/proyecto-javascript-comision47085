// Albums
let album1 = "The Fame";
let album2 = "Born this way";
let album3 = "Artpop";
let album4 = "Joanne";
let album5 = "Chromatica";




let albums = prompt(
        'Bienvenida/o a nuestra disquería. ¿Qué quieres escuchar hoy?: \n1 -' + album1 + '\n2 -' + album2 + '\n3 -' + album3 + '\n4 -' + album4 + '\n5 -' + album5
    );
switch (albums) {
    case "1":
        let mediosPago = prompt (
            '¿Con que medio de pago pagas? \n1 - Debito \n2 - Credito'
        );
            switch (mediosPago) {
            case "1":
                alert('¡Tu compra está casi lista!')
                let bancos =prompt(
                    ' Por favor selecciona a tu banco para completar el proceso \n1 - Banco Estado \n2 - Banco BBVA \n3 - Banco Santander'
                );
                switch (bancos) {
                    case "1": 
                        login();
                    case "2":
                        login();
                    case "3":
                        login();
                }
            
            case "2":
                switch (mediosPago) {
                    case "1":
                        alert('¡Tu compra está casi lista!')
                        let bancos =prompt(
                            ' Por favor selecciona a tu banco para completar el proceso \n1 - Banco Estado \n2 - Banco BBVA \n3 - Banco Santander'
                        );
                        switch (bancos) {
                            case "1": 
                                login();
                            case "2":
                                login();
                            case "3":
                                login();
                        }
                    }
                
                
        

    case "2":
        
        

    case "3":

    case "4":

    case "5":
    }
}6666
// login al banco
function login(){

    const PIN = '1234';
    const solicitud = prompt ('Por favor ingresa tu PIN');
    ;

    if (solicitud === PIN){
        alert('Gracias por comprar con nosotros.');
    }else{
        alert('Contraseña incorrecta');
    } 

}