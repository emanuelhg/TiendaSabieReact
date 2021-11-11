import { createContext, useState } from "react"

export const contexto = createContext()

export const { Provider } = contexto

export const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    const addToCart = detalles => {
         if (cart.find(item => item.id === detalles[0].id)) {

            //console.log("ya esta en el carrito, agrupo")
            const temp = (cart.concat(detalles))
            const newCart = groupAndSum(temp, ['id', 'title', 'description', 'category', 'price', 'pictureURL'], ['quantity'])
            setCart(newCart)

        } else {

            //console.log("no esta en el carrito, agrego")
            setCart(cart.concat(detalles))
        }
    }


    const groupAndSum = (arr, groupKeys, sumKeys) => {
        return Object.values(
            arr.reduce((acc, curr) => {
                const group = groupKeys.map(k => curr[k]).join('-');
                acc[group] = acc[group] || Object.fromEntries(groupKeys.map(k => [k, curr[k]]).concat(sumKeys.map(k => [k, 0])));
                sumKeys.forEach(k => acc[group][k] += curr[k]);
                return acc;
            }, {})
        );
    }


    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }


    const clearFromCart = () => {
        setCart([])
    }


    const sumQuantity = () => {
        let sum = 0
        cart.forEach(item => {
            sum += item.quantity
        })
        return sum
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
        clearFromCart: clearFromCart,
        sumQuantity: sumQuantity,
        sumTotal: sumTotal
    }


    return (
        <Provider value={ valor_del_contexto }>
            { children }
        </Provider>
    )

}




