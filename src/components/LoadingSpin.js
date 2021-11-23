import Spinner from 'react-bootstrap/Spinner'

const LoadingSpin = () => {
    return (
        <div className="spinnerProd text-muted text-center fs-5">
            <p>Cargando...</p>
            <Spinner animation="border" variant="warning" />
        </div>
    )
}

export default LoadingSpin
