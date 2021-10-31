import {useEffect,useState} from "react"
import { useParams } from "react-router"
import ItemList from "./ItemList"
import ItemFilter from "./ItemFilter"


const ItemListContainer = () => {

    const {cat} = useParams()

    const [productos, setProductos] = useState([])

    useEffect(() => {

        setTimeout(() => {

            if (cat === "suplementos") {

                fetch("https://617d5b011eadc500171364a7.mockapi.io/articulos?category=suplementos")

                    .then(function (response) {

                        return response.json()

                    })

                    .then(function (myJson) {

                        setProductos(myJson)

                    })

            } else if (cat === "controlpeso") {

                fetch("https://617d5b011eadc500171364a7.mockapi.io/articulos?category=control")

                    .then(function (response) {

                        return response.json()

                    })

                    .then(function (myJson) {

                        setProductos(myJson)

                    })
            } else

                fetch("https://617d5b011eadc500171364a7.mockapi.io/articulos")

                .then(function (response) {

                    return response.json()

                })

                .then(function (myJson) {

                    setProductos(myJson)

                })

        }, 2000)

    }, [cat])

    return (
            <>
            <ItemFilter />
            <ItemList productos = {productos} />
            </>
    )

}

export default ItemListContainer
