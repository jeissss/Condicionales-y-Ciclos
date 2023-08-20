/*8- Se desea elaborar un algoritmo que determine cuántas personas de un grupo
tienen hijos y cuántos no tienen, además se desea conocer el promedio del número
de hijos. */

let personasConHijos = 0;
let personasSinHijos = 0;
let totalHijos = 0;
let contadorPersonas = 0;

while (contadorPersonas < 3) {
    let tieneHijos = prompt("La persona " + (contadorPersonas + 1) + " tiene hijos? (s/n)").toLowerCase();
    
    if (tieneHijos === 's') {
        personasConHijos++;
        let cantidadHijos = parseInt(prompt("Ingrese la cantidad de hijos de la persona " + (contadorPersonas + 1) + ":"));
        totalHijos += cantidadHijos;
    } else {
        personasSinHijos++;
    }
    
    contadorPersonas++;
}

let promedioHijos = totalHijos / personasConHijos;

console.log("Personas con hijos: " + personasConHijos);
console.log("Personas sin hijos: " + personasSinHijos);
console.log("Promedio de hijos por persona con hijos: " + promedioHijos);