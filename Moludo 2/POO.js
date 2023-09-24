//Clase: es como una fabrica de objetos, que tega ciertas cualidades.
//Crean objetos, y los objetos son resultados de ellas mismas.
//Atributo: caracteristicas.
//Constructor: particularidad de las clases, este creará las propiedades de las clases.
//Instanciacio: Cuando finalizamos todo, podemos decir que estamos instanciando un objeto.

class animal {
    constructor (especie, edad, color) { //especia, edad y color son parametros.
        this.esp = especie; //this es el OBJETO A CREAR, y tendrá algun atriburo o propiedad llamada "esp".
        this.age = edad;
        this.color = color;
        this.info = `Soy ${this.esp}, tengo ${this.age} años, y soy de color
        ${this.color}.`;
    }

   //metodo NO PUEDEN USARSE FUNCIONES FLECHA!
   verInfo () {
    document.write (this.info + "<br>");
   }

}

const perro = new animal ("perro", 5, "rojo");
const gato = new animal ("gato", 2, "negro");
const pajaro = new animal ("pajaro", 1, "verde");

//llamando metodo
perro.verInfo ();
gato.verInfo ();
pajaro.verInfo ();



// document.write (perro); 
// // console.log (perro);}


// document.write (perro.info + "<br>");
// document.write (gato.info + "<br>");
// document.write (pajaro.info + "<br>");

//Pero podemos resumir todo  el document.write con un metodo. Son Acciones
//que podemos realizar. Se crean dentro de la CLASE, sino no seria un metodo.