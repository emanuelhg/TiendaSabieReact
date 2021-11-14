import {NavLink, Link} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'


const ItemFilter = () => {

    return (
        <Dropdown className="itemFilter text-center">
            <Dropdown.Toggle variant="warning" id="dropdown-basic" className="text-light">
                Filtrar categoría
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/categoria/suplementos">Suplementos deportivos</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/categoria/control">Control de Peso</Dropdown.Item>
                <Dropdown.Item as={Link} to="/">Quitar filtro</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default ItemFilter
