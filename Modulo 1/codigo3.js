    //FUNCIONES es una porcion de codigo, bloque que se ejecuta una vez
       //se puede "llamar" para ejecutarla nuevamente.
       

// function saludar () { 
    
// let respuesta = prompt ("Hola Facundo! Como fue tu dia?")
// if  (respuesta == "bien") { 
//     alert ("me alegro");
// }   
// else {
//     alert ("una pena")
// }
// }
// saludar ();


// saludar = function () { 
//     let respuesta = prompt ("Hola Facundo! Como fue tu dia?")
//     if  (respuesta == "bien") { 
//         alert ("me alegro");
//     }   
//     else {
//         alert ("una pena")
//     }
//     }
   
//     saludar ();


               //RETURN (si la funcion retorna un valor, finaliza la misma
               //al igual que en break)

//  function saludar () {
//     alert ("Hola");
//     return "La funcion se ejecutó correctamente"
//  }         
//  let saludo = saludar ();   
//  document.write (saludo)



// //EJEMPLO YA VISTO DE SUMA 
// let num1 = 32;
// let num2 = 12;

// let res = num1 + num2;
// document.write (res)

//USANDO FUNCIONES:

// function suma () {
//    let num1 = 32;
//    let num2 = 12;
//    let res = num1 + num2;
//    document.write (res)

// } 
// suma ()


              //USANDO PARAMETROS PARA ASIGNAR VALORES


// function suma (num1, num2) {
//     let res = num1 + num2;
//     document.write (res + "<br>");
// }

// suma (1,2);
// suma (3,5); 
// suma (5,5);



// function suma (num1, num2) {
//     let resultado = num1 + num2;
//     return resul tado;
// }


// function saludar (nombre) {
//     let frase = `¡Hola ${nombre}! ¡Cómo estás?`;
//     document.write (frase);
// }
// saludar ("Facundo")

        //Las variables tienen scope regional pero las
        //funciones son globales, pudiendose llamar desde cualquier parte

        //FUNCIONES FLECHA

// const saludar = function (nombre) {
//     let frase = `¡Hola ${nombre}! ¡Cómo estás?`;
//     document.write (frase);
// }
// saludar ("Facundo")

// const saludar = (nombre) => //FUNCTION SE REEMPLAZA POR UNA FLECHA
// {
//     let frase = `¡Hola ${nombre}! ¡Cómo estás?`;
//     document.write (frase);
// }
// saludar ("Facundo")

//TRAE BENEFICIOS: SI SOLO USAMOS UN PARAMETRO, NO HACE FALTA ESCIBIRLO
//ENTRE PARENTESIS. Y SI ADEMAS TIENE SOLO UNA LINEA DE CODIGO, NO HARA
//FALTA ESCRIBIRLA ENTRE CORCHETES.
//Otras propiedades se veran mas adelante.


// const saludar = (nombre) => 
//      document.write ("¡Hola! ¡Cómo estás " + nombre + "?");

// saludar ("Facundo")



// function saludar (nombre) {
//     let frase = `¡Hola ${nombre}! ¿Como estás?`;
//     prompt (frase);
//     return 
// }
// saludar ("Facundo")


     