import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Item from "./Item"

const ItemList = ({ productos }) => {

            return (
                <Container fluid className="contenedorProd">
                    <Row>
                        {productos.map((prod) => {
                            return (
                                <Col key={prod.id} className="contenedorProdInv text-center col-md-4">
                                    <Item 
                                        id={prod.id} 
                                        title={prod.title}
                                        category={prod.category} 
                                        pictureURL={prod.pictureURL}
                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            )
  
}

export default ItemList

