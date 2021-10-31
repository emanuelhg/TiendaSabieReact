import { Link } from 'react-router-dom'

function Links() {
    return (
        <>
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="#">Nosotros</Link>
            <Link className="nav-link" to="#">Productos</Link>
            <Link className="nav-link" to="#">Contacto</Link>
        </>
    )
}

export default Links
