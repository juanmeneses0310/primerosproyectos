"use strict";

/*const Nombre = prompt ("Deja tu nombre")
console.log (Nombre)*/

// Hacer un programa que salude por nombre, si no solo mostrar hola.

/*const nombreusuario = prompt("Ingrese su nombre")
if (true) {
    document.write("hola,  " + nombreusuario + " eres el mejor!")
 else {
    document.write ("Hola")*/

/*const entrada = prompt ("Ingresa tu nombre");
console.log (entrada);

switch (entrada){;
    case "":
        document.write("hola");
        break;
    default;
        case entrada: 
        document.write("Hola " + entrada + " eres un crack");
        break;
}*/

// Hacer un programa que pida dos números al usuario y los sume.

/*const numero1 = prompt("Que número quieres sumar");
const numero2 = prompt("cuanto le vas a sumar");

document.write(Number(numero1) + Number(numero2));*/

/*const numero1 = Number(prompt("Que número quieres sumar"));
const numero2 = parseInt(prompt("cuanto le vas a sumar"));

document.write((numero1) + (numero2));
document.write(`La suma de ${numero1} y ${numero2} es ${numero1+numero2}`);
*/

// Hacer un programa que pida aparte nombre y apellido y muestre el nombre completo

/*let nombre = prompt("Cual es tu nombre");
let apellido = prompt("Cual es tu apellido");
let resultado;

resultado = (nombre) + (" ") + (apellido);
document.write(resultado);
*/

//Interpolacion de variables
/*const nombre =prompt("Ingrese su nombre");
const apellido =prompt("Ingrese su apellido");
console.log(nombre + " " + apellido);
document.write(`${nombre} ${apellido}`);
*/

// Hacer un programa que reciba del usuario un número y muestre si es cero
// de otra manera que muestre si es positivo o si es negativo

/*let numero = Number(prompt("Ingrese su número"));

if (isNaN(numero)) {
  document.write("El valor ingresado no es un número");
} else {
  if (numero == 0) {
    document.write(`El número ingresado es igual a 0`);
  } else if (numero > 0) {
    document.write(`El número ingresado ${numero} es positivo`);
  } else if (numero < 0) {
    document.write(`El número ingresado ${numero} es negativo`);
  }
}*/

// Hacer un programa que reciba del usuario dos números y muestre cual es
// el número mayor y cual es el número menor.

const numero1 = Number(prompt("Ingrese su primer número"));
const numero2 = Number(prompt("Ingrese su segundo número"));

if (numero1 == numero2) {
  document.write(`Los números ingresados ${numero1} y ${numero2} son iguales`);
} else if (numero1 > numero2) {
  document.write(`El primer número ingresado ${numero1} es mayor a ${numero2}`);
} else if (numero1 < numero2) {
  document.write(
    `El segundo número ingresado ${numero2} es mayor que ${numero1}`
  );
}
