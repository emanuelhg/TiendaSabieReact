import {useEffect,useState} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";

const ItemListContainer = () => {

    //const resultado = useParams();
    //console.log(resultado);
    const [productos, setProductos] = useState([]);

    const getData = () => {

        fetch("/Products.json")

            .then(function (response) {

                return response.json();

            })

            .then(function (myJson) {

                setProductos(myJson)

            });

    }

    useEffect(() => {

        setTimeout(() => {

            getData()

        }, 2000);

    }, []);

    return (
        
            <ItemList productos = {productos} />
        
    )

}

export default ItemListContainer
