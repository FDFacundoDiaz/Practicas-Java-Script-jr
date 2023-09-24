//CARACTERISTICAS DE LAS POO.

//ABSTRACCION: intentar reducir todas sus componentes. Ej: raza, colo, caminar, etc.
//MODULARIDAD: capacidad de resolver un problema grande, por partes.
//ENCAPSULAMIENTO: que todos los datos no se puedan acceder de manera sensilla.
//POLIORFISMO: ver como un objeto se comporta de una manera diferente del resto de un metodo, por sus propiedades.

//OTROS CONCEPTOS DE POO.

//HERENCIA: crear una clase que toma las funciones y prop de otra clase y otras cosa mas.
//METODOS ESTATICOS: no precisa que la clase se defina para serr creado.
//METODOS ACCESORES (GETTERS, SETTERS): GETTERS son para obtener un valor.
//los SETTERS, son para modificarlo o definirlo.



class Animal {
    constructor (especie, edad, color) { 
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy ${this.especie}, tengo ${this.edad} años, y soy de color
        ${this.color}.`;
    }
    verInfo() {
        document.write (this.info + "<br>");
    }

//     ladrar () { //EJEMPLO DE POLIMORFISMO
//         if (this.especie == "perro") {
//         document.write ("¡Waw! <br>");
//     }
//     else {
//         document.write ("No puede ladrar ya que es un " + this.especie + "<br>");
//     }
//    }

}
//HERENCIA

class Perro extends Animal {
    constructor (especie, edad, color, raza) {
        super (especie, edad, color);  //YA LO HEREDO Y podemos usas sus metodos.
        this.raza = raza; 
    }
//static   
  ladrar () {
        alert ("¡Waw!");
    }
}



const perro = new Perro ("perro", 5, "marron", "Doberman"); //IMPORTANTE! NO PUEDO TENER UN OBJETO CON EL MISMO
//NOMBRE QUE UNA CLASE!

const gato = new Animal ("gato", 2, "negro");
const pajaro = new Animal ("pajaro", 1, "verde");



//PARA LLAMAR AL STATIC:
 //Perro.ladrar();

perro.ladrar ();
// gato.verInfo ();
// pajaro.verInfo ();