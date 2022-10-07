import React, {useContext} from 'react';
import { cartCtx } from "../../context/cartContext";
import {Link} from 'react-router-dom';

function CartView() {
  const {deleteItem} = useContext(cartCtx);
  const {getItemPrice} = useContext(cartCtx);
  const {getItemQty} = useContext(cartCtx);
  // saco la info del context
  const context = useContext(cartCtx);
  // hago destractury del context y obtengo cart
  const {cart} = context;
  // preparo variable para render condicional
  const carroVacio = getItemQty();
  //ver de poner algun operador ternario adecuado
  if (carroVacio === 0) {
    return (
      <div>
        <h4>Tu carrito esta vacío</h4>
        <Link to='/'> Ir a productos</Link>
      </div>
    )
  }
    return (
      <div> 
        <div>
          <h3>Tu carrito de compras</h3>
        </div>
        <div>
          {cart.map((data) => (
            <div>
              <h4>{data.nombre}</h4>
              <p>Precio unitario: ${data.precio}</p>
              <p>{data.count} unidades</p>
              <h4>Total: ${ data.precio * data.count }</h4>
              <button
                onClick={() => {
                  deleteItem(data.id);
                  }}>Eliminar</button>
            </div>
          ))}
        </div>
        <div>
          <h3>Total de la compra: ${ getItemPrice() }</h3>
          <button>Finalizar mi compra</button>
        </div>
      </div>
    )
  }

export default CartView;