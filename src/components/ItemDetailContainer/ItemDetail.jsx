import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { cartCtx } from "../../context/cartContext";

function ItemDetail ({ data }) {
    const { addItem } = useContext(cartCtx);
    const [estadoCart, setEstadoCart] = useState(true)
    function handleAddToCart (count) {
        addItem(data, count);
        setEstadoCart(false)
    }

    return (
        <div className="detalleItem">
            <img src={data.img} alt="imagen producto" className="imgProducto"/>
            <div className="cajaDetalleItem">
                <h3>{data.nombre}</h3>
                <div className="cajaPrecioStockDetalle">
                    <p>{data.detalleFull}</p>
                    <h3>Precio: ${data.precio}</h3>
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