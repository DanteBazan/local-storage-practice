// localStorage
// sessionStorage

// la forma de guardar un valor en locastorage es la siguiente

// localStorage.setItem("iva", 21);

//esto se guarda en el almacenamiento local del navegador

// esto lo podriamos ver como un objeto, a continuacion el ejemplo:

// let localStorage = {
//   iva: 21,
// };

// algo asi seria lo que estamos haciendo cuando llamamos este objeto

// Dato para anotar: Todo lo que guardemos como valor en el almacenamiento local o en el almacenamiento de session, el navegador lo va a tomar como un string, todo lo que pasemos al almacenamiento local o session va a ser tratado como un string, sea un valor numerico, boolean, o string(que ya es string jaja)

// localStorage.setItem("nombre", "Dante");

// por mas que eliminemos la linea de codigo donde le decimos al localstorage que lo guarde, si las borramos, guardamos y vamos a la parte de aplicacion en el navegador vamos a ver que en la parte de almacenamiento local esto va a seguir ahi, no se va a borrar, salvo que lo eliminemos.

// tambien podemos pasarselo como una variable

// let usuario = "Matias";

// localStorage.setItem("usuario", usuario);

// // si queremos obtener algo del localstorage

// let usuarioEnLocalStorage = localStorage.getItem("usuario");
// console.log(usuarioEnLocalStorage);

// let usuarioIngresado = prompt("Ingrese su nombre");
// localStorage.setItem("usuario-ingresado", usuarioIngresado);

// let usuarioIngresadoEnLocalStorage = localStorage.getItem("usuario-ingresado");
// console.log(usuarioIngresadoEnLocalStorage);

const usuario = {
  nombre: "Dante",
  edad: 27,
};

// opcion 1
const usuarioJSON = JSON.stringify(usuario);
localStorage.setItem("usuario", usuarioJSON);

// opcion 2
localStorage.setItem("usuario", JSON.stringify(usuario));

// opcion 1
const usuarioEnLocalStorage = localStorage.getItem("usuario");
const usuarioObjeto = JSON.parse(usuarioEnLocalStorage);

// opcion 2
const usuarioEnLS = JSON.parse(localStorage.getItem("usuario"));

console.log(usuarioEnLS);

// array de objetos
const productos = [
  { nombre: "silla", precio: 1500 },
  { nombre: "sillon", precio: 1500 },
  { nombre: "mesa", precio: 1500 },
];

localStorage.setItem("productos", JSON.stringify(productos));

const productosEnLS = JSON.parse(localStorage.getItem("productos"));
console.log(productosEnLS);

//EJEMPLO DE DARK MODE O LIGHT MODE

const button = document.querySelector("#btn-change");
const body = document.querySelector("body");

let darkMode = localStorage.getItem("dark-mode");

const activarDarkmode = () => {
  body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "activado");
};

const disableFunctionDarkMode = () => {
  body.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", "desactivado");
};

if (darkMode === "activado") {
  activarDarkmode();
} else {
  disableFunctionDarkMode();
}

button.addEventListener("click", () => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "activado") {
    disableFunctionDarkMode();
  } else {
    activarDarkmode();
  }
});
