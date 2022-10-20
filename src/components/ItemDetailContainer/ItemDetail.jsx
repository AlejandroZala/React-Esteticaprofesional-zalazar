import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
// importamos el contexto cartCtx
import { cartCtx } from "../../context/cartContext";

function ItemDetail ({ data }) {

    // conectarnos al context con el hook useContext
    const { addItem } = useContext(cartCtx);
    
    //creo estado switch para detectar producto seleccionado
    const [estadoCart, setEstadoCart] = useState(true)
    function handleAddToCart (count) {
        addItem(data, count);           //mando el item y la cantidad al context
        setEstadoCart(false)            //cambio el estado a false
    }

    // uso operador ternario segun estadoCart
    return (
        <div className="detalleItem">
            <img src={data.img} alt="" />
            <div className="cajaDetalleItem">
                <h1>{data.nombre}</h1>
                <div className="cajaPrecioStockDetalle">
                    <p>{data.detalleFull}</p>
                    <h2>Precio: ${data.precio}</h2>
                    <p>Stock disponible: {data.stock} unidades</p>

                    {estadoCart ? 
                    <ItemCount 
                        valorMin={1} 
                        valorMax={data.stock} 
                        onAddToCart={handleAddToCart}/>
                         : <Link to='/cart'> Ir al Carrito</Link>
                    }

                </div>
            </div>
        </div>
    )
}
export default ItemDetail