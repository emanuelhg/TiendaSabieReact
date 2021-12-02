import Item from "./Item"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ItemList = ({ productos }) => {

            return (
                <Container fluid className="contenedorProd">
                    <Row>
                        {productos.map((prod) => {
                            return (
                                <Col key={prod.id} className="contenedorProdInv text-center col-md-4 d-flex justify-content-center">
                                    <Item 
                                        id={prod.id} 
                                        title={prod.title}
                                        category={prod.category} 
                                        catColor={prod.categoryColor}
                                        pictureURL={prod.pictureURL}
                                        description={prod.description}

                                    />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            )
  
}

export default ItemList

