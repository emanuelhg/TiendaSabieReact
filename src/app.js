// Paso 3: tengo que tener un elemento
// const Elemento = () => <p>Hola Mundo</p>;

/* Componentes:
- Tienen que arrancar con mayúscula.
- No se puede repetir el nombre del componente.
- Los componentes son funciones.
- Los componentes deben retornar algo (return).
- Los componentes solo retornan una unica cosa. (puso usar una etiqueta vacia <></> = fragment)
*/
import Header from "./header";

const App = () => {
    return (
        <>
        <Header/>
        <footer>
            <p>Soy un footer</p>
        </footer>
        </>
    )
}

//exportar variable:

export default App;