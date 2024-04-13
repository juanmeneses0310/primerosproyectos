"use strict";
const $nombre = document.getElementById("nombre");
const $email = document.getElementById("email");
const $mensaje = document.getElementById("mensaje");
const $telefono = document.getElementById("telefono");
const $botonEnviar = document.getElementById("botonEnviar");

let nombre = null;
let email = null;
let mensaje = null;
let telefono = null;

$nombre.addEventListener("input", (evento) => {
  nombre = evento.target.value;
});

$email.addEventListener("input", (evento) => {
  email = evento.target.value;
});

$mensaje.addEventListener("input", (evento) => {
  mensaje = evento.target.value;
});

$telefono.addEventListener("input", (evento) => {
  telefono = evento.target.value;
});

$botonEnviar.addEventListener("click", (evento) => {
  evento.preventDefault();
  console.log(nombre);
  console.log(email);
  console.log(mensaje);
  console.log(telefono);
  alert("Datos recibidos, estaremos en contacto en breve");
});
