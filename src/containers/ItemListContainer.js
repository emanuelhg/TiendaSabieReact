import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { firestore } from "../database/firebase"
import ItemList from "../components/ItemList"
import ItemFilter from "../components/ItemFilter"
import LoadingSpin from "../components/LoadingSpin"

const ItemListContainer = () => {

    const {categoria} = useParams()

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

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
                .finally(() => setLoading(false));

        } else {
            collection.get()
                .then(getItems)
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        }

    }, [categoria])

    return (
        loading ? 
            <LoadingSpin /> 
        : 
        <>
            <h1 className="text-center text-success titulos">Productos:</h1>
            <ItemFilter />
            <ItemList productos = {productos} />
        </>
    )

}

export default ItemListContainer

