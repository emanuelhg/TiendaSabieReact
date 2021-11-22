import { createContext, useState } from "react"

export const contexto = createContext()

export const { Provider } = contexto

export const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    const addToCart = producto => {

         if (cart.find(item => item.id === producto.id)) {

            setCart(cart.map(item => item.id === producto.id ? {
                ...item,
                quantity: item.quantity + producto.quantity
            } : item))

        } else {

            setCart([...cart, producto])

        }
    }

    const removeFromCart = (id) => {

        setCart(cart.filter(item => item.id !== id))

    }

    const clearCart = () => {

        setCart([])

    }

    const sumQuantity = () => {

        let sum = 0
        cart.forEach(item => {
            sum += item.quantity
        })
        return sum

    }

    const subTotal = (price, quantity) => {

        return price * quantity

    }

    const sumTotal = () => {

        let sum = 0
        cart.forEach(item => {
            sum += item.quantity * item.price
        })
        return sum

    }

    const valor_del_contexto = {

        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        clearCart: clearCart,
        subTotal: subTotal,
        sumQuantity: sumQuantity,
        sumTotal: sumTotal

    }


    return (

        <Provider value={ valor_del_contexto }>

            { children }
            
        </Provider>

    )

}




