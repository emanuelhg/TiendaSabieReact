import { Link } from "react-router-dom"
import {useState} from "react"
import Button from 'react-bootstrap/Button'

const ItemCount = ( { initial, stock, prodID, prodName, onAdd } ) => {

    const [contador, setContador] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(false)
    const buttonAdd = document.getElementById('sumaCant')
    const buttonRemove = document.getElementById('restaCant')

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

    const agregarItem = () => { 

        onAdd(contador)
        setCambiarBoton(true)    
    
    }


    return (
        <>
        { !cambiarBoton ?
        <>
            <div className="controlCantidad">
                <Button variant="outline-info" id="restaCant" className="buttonCant material-icons"
                    onClick={restarCantidad}>remove</Button>
                {<p id={`prod${prodID}`} className="cantProd rounded border border-info">{contador}</p>}
                <Button variant="outline-info" id="sumaCant" className="buttonCant material-icons"
                    onClick={sumarCantidad}>add</Button>
            </div>
            <div onClick={ agregarItem } className="agregarCarrito">
                <Button variant="success">Agregar al carrito</Button>
            </div>
            <Link to="/">
                <Button className="botonVolver material-icons" variant="primary">keyboard_return</Button>
            </Link>
        </>
        :
        <>
            <div className="finContinua">
                <Link to="/cart">
                    <Button variant="success">Ir al carrito</Button>
                </Link>
                <Link to="/">
                    <Button variant="primary">Continuar comprando</Button>
                </Link>
            </div>
        </>}
        </>
    )
}

export default ItemCount
