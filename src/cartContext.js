import { createContext, useState } from "react"

export const contexto = createContext()

export const { Provider } = contexto

export const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([])
  

    const addToCart = (detalles) => {
        setCart([...cart, detalles])
        console.log(cart)
            }


    const removeFromCart = (product) => {
        setCart(cart.filter(item => item.id !== product.id))
    }

    const clearFromCart = () => {
        setCart([])
    }

    const valor_del_contexto = {

        cart : cart,
        addToCart : addToCart,
        removeFromCart : removeFromCart,
        clearFromCart : clearFromCart

    }

    return  (
        <Provider value={ valor_del_contexto }>
            { children }
        </Provider>
    )

}




