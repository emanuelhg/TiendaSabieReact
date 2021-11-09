import { useContext } from 'react'
import { contexto } from './cartContext'
import Badge from 'react-bootstrap/Badge'

const CartWidget = () => {


    // const resultado = useContext(contexto)
    // console.log(resultado)

    const { cart } = useContext(contexto)
    const {sumQuantity} = useContext(contexto)
    
    
    
    return (
        <>
            <span className="material-icons carritoIcon">
                shopping_cart
            </span>
            <Badge bg="primary">
                {sumQuantity()}
            </Badge>
        </>
        
    )
}

export default CartWidget
