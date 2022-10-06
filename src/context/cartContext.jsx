import React, {useState, createContext} from "react";

export const cartCtx = createContext()
const { Provider } = cartCtx
const Miprovider = ({ children }) => {

    const [cart, setCart] = useState([])

    // retorna true o false si el producto esta en el carro
    // usa metodo some: indica si el producto agregado al carro ya existe o no en cart
    const isIncart = (id) => {
        return cart.some(x => x.id === id)
    }
 
    //funcion que se vincula con handleAddToCart de ItemDetail y en ella con ItemCount > botton onclick
    //Agrega producto al carro sin pisar productos existentes
    const addItem = (data, count) => {
        const newItem = {...data, count}            //creo objeto unificando contenidos

        if (isIncart(newItem.id)){
            const findProduct = cart.find(x =>x.id === newItem.id)  //encuentra el producto repetido
            const productIndex = cart.indexOf(findProduct)          //encuentra el indice del prod
            const auxArray = [...cart]              //copio cart
            auxArray[productIndex].count += count   //accedo al indice y acumula las cantidades
            setCart(auxArray)

        } else {
            setCart([...cart, newItem])         //agrega el nuevo producto no repetido
        }
    }
    //Vacio todos los productos del carrito - asigno a un boton que indique el vaciado del carro
    const emptyCart = () => {
        return setCart([])
    }
    //Borra un producto específico del carro. ej: la cruz al lado del prod
    const deleteItem = (id) => {
        return setCart(cart.filter(x => x.id !== id))
    }
    //Para retonar la cantidad de unidades de los productos agregados al carrito
    const getItemQty = () => {
        return cart.reduce((acc, x) => acc += x.count, 0)
    }
    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.precio * x.count, 0)
    }

    return <Provider value={{cart, isIncart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice}}>{children}</Provider>
}

export default Miprovider