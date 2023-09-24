              //BUCLES E ITERACION

// WHILE

// let numero = 20;

// while (numero > 0) {
//     numero-- ;
//     document.write (numero + "<br>");
// }



// let numero = 4;
// while (numero <= 10) {
//     numero++ ;
//     document.write (numero + "<br>");
// }

//DO WHILE

// let numero = 3;
// do {
    //     document.write (numero + "<br>");
//     numero++;
// }
// while (numero <= 11) {
// }


// let numero = 3;
// do {
//     numero++;
//     document.write (numero + "<br>");
// }
// while (numero <= 11) {
// }

//BREAk

// let numero = 0;
// while (numero <=200) {
//     numero++;
//     document.write (numero + "<br>");
//     if (numero == 13) {
//         break;
//     }
// }


//CONTINUE

// let numero = 0;
// while (numero < 20) {
//     numero++;
//     document.write (numero + "<br>");
//     if (numero == 13 ) {
//         continue;

//        }
// }

//FOR 

// let i = 0;
// for (i; i <= 10 ; i++) { 
//     document.write (i + "<br>")
// }


// for (i = 0; i <= 100 ; i++) { 
//     document.write (i + "<br>");
//     if (i == 11) {
//         break;
//     }
// }


// for (i = 0; i <= 100 ; i++) { 
//     if (i == 11) {
//         break;   //NO MUESTRA EL 11!
//     };
//     document.write (i + "<br>");
// }


// for (i = 200; i > 0; i--) {
//     document.write(i + "<br>");
//     if (i == 190) {
//         break;
//     }

// }

// for (i = 3; i <=13 ; i++) { 
//     if (i == 9) {
//         continue;
//     }
//     document.write(i + "<br>")
// }



// for (i = 3; i <=13 ; i++) { 
//     document.write(i + "<br>");    //COMO ESTA ANTES QUE IF, NO SALTEARÁ i==9
//     if (i == 9) {
//         continue;
//     }
// }


//         //FOR IN
// let animales = ["gato", "perro", "caballo"];
// for (animal in animales) {
//     document.write (animal + "<br>")
// };

// let animales = ["gato", "perro", "caballo"];
// for (animal in animales) {
//     document.write (animales [animal]+ "<br>")
// };


// let indumentaria = ["remera", "jean", "jogger", "campera"];
// for (ropa in indumentaria) {
//     document.write (ropa + "<br>");
// }

// let indumentaria = ["remera", "jean", "jogger", "campera"];
// for (ropa in indumentaria) { 
//     document.write (indumentaria [ropa] + "<br>");
// }


//         //FOR OF

// for (animal of animales) {
//     document.write (animal + "<br>")
// }

// let indumentaria = ["remera", "calzado", "jean", "campera"];
// for (ropa of indumentaria) { 
//     document.write (ropa + "<br>")
// }


           //LABEL

// array1 = ["zapatillas", "borcegos", "botas", "ojotas"];         
// array2 = ["remera", "pantalon", "campera", array1];

// for (let array in array2) {
//     if (array == 3) {
//         for (let array of array1) {
//             document.write (array + "<br>")
//         }
//     }

//     else {   //En caso de que no sea == 3, se recorre el array2.
//         document.write (array2 [array] + "<br>")
//     }
// }


array1 = ["manzana", "banana"];
array2 = ["espinaca", "zapallo", array1,"brocoli"];

for (let array in array2) {
    if (array == 2) {
        for (let array of array1) { 
            document.write (array + "<br>")
        }
    }

    else {
        document.write (array2[array] + "<br>")
    }
}