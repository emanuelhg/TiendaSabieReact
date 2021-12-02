import { useParams } from "react-router"
import { useEffect, useState } from "react"
import ItemDetail from "../components/ItemDetail"
import LoadingSpin from "../components/LoadingSpin"
import { firestore } from "../database/firebase"

const ItemDetailContainer = () => {

    const [detalles, setDetalles] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
      
      const db = firestore
      const collection = db.collection("productos")

      collection.doc(id).get()
        .then(res => {
          setDetalles([{
            id: res.id,
            ...res.data()
          }])
        })
        .catch(err => console.log(err))
        .finally(() => setLoading(false));

    }, [id]);

    return (

      loading ? <LoadingSpin /> : <ItemDetail detalles={detalles} />

    )

}

export default ItemDetailContainer