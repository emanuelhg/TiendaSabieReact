import {useState} from "react";
import Button from 'react-bootstrap/Button';

const ItemCount = ( { initial, stock, prodID, onAdd } ) => {

    const [contador, setContador] = useState(initial);
    const buttonAdd = document.getElementById('sumaCant');
    const buttonRemove = document.getElementById('restaCant');

    const sumarCantidad = () => {

        if (stock === contador) {

            buttonAdd.disable = true

        } else {

            setContador(contador + 1)

        }
    }

    const restarCantidad = () => {

        if (contador === 1) {

            buttonRemove.disable = true

        } else {

            setContador(contador - 1)

        }
    }

    function addToCart() {

        let cantidadProducto = document.getElementById(`prod${prodID}`).innerText;
        alert(`Agregaste el producto: ${onAdd}. Cantidad: ${cantidadProducto}`);

    }


    return (
        <>
            <div className="controlCantidad">
                <Button variant="outline-info" id="restaCant" className="buttonCant material-icons"
                    onClick={restarCantidad}>remove</Button>
                {<p id={`prod${prodID}`} className={`cantProd rounded border border-info prod${prodID}`}>{ contador }</p>}
                <Button variant="outline-info" id="sumaCant" className="buttonCant material-icons"
                    onClick={sumarCantidad}>add</Button>
            </div>
            <div onClick={ addToCart } className="agregarCarrito">
                <Button variant="success">Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount
