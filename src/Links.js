import { Link } from 'react-router-dom';

function Links() {
    return (
        <>
            <Link className="nav-link" to="/cat/1">Inicio</Link>
            <Link className="nav-link" to="/cat/2">Nosotros</Link>
            <Link className="nav-link" to="#">Productos</Link>
            <Link className="nav-link" to="#">Contacto</Link>
        </>
    )
}

export default Links
