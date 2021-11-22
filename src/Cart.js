import { Link } from 'react-router-dom'
import FormCart from "./FormCart"
import { useContext } from 'react'
import { contexto } from './cartContext'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const Cart = () => {

    const {cart, clearCart, removeFromCart, sumQuantity, subTotal, sumTotal} = useContext(contexto)

    return (
        <>
        {sumQuantity() > 0 ? 
        <>
            <Container fluid className="contenedor Prod">
                <Row>
                    {cart.map((prod) => {
                        return (
                            <Col key={prod.id} className="contenedorProdInv text-center col-md-4">
                                <p className="fs-4 text-primary">{ prod.title }</p>
                                <p className="lead text-secondary">{ prod.category }</p>
                                <img className="imgList" alt='img' src={ prod.pictureURL } />
                                <p className="lead text-secondary">Cantidad: { prod.quantity }</p>
                                <p className="lead text-secondary">Subtotal: {subTotal(prod.price, prod.quantity).toFixed(2)}</p>
                                <div onClick={()=>removeFromCart(prod.id)}>
                                    <Button variant="danger" className="material-icons fs-5">delete</Button>
                                </div>
                            </Col>
                         )
                    })}
                </Row>
            </Container>
            <div className="text-center fs-5">
                <p>La cantidad total de productos en tu carrito es: {sumQuantity()}</p>
                <p>El total de tu compra es $ {sumTotal().toFixed(2)}</p>
                <Button variant="danger" onClick={clearCart}>
                    Vaciar Carrito
                </Button>
            </div>
            <FormCart cart={cart} sumTotal={sumTotal()} clearCart={clearCart}/>
        </>
        : 
            <div className="text-center fs-5">
                <p>No hay productos en el carrito</p>
                <Link to="/">
                    <Button variant="success">Vamos a comprar!</Button>
                </Link>
            </div>
        }
        </>
    )
}

export default Cart
