import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { cartCtx } from "../../context/cartContext";

function ItemDetail ({ data }) {

    // conectarnos al context con el hook useContext
    const { addItem } = useContext(cartCtx);
    const [estadoCart, setEstadoCart] = useState(true)

    function handleAddToCart (count) {
        // alert(`agregaste al carrito ${count} productos`)
        addItem(data, count);
        setEstadoCart(false)
    }

    return (
        <div className="detalleItem">
            <img src={data.img} alt="" />
            <div className="cajaDetalleItem">
                <h1>{data.nombre}</h1>
                <div className="cajaPrecioStockDetalle">
                    <h2>${data.precio}</h2>
                    <p>Stock disponible: {data.stock} unidades</p>

                    {estadoCart ? 
                    <ItemCount 
                        valorMin={1} 
                        valorMax={data.stock} 
                        onAddToCart={handleAddToCart}/>
                         : <Link to='/cart'> Finalizar compra</Link>
                    }
                    <p>{data.descripcion}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail