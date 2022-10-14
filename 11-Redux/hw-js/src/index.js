const { createStore } = require('redux');
const contador = require('./reducer');
const { incremento, decremento, incrementoI } = require('./actions');
const { INCREMENTO, DECREMENTO } = require('./action-types');

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById('valor');

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  let num = store.getState();
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.innerHTML = num.contador;
}

// Ejecutamos la funcion 'renderContador':

renderContador();

// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:

store.subscribe(renderContador);

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

let sumar = document.getElementById('incremento');
sumar.onclick = () => store.dispatch(incremento);

let restar = document.getElementById('decremento');
restar.onclick = () => store.dispatch(decremento);

let incrementoImpar = document.getElementById("incrementoImpar");
incrementoImpar.onclick = () => store.dispatch(incrementoI);

let incrementoAsync = document.getElementById("incrementoAsync");
incrementoAsync.onclick = () => setTimeout(() => store.dispatch(incremento), 1000);