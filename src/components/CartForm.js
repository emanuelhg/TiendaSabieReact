import { useState } from "react"
import { validateEmail, validateName, validatePhone, initialState } from '../util/customUtil.js'
import { firestore } from "../database/firebase"
import Container from 'react-bootstrap/Container'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'
import Swal from 'sweetalert2'

const CartForm = ({ clearCart, sumTotal, cart }) => {

    const [formData, setFormData] = useState(initialState)
    const db = firestore
    const orders = db.collection("orders")
    const formCarrito = document.getElementById('formDatos')

    function handleSubmit(e) {

        e.preventDefault()
        const orderDetails = cart.map((item) => `ID: ${item.id} - Producto: ${item.description}, Cantidad: ${item.quantity}`);
        const date = new Date();
        const order = {

            date: date,
            buyer: formData,
            item: orderDetails,
            total: sumTotal,

        }

        orders
            .add(order)
            .then((res) => Swal.fire({

                title: 'Pedido confirmado!',
                html: `<p>${formData.name}:</p>
                       <p>Enviamos un e-mail a la casilla: <b>${formData.email1}</b> con los pasos para realizar el pago.</p>
                       <p>Tu pedido ha sido registrado con el ID: <b>${res.id}</b>.</p>
                       <p>Gracias por confiar en SaBie!</p>`,
                icon: 'success',
                confirmButtonText: "Aceptar"

            }))    
            .then(setFormData(initialState))
            .then(formCarrito.reset())
            .catch((error) => console.log(error))
            .finally(() => clearCart())
            
    }

    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Container className="formCarrito col-md-4">
            <h3 className="text-center text-success titulos">Completá tus datos:</h3>
            <Form id="formDatos" onSubmit={handleSubmit} onChange={handleChange}>
                <Form.Group controlId="name">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control        
                        type="name" 
                        name="name" 
                        className={ 
                            validateName(formData.name)
                                ? "mb-3 is-valid"
                                : "mb-3 is-invalid"
                        } 
                        required
                    />
                        <Form.Control.Feedback type="invalid">
                            El campo solo acepta letras y espacios.
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="lastname">
                    <Form.Label>Apellido:</Form.Label>
                    <Form.Control 
                        type="name" 
                        name="lastname" 
                        className={ 
                            validateName(formData.lastname)
                                ? "mb-3 is-valid"
                                : "mb-3 is-invalid"
                        } 
                        required
                    />
                        <Form.Control.Feedback type="invalid">
                            El campo solo acepta letras y espacios.
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Teléfono:</Form.Label>
                    <Form.Control 
                        type="number" 
                        name="phone" 
                        className={ 
                            validatePhone(formData.phone)
                                ? "mb-3 is-valid"
                                : "mb-3 is-invalid"
                        } 
                        required
                    />
                        <Form.Control.Feedback type="invalid">
                            El campo solo acepta 10 números.
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email1">
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email1" 
                        className={ 
                            validateEmail(formData.email1)
                                ? "mb-3 is-valid"
                                : "mb-3 is-invalid"
                        } 
                        required
                    />
                        <Form.Control.Feedback type="invalid">
                            Ingresá un e-mail válido.
                      </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="email2">
                    <Form.Label>Confirmá tu e-mail:</Form.Label>
                    <Form.Control 
                        onChange={handleChange} 
                        type="email" 
                        name="email2" 
                        className={ 
                            formData.email2 === '' ? "mb-3 is-invalid" :
                            formData.email1 === formData.email2
                                ? "mb-3 is-valid"
                                : "mb-3 is-invalid"
                        } 
                        required
                    />
                      <Form.Control.Feedback type="invalid">
                        Los e-mails deben coincidir.
                      </Form.Control.Feedback>
                </Form.Group>
                <div className="text-center">
                    {validateEmail(formData.email1)
                    && formData.email1 === formData.email2
                    && validateName(formData.name)
                    && validateName(formData.lastname)
                    && validatePhone(formData.phone)
                    ? (
                    <Button variant="success" type="submit">
                        Finalizar compra
                    </Button>
                    ) : (
                    <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-disabled">Revisá los datos marcados con rojo!
                        </Tooltip>}>
                        <span className="d-inline-block">
                            <Button disabled className="bg-gradient" variant="danger"
                                style={{ pointerEvents: 'none' }}>
                                Finalizar compra
                            </Button>
                        </span>
                    </OverlayTrigger>
                    )}
                </div>
            </Form>
        </Container>
    )
}

export default CartForm




