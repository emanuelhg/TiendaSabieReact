import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { firestore } from "./firebase"
import ItemList from "./ItemList"
import ItemFilter from "./ItemFilter"

const ItemListContainer = () => {

    const {categoria} = useParams()

    const [productos, setProductos] = useState([])

    useEffect(() => {

        const db = firestore
        const collection = db.collection("productos")

        const getItems = res => {
            setProductos(res.docs.map(producto => ({
                id: producto.id,
                ...producto.data()
            })))
        }

        if (categoria) {
            collection.where("categoryURL", "==", categoria).get()
                .then(getItems)
                .catch(err => console.log(err))

        } else {
            collection.get()
                .then(getItems)
                .catch(err => console.log(err))
        }

    }, [categoria])

    return (
            <>
                <ItemFilter />
                <ItemList productos = {productos} />
            </>
    )

}

export default ItemListContainer

