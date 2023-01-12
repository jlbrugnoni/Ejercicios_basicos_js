// Ejercicio 3. Crear un código que solicite pesos en lb y estatura en pulgadas y devuelva peso en kg, estatura en cm e IMC

// Sección de definición de variables. Se crean 2, una para la T en Farenheit y otra en Celsius.

let peso_lb, peso_kg, estat_pulg, estat_cm, imc;

alert("Comienzo de Ejercicio 3. Calcular imc con peso en libras y estatura en pulgadas.");

peso_lb = parseFloat(prompt("Introduzca su peso en libras","0"));
estat_pulg = parseFloat(prompt("Introduzca su estatura en pulgadas","0"));

peso_kg = peso_lb / 2.204;
estat_cm = estat_pulg * 2.54;

imc = peso_kg/((estat_cm)/100)**2;

alert("Tiene un peso de " + peso_kg.toFixed(2) + "kg y una estatura de " + estat_cm.toFixed(2) + "cm. Su Indice de Masa Coporal es de " + imc.toFixed(2));
console.log("Tiene un peso de " + peso_kg.toFixed(2) + "kg y una estatura de " + estat_cm.toFixed(2) + "cm. Su Indice de Masa Coporal es de " + imc.toFixed(2));

alert("Fin de Ejercicio 3");
