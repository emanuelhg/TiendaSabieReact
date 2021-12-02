import ItemCount from './ItemCount'
import { useContext } from 'react'
import { contexto } from '../context/cartContext'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Swal from 'sweetalert2'

const ItemDetail = ({ detalles }) => {

    const { addToCart } = useContext(contexto)

    const onAdd = (contador) => {

        const producto = detalles[0]
        producto.quantity = contador

        Swal.fire({
            title: 'Producto agregado!',
            text: `Agregaste ${producto.description}. Cantidad: ${contador}`,
            icon: 'success',
            confirmButtonText: "Aceptar"
        })

        addToCart(producto)
    }

        return (
            <Container fluid className="contenedorProd">
                <Row className="d-flex justify-content-center">
                    {detalles.map((det) => {
                        return (
                            <Col key={det.id} className="contenedorProdInv text-center col-md-6">
                                <p className="fs-4 text-primary">{det.title}</p>
                                <p className="lead text-secondary">{det.category}</p>
                                <img alt='img' src={ det.pictureURL }/>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header className="text-center">{ det.description }</Accordion.Header>
                                        <Accordion.Body>
                                            {det.longDescription}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <p className="lead"><span className="fw-bold">Precio: $ </span>{ det.price }</p>
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

