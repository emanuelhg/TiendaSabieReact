import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Swal from 'sweetalert2'
import ItemCount from './ItemCount'

const ItemDetail = ({ detalles }) => {
    
    if (detalles.length === 0) {

        return (
            <div className="cargaProductos text-center">
                <Spinner animation="border" variant="warning" />
                <p className="fs-4 text text-muted cargaTexto"> Cargando detalle </p>
                <img src="/banner_logo.png" alt="" />
            </div>
        )

    } else {

        return (
       
            <Container fluid className="contenedorProd">
                <Row>
                    {detalles.map((det) => {
                        return (
                            <Col key={det.id} className="contenedorProdInv text-center col-md-12">
                                <p className="fs-4 text-primary">{det.title}</p>
                                <p className="lead text-secondary">{det.category}</p>
                                <img alt='img' src={ det.pictureURL }/>
                                <p className="text-secondary detalleProd">{ det.description}</p>
                                <p className="lead text-secondary">Precio: $<span>{ det.price }</span></p>
                                <ItemCount 
                                    initial={1} 
                                    stock={5} 
                                    prodID={det.id} 
                                    onAdd={()=>{ Swal.fire({
                                                    title: 'Producto agregado!', 
                                                    text: `Agregaste el producto: ${det.description} - Cantidad: ${document.getElementById(`prod${det.id}`).innerHTML}`, 
                                                    icon: 'success',
                                                    confirmButtonText: "Aceptar" 
                                                    })
                                                }
                                            } 
                                />
                                <Link to="/">
                                    <Button className="botonVolver material-icons" variant="secondary">keyboard_return</Button>
                                </Link>
                            </Col>
                        )
                     })
                    }
                </Row>
            </Container>
        )
    }
}

export default ItemDetail

