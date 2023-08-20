/*5- En cierta universidad se tiene N cantidad de estudiantes. Elabore un algoritmo
que encuentre el promedio de edades de los estudiantes mayores de 21 años y el
promedio de edades del resto de estudiantes. Por cada estudiante se tiene un
registro que contiene su código y edad.*/

/*let num = prompt("Ingrese la cantidad de estudiantes")

let mayores21 = 0;
let sumaMayores21 = 0;

let menores21 = 0;
let sumaMenores21 = 0;

for (let i = 1; i <= num; i++) {
    let codigoEstudiante = prompt("Ingrese el código del estudiante # " + i);
    let edad = parseInt(prompt("Ingrese la edad del estudiante #" + i));
    
    if (edad > 21) {
        sumaMayores21 += edad;
        mayores21++;
    } else {
        sumaMenores21 += edad;
        menores21++;
    }
    console.log("El registro de estudiantes es el siguiente: " + codigoEstudiante + " " + edad )

}

let promedioMayores = 0;
if (mayores21 > 0) {
    promedioMayores = sumaMayores21 / mayores21;
}

let promedioMenores = 0;
if (menores21 > 0) {
    promedioMenores = sumaMenores21 / menores21;
}

console.log("El promedio de edades de estudiantes mayores de 21 años es: " + promedioMayores)
console.log("El promedio de edades de estudiantes menores de 21 años es: " + promedioMenores)*/