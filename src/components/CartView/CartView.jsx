import React, {useContext} from 'react';
import { cartCtx } from "../../context/cartContext";


function CartView() {

  // saco la info del context
  const context = useContext(cartCtx);
  // hago destractury del context y obtengo cart
  const {cart} = context;

// preparo variable para render condicional
let carroVacio = false;

//ver de poner algun operador ternario adecuado
if (carroVacio) {
  return <div>Tu carrito esta vacío</div>;
}

  return (
    <div>
      {cart.map((data) => (
        <div>
          <h3>{data.nombre}</h3>
          <p>{data.precio}</p>
          <p>{data.count}</p>
        </div>
      ))}
    </div>
  )
}

export default CartView