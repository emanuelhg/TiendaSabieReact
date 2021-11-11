import { useContext } from 'react'
import { contexto } from './cartContext'
import Button from 'react-bootstrap/Button'

const Cart = () => {

    const {cart} = useContext(contexto)
    const {removeFromCart} = useContext(contexto)
    console.log(cart)

    return (
        <div>
            Soy el carrito
            <div onClick={() => removeFromCart(1)}  className="agregarCarrito">
                <Button variant="success">borrar 1</Button>
            </div>
        </div>
    )
}

export default Cart
