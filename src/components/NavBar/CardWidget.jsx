import React, { useContext } from 'react';
import "./cardWidget.css";
import { cartCtx } from "../../context/cartContext";

function CardWidget() {
  const {getItemQty} = useContext(cartCtx);

  return (
    <div className="contenedorWidget">
        <div>
            <img src="/imagenes/carrito.png" className="widget" alt="logoCarrito" />
        </div>
        <span>{getItemQty() > 0 && getItemQty()}</span>
    </div>
  )
}

export default CardWidget