import React, {useState, createContext} from "react";

export const cartCtx = createContext()
const { Provider } = cartCtx
const Miprovider = ({ children }) => {
    const [cart, setCart] = useState([])
    const isIncart = (id) => {
        return cart.some(x => x.id === id)
    }
 
    const addItem = (data, count) => {
        const newItem = {...data, count}
        if (isIncart(newItem.id)){
            const findProduct = cart.find(x =>x.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].count += count
            setCart(auxArray)
        } else {
            setCart([...cart, newItem])
        }
    }
    const emptyCart = () => {
        return setCart([])
    }
    const deleteItem = (id) => {
        return setCart(cart.filter(x => x.id !== id))
    }
    const getItemQty = () => {
        return cart.reduce((acc, x) => acc += x.count, 0)
    }
    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.precio * x.count, 0)
    }

    return <Provider 
        value={{cart, isIncart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice}}>
            {children}
        </Provider>
}

export default Miprovider