

class Celular {
    constructor (color,peso,tamaño,rdc,ram) {
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDeCamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }
    presionarBotonEncendido () {
         if (this.encendido == false) {
            alert ("celular prendido");
            this.encendido = true;
         }
         else {
            alert ("celular apagado");
            this.encendido = false;
         }
    }

    reiniciar () {
        if (this.encendido == true) {
            alert ("reiniciando celular");
        }
        else {
            alert ("el celular está apagado");
        }
     }
     tomarFoto () {
        alert (`foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
     }
     grabarVideo () {
        alert (`grabando video en ${this.resolucionDeCamara}`);
     }
    mobileInfo () {
        return ` 
        Color: <b>${this.color} </b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño: <b>${this.tamaño}</b><br>
        Memoria Ram: <b>${this.memoriaRam}</b><br>
        Resolucion de video: <b>${this.resolucionDeCamara}</b><br>`;        
    }
}


class CelularAltaGama extends Celular {
       constructor (color,peso,tamaño,rdc,ram, rcde) {
       super (color, peso, tamaño, rdc, ram);
       this.resolucionDeCamaraExtra = rcde;
       }
       grabarVideoLento () {
        alert ("estas grabando en video lento");
       }
       reconocimientoFacial () {
        alert ("vamos a iniciar el reconocimiento facial");
       }
       InfoAltaGama() {
        return this.mobileInfo() + `Resolucion de Camara Extra: ${this.resolucionDeCamaraExtra} `
       }
}


// const celular1 = new Celular ("rojo", "150g", "5''", "hd", "2GB");
// const celular2 = new Celular ("azul", "250g", "6''", "full hd", "8GB");
// const celular3 = new Celular ("amarillo", "350g", "7''", "4k", "16GB");

// document.write (`
//        ${celular1.mobileInfo()}<br>
//        ${celular2.mobileInfo()}<br>
//        ${celular3.mobileInfo()}<br>
//        `);




const celular1 = new CelularAltaGama ("rojo", "150g", "5''", "4k", "32GB","full hd");
const celular2 = new CelularAltaGama ("negro", "130g", "6''", "4k", "32GB", "full hd");


document.write (`
       ${celular1.InfoAltaGama()}<br>
       ${celular2.InfoAltaGama()}<br>
       `);







// celular1.presionarBotonEncendido ();
// celular1.tomarFoto();
// celular1.grabarVideo ();
// celular1.reiniciar ();
// celular1.presionarBotonEncendido();