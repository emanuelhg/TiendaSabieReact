import {useEffect,useState} from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [detalles, setDetalles] = useState([])

    const {id} = useParams()

    useEffect(() => {

        setTimeout(() => {
            
            fetch(`https://617d5b011eadc500171364a7.mockapi.io/articulos?id=${id}`)

            .then(function (response) {

                return response.json()

            })

            .then(function (myJson) {

                setDetalles(myJson)

            })

        }, 2000);

    }, [id]);

    return (

        <ItemDetail detalles = { detalles } />
    )

}

export default ItemDetailContainer
