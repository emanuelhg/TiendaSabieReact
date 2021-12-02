import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Item = ({ id, title, pictureURL, category, catColor, description }) => {

    return (
            <Card className={`border-${catColor} cardProducto`}>
                <Card.Title className="fs-4 text-primary">{ title }</Card.Title>
                <Card.Img variant="top" className="imgList" src={ pictureURL } />
                <Card.Text className={`lead text-white bg-${catColor} bg-gradient rounded-3 cardCategory`}>
                    { category }
                </Card.Text>
                <Card.Body>
                    <Card.Text className="text-secondary">
                        { description }
                    </Card.Text>
                </Card.Body>
                <div className="agregarCarrito">
                    <Link to={`/item/producto${id}`}>
                        <Button variant="success gradient" className="bg-gradient">
                            Detalles
                        </Button>
                    </Link>
                </div>
            </Card>
    )
}

export default Item

