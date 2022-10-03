import React, { useContext } from 'react';
import "./cardWidget.css";
import { cartCtx } from "../../context/cartContext";

function CardWidget() {
  const {getItemQty} = useContext(cartCtx);

  // console.log(`cantidad de productos en carro: ${get}`);

  return (
    <div className="contenedorWidget">
        <div>
            <img src="/imagenes/carrito.png" className="widget" alt="logoCarrito" />
        </div>
        <span>{getItemQty()}</span>
    </div>
  )
}

export default CardWidget