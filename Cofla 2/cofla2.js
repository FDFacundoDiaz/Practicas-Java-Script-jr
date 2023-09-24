//Hay una fiesta donde se debe dejar pasar solo a 
//personas mayores de edad, y la peimer persona que pase
//entre las 2 am y las 7 am, no paga la entrada.


let free = false;

const validarCliente = (time) => {
    let edad = prompt ("¿Cuál es tu edad?");
    if (edad >= 18) {
       if (time <= 2 && time < 7 && free == false) {
          alert ("Puedes pasar gratis, porque sos las primer persona despues de las 2 AM");
          free == true;
       }
       else {
        alert (`Son las ${time}hs, y podes pasar, pero tenes que pagar la entrada`);
       }
    }
    else {
        alert ("Eres menor de edad, no puedes pasar.");
    }
}

validarCliente (23);
validarCliente (24);
validarCliente (0.2);
validarCliente (0.6);
validarCliente (1);
validarCliente (2);
validarCliente (7);