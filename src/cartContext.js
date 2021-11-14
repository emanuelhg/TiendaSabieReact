import { createContext, useState } from "react"

export const contexto = createContext()

export const { Provider } = contexto

export const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    const addToCart = detalles => {
         if (cart.find(item => item.id === detalles[0].id)) {

            const temp = (cart.concat(detalles))
            const newCart = groupAndSum(temp, ['id', 'title', 'description', 'category', 'price', 'pictureURL'], ['quantity'])
            setCart(newCart)

        } else {

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




