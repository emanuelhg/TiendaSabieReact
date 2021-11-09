import { createContext, useState } from "react"

export const contexto = createContext()

export const { Provider } = contexto

export const CustomProvider = ({ children }) => {

    const [cart, setCart] = useState([])


    const addToCart = detalles => {
        setCart(cart.concat(detalles))
        const temp = (cart.concat(detalles))
        const newCart = agruparSumar(temp, ['id','title','description','category','price','pictureURL'],['quantity'])
        setCart(newCart)
    }

    const agruparSumar = (arr, groupKeys, sumKeys) =>{
        return Object.values(
          arr.reduce((acc, curr) => {
            const group = groupKeys.map(k => curr[k]).join('-');
            acc[group] = acc[group] || Object.fromEntries(groupKeys.map(k => [k, curr[k]]).concat(sumKeys.map(k => [k, 0])));
            sumKeys.forEach(k => acc[group][k] += curr[k]);
            return acc;
          }, {})
        );
      }

    const removeFromCart = id => {
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

    const valor_del_contexto = {

        cart : cart,
        addToCart : addToCart,
        removeFromCart : removeFromCart,
        clearFromCart : clearFromCart,
        sumQuantity : sumQuantity

    }

    return  (
        <Provider value={ valor_del_contexto }>
            { children }
        </Provider>
    )

}




