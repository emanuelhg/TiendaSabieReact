import { useContext } from 'react'
import { contexto } from './cartContext'

const Cart = () => {

    const resultado = useContext(contexto)
    console.log(resultado)

    return (
        <div>
            Soy el carrito
        </div>
    )
}

export default Cart
