import ItemCount from "./ItemCount";
import Spinner from 'react-bootstrap/Spinner';
import {useEffect,useState} from "react";

const ItemList = () => {

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

  
      if (productos.length === 0) {

        return (
            <div className="text-center">
                <Spinner animation="border" variant="warning"/>
                <p> Cargando productos </p>
            </div>
        )

      } else {

            return (
                <div>
                    {productos.map((prod, index) => {
                    return (
                        <div key={prod.id} className="text-center">
                            <p key={prod.title}>{prod.title}</p>
                            <img key={prod.pictureURL} alt='img' src={prod.pictureURL} />
                            <p key={prod.description}>{prod.description}</p>
                            <p key={prod.price}>{prod.price}</p>
                            <ItemCount initial={1} stock={5} prodID={prod.id}/>
                        </div>
                    );
                    })}
                </div>
            );
      }
      
}

export default ItemList
