// Ejercicio 1. Crear codigo que pida 4 notas y calcule la nota media

alert("Ejercicio 1. Calcular la nota media de 4 notas.");

//Sección de definición de variables. Crearemos una para el nombre
// 4 para cada nota y una para calcular y almacenar la nota media.

let nombre;
let nota1, nota2, nota3, nota4;
let nota_media;

// Pedimos al usuario introducir por pantalla los nombres y las notas,
// asignandoselas a las variables correspondientes.


nombre = prompt("Introduzca el nombre del estudiante"); 
nota1 = parseFloat(prompt("Entre la nota 1 del estudiante","0"));
nota2 = parseFloat(prompt("Entre la nota 2 del estudiante","0"));
nota3 = parseFloat(prompt("Entre la nota 3 del estudiante","0"));
nota4 = parseFloat(prompt("Entre la nota 4 del estudiante","0"));

// Se calcula el valor de nota media según las notas introducidas

nota_media = ((nota1 + nota2 + nota3 + nota4)/4);

// Se imprime por consola a modo de comprobación de los datos

console.log("La nota 1 es " + nota1);
console.log("La nota 2 es " + nota2);
console.log("La nota 3 es " + nota3);
console.log("La nota 4 es " + nota4);
console.log("La nota media es " + nota_media);

// se imprime los resultados tanto por consola como por un alert

console.log("La nota media de " + nombre + " es " + nota_media);
alert("La nota media de " + nombre + " es " + nota_media);

alert("Final de Ejercicio 1.");

// Pruena de que se hizo correctamente el push

