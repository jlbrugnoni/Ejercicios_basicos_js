// Ejercicio 2. Crear codigo que pida una temperatura en grados F y lo devuelva en grados C


// Sección de definición de variables. Se crean 2, una para la T en Farenheit y otra en Celsius.

let t_celsius, t_far;

alert("Comienzo del Ejercicio 2. Pasar temperatura de Farenheit a Celsius");

//Pido al usuario introducir el valor de temperatura que se desea pasar de grados F a grados C y se lo asigno
// a las variables que he declarado. Hago el calculo y se lo asigno a la variable de grados C.

t_far = parseFloat(prompt("Introduzca la temperatura que desea pasar de grados Farenheit a Celsius","0"));
t_celsius = ((t_far-32)/1.8);

// Imprimo por pantalla y consola los valores de los grados F y los grados C calculados.

alert("El valor de " + t_far + "F en grados Celsius es de " + t_celsius + "C");
console.log("El valor de " + t_far + "F en grados Celsius es de " + t_celsius + "C");

alert("Final de Ejercicio 2");