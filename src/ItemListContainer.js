import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { firestore } from "./firebase"
import ItemList from "./ItemList"
import ItemFilter from "./ItemFilter"

const ItemListContainer = () => {

    const {categoria} = useParams()

    const [productos, setProductos] = useState([])

    useEffect(() => {
        if (categoria) {
            const db = firestore
            db.collection("productos").where("categoryURL", "==", categoria).get()
                .then(res => {
                    setProductos(res.docs.map(producto => ({
                        id: producto.id,
                        ...producto.data()
                    })))
                })
                .catch(err => console.log(err))

        } else {
            const db = firestore
            db.collection("productos").get()
                .then(res => {
                    setProductos(res.docs.map(producto => ({
                        id: producto.id,
                        ...producto.data()
                    })))
                })
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

