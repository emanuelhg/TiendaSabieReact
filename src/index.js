//Paso 1: tiene que estar la variable React en scope
import React from "react";

//Paso 2: tiene que estar la variable ReactDOM en scope
import ReactDOM from "react-dom";

//Paso 3: tengo que tener un elemento
const Elemento = () => <p>Hola Mundo</p>;

//Paso 4: tengo que renderizar el elemento
ReactDOM.render( <Elemento/>, document.getElementById("root") );

