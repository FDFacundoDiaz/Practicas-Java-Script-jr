//Alumnos inscriptos son 19, durante los proximos 30 dias se debera crear
//un sistema de asistencias para llevar un registro de los alumnos que asisten 
//a clase.
//Presentes (P), Asentes (A) en clase.
//Pasaodos los 30 dias, mostrar la situacion final de los alumnos (numer de presentes 
//y de ausentes).
//Se puede tener un maximo de 10% de ausencias por semestre. Si se tiene más aclarar que está reprobado.

let cantidad = prompt ("¿Cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) { 
         alumnosTotales [i] = [prompt ("Nombre del alumno " + (i+ 1)), 0] ; //ARRAY DENTRO DE UN ARRAY = MATRIZ BIDIMENSIONAL

}

const tomarAsistencia = (nombre, p)=> {
    let presencia = prompt (nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales [p][1]++;
    }
}

for (i = 0; i < 5; i++) {
     for (alumno in alumnosTotales) { //llamamos a la funcion 30 veces
        tomarAsistencia (alumnosTotales [alumno][0], alumno);
     }
}

for (alumno in alumnosTotales) {
    let resultado =  `${alumnosTotales[alumno][0]}:<br>
            Presentes: ${alumnosTotales[alumno][1]} <br>
            Ausencias: ${5 - parseInt (alumnosTotales[alumno][1])}`;

             if (5 - alumnosTotales [alumno] [1] > 2 ) {
                resultado += " REPROBADO POR INASISTENCIAS <br><br>";
             }
             else {
                resultado += "<br><br>"
             }
             document.write  (resultado)

 }