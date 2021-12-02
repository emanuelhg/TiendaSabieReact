import { Link } from "react-router-dom"
import {useState} from "react"
import Button from 'react-bootstrap/Button'

const ItemCount = ( { initial, stock, prodID, onAdd } ) => {

    const [contador, setContador] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(false)

    const sumarCantidad = () => {

        contador < stock ? setContador(contador + 1) : setContador(stock)

    }

    const restarCantidad = () => {

        contador === 1 ? setContador(1) : setContador(contador - 1)

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
                <Button variant="outline-success bg-gradient" id="restaCant" className="buttonCant material-icons"
                    onClick={restarCantidad}>remove</Button>
                {<p id={`prod${prodID}`} className="cantProd rounded shadow-sm border border-warning">{contador}</p>}
                <Button variant="outline-success bg-gradient" id="sumaCant" className="buttonCant material-icons"
                    onClick={sumarCantidad}>add</Button>
            </div>
            <div onClick={ agregarItem } className="agregarCarrito">
                <Button variant="success" className="bg-gradient">Agregar al carrito</Button>
            </div>
            <Link to="/">
                <Button className="material-icons bg-gradient" variant="primary">keyboard_return</Button>
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
