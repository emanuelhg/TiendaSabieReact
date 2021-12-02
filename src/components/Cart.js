import { Link } from 'react-router-dom'
import CartForm from './CartForm'
import { useContext } from 'react'
import { contexto } from '../context/cartContext'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const Cart = () => {

    const {cart, clearCart, removeFromCart, sumQuantity, subTotal, sumTotal} = useContext(contexto)

    return (
        <>
        {sumQuantity() > 0 ? 
        <>
            <Container fluid className="col-md-10 contenedorTabla">
                <h1 className="text-center text-success titulos">Carrito:</h1>
                <Table className="tablaProd shadow-sm text-center responsive border-muted" size="sm" bordered>
                    <thead>
                        <tr className="text-success bg-light">
                            <th>Foto</th>
                            <th>Marca</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((prod) => {
                            return (
                                <tr key={prod.id}>
                                    <td><img src={prod.pictureURL} alt={prod.name} className="img-fluid imgProdMini"/></td>
                                    <td>{ prod.title }</td>
                                    <td>{ prod.description }</td>
                                    <td>{ prod.quantity }</td>
                                    <td>$ { subTotal(prod.price, prod.quantity).toFixed(2) }</td>
                                    <td>
                                        <div onClick={()=>removeFromCart(prod.id)}>
                                            <Button variant="danger" className="material-icons btn-sm bg-gradient">remove</Button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
            <Container fluid className="col-md-6 contenedorTotales">
                <Table className="tablaProd shadow-sm text-center responsive border-muted" size="sm" bordered>
                    <thead>
                        <tr className="text-success bg-light">
                            <th>Cant. total</th>
                            <th>Importe a pagar</th>
                            <th>Continuar compra</th>
                            <th>Vaciar carrito</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{sumQuantity()}</td>
                            <td>$ {sumTotal().toFixed(2)}</td>                            
                            <td>
                                <Link to="/">
                                    <Button variant="success" className="material-icons btn-sm bg-gradient">
                                        add
                                    </Button>
                                </Link>
                            </td>
                            <td>
                                <Button variant="danger" className="material-icons btn-sm bg-gradient" onClick={clearCart}>
                                    clear
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            <CartForm cart={cart} sumTotal={sumTotal()} clearCart={clearCart}/>
        </>
        : 
            <div className="carritoVacio text-muted text-center fs-5">
                <p>No hay productos en el carrito!</p>
                <Link to="/">
                    <Button variant="success">ir a la tienda</Button>
                </Link>
            </div>
        }
        </>
    )
}

export default Cart
