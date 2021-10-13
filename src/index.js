//Paso 1: tiene que estar la variable React en scope
import React from "react";

//Paso 2: tiene que estar la variable ReactDOM en scope
import ReactDOM from "react-dom";

//Paso 3: ver archivo App.js // importo la variable.
import App from "./app";
import "./estilos.css"

//Paso 4: tengo que renderizar el elemento
ReactDOM.render( <App/>, document.getElementById("root") );

