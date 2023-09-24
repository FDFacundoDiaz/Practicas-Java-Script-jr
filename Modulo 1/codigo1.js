                              //OPERADORES ARITMÉTICOS

// let numero1 = 3;
// let numero2 = 9;

// let suma = numero1 + numero2;
// document.write (suma);

// let resta = numero2 - numero1;
// document.write(resta);

// let division = numero2 / numero1;
// document.write(division);

// let resto = numero2 % numero1;
// document.write(resto)

// let multiplicacion = numero1 * numero2;
// document.write(multiplicacion);

// let exponenciacion = numero2 ** numero1;
// document.write(exponenciacion);

// let negacionUnitaria = -numero1;
// document.write(negacionUnitaria);

// let negacionUnitaria2 = -numero2;
// document.write(negacionUnitaria2);

// numero1++;
// let incremento = numero1;
// document.write(incremento)

// numero1--;
// let decremento = numero1;
// document.write(decremento)


                               //OPERADORES DE ASIGNACION

// let numero3 = 23;


// numero3 = 32;
// numero3 += 3;
// numero3 -= 3;
// numero3 *= 2;
// numero3 /=2;
// numero3 %= 23;
// numero3 **=2;
// numero3 = "Hola";


// document.write(numero3)


                    //OPERADORES INTERMEDIOS
                    //DE COMPARACION (DEVUELVEN BOOLEAN)


// let numero1 = 3;
// let numero2 = 6;
// let numero3 = 3;
// let texto1 = "6";
// let texto2 = "hola!"
// let texto3 = "hola!"


//IGUALDAD

// document.write (numero1 == numero2);
// document.write (texto1 == numero3);
// document.write (texto1 == numero2);


//IGUALDAD ESTRICTA 

// document.write (numero1 === numero2);
// document.write (numero1 === numero3);
// document.write (texto2 === texto3);


//INEGUALDAD

// document.write (numero1 != numero3);
// document.write (numero2 != numero1);

// document.write (numero1 !== numero3);
// document.write (texto1 !== texto2);

// document.write (numero1 > numero2);
// document.write (numero3 >= numero1);
// document.write (numero1 < numero2);

                    //CONCATENACION


// let saludo = "¡Hola Facundo!";
// let pregunta = "¡Cómo estás?";

// let frase = saludo + pregunta;
// document.write (frase)

let num1 = 2;
let num2 = 4;
let texto1 = "Hola como va numero";
let num3 = 5;
let texto2 = "soy Facundo ";
let texto3 = "cumplir con la funcion";

// let frase = num1 + num2;
// let frase = texto1 + num3;
// document.write (frase)  

// let frase = texto1.concat(num2);
// let frase = texto1.concat(", " + texto2);
// document.write (frase)

// let frase = "" + num1 + num2;
// let frase = "" + num1 + num3;
// document.write (frase)

// let frase = texto1 + " cuatro " + "y numero " + num1;
// let frase = "Numero " + num1 + " "+ texto1 + "yo " + texto2;
// document.write(frase)

// let frase = texto1 + " desconocido...esta es una concatenacion";
// document.write(frase)


//Usando BACKTICKS O ACENTOS GRAVES
// let frase = `Bienvenido usuario ${texto2}`;
// let frase = `Hola! selecciona un numero del ${num1} al ${num3} para ${texto3}`;
// document.write(frase)

// let frase = `Hola usuario número ${num2} llamado ${texto2}`;
// document.write(frase)


                        //LOGICOS

// EJEMPLOS TEORICOS

// let valor1 = true;
// let valor2 = false;
// let valor3 = true;
// let valor4 = false;

// let resultado = valor1 && valor2;
// document.write (resultado)

// let resultado = valor1 && valor3;
// document.write (resultado)

// let resultado = valor1 || valor2;
// document.write (resultado)

// let resultado = valor2 || valor4;
// document.write (resultado)

// let resultado = !valor2;
// document.write (resultado)

//EJEMPLOS PRACTICOS meezclando operadores 

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// let num4 = 4;
// let num5 = 4;

// let resultadoDeMezclarOperadores = (num1 <= num2) || (num3 >= num1) && (num4 == num5);
// document.write (resultadoDeMezclarOperadores)


                 //CONDICIONALES

// let nombre = "Facundo";
// let apellido = "Diaz";

// if (nombre == "Facundo" && apellido == "Diaz") {
//     alert ("Tu nombre de usuario es correcto, Facundo Diaz ");
// }

// else if (apellido == "Diaz") { 
//     alert ("Tu apellido es Diaz");  
// }
// else {
//     alert ("Tu nombre y apellido es otro");
// }


