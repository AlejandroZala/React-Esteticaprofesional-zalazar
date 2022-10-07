import React, {useContext} from 'react';
import { cartCtx } from "../../context/cartContext";

function CartView() {
  const {deleteItem} = useContext(cartCtx);
  const {getItemPrice} = useContext(cartCtx);
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
      <h3>Tu carrito de compras</h3>
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
      <h3>Total de la compra: ${ getItemPrice() }</h3>
    </div>
  )
}
export default CartView;