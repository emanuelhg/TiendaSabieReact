import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Swal from 'sweetalert2'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { contexto } from './cartContext'

const ItemDetail = ({ detalles }) => {

    const { addToCart } = useContext(contexto)

    const onAdd = (contador) => {
        Swal.fire({
            title: 'Producto agregado!',
            text: `Agregaste ${detalles[0].description}. Cantidad: ${contador}`,
            icon: 'success',
            confirmButtonText: "Aceptar"
        })
        detalles[0].quantity = contador
        addToCart(detalles)
    }

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
                                    prodName={det.description}
                                    onAdd={onAdd}
                                />
                            </Col>
                        )
                     })
                    }
                </Row>
            </Container>
        )
    }

export default ItemDetail

