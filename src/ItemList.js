import ItemCount from "./ItemCount";
import Item from "./Item";
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ItemList = ({ productos }) => {
                       

      if (productos.length === 0) {

        return (
            <div className="cargaProductos text-center">
                <Spinner animation="border" variant="warning"/>
                <p className="fs-4 text text-muted cargaTexto"> Cargando productos </p>
                <img src="banner_logo.png" alt="" />
            </div>
        )

      } else {

            return (
                <Container fluid className="contenedorProd">
                    <Row>
                        {productos.map((prod) => {
                            return (
                                <Col key={prod.id} className="text-center">
                                    <Item id={prod.id} title={prod.title} pictureURL={prod.pictureURL} />
                                    <ItemCount initial={1} stock={5} prodID={prod.id} onAdd={prod.description} />
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            );
      }
      
}

export default ItemList