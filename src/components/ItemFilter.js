import {NavLink, Link} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'

const ItemFilter = () => {

    return (
        <Dropdown className="itemFilter text-center">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="text-white bg-secondary bg-gradient">
                Filtrar categoría
            </Dropdown.Toggle>
            <Dropdown.Menu >
                <Dropdown.Item as={NavLink} to="/categoria/suplementos"  className="text-white bg-primary bg-gradient">Suplementos deportivos</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/categoria/control" className="text-white bg-warning bg-gradient" >Control de Peso</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/categoria/nutricionales" className="text-white bg-danger bg-gradient">Suplementos nutricionales</Dropdown.Item>
                <Dropdown.Item as={Link} to="/" className="text-white bg-secondary bg-gradient">Quitar filtro</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default ItemFilter
