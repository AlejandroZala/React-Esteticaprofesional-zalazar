import React, {useContext} from 'react';
import { cartCtx } from "../../context/cartContext";
import { createBuyOrder } from '../../services/firestore';
import Button from "../Button/Button";
import {Link, useNavigate} from "react-router-dom";
import "./cartView.css";

function CartView() {
  const {deleteItem} = useContext(cartCtx);
  const {getItemPrice} = useContext(cartCtx);
  const {getItemQty} = useContext(cartCtx);
  // llamo al hook navigate
  const navigate = useNavigate();
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
        <h4 className="cajaTituloCarrito">Tu carrito esta vacío</h4>
        <Link to={"/"}>
        <Button>Ver productos</Button>
      </Link>
      </div>
    )
  }

  //preparo función con el objeto Orden de compra (datos comprador y productos)
  //la cual la llamo al apretar el boton finalizar compra
  function handleCheckout(){
    const orderData = {
      buyer: {
        name: "Alejandro",
        phone: "223111222",
        email: "ale123@hotmail.com"
      },
      items: cart,
      total: getItemPrice(),
    };
    createBuyOrder(orderData).then( orderId => {
      navigate(`/checkout/${orderId}`)
    });
  }

    return (
      <section className="container">
        <div className="cajaTituloCarrito">
          <h3>Tu carrito de compras</h3>
        </div>
        <table className="table">
          <tbody className="cajaCarritoCompra">
            {cart.map((data) => (
              <tr>
                <td>{data.nombre}</td>
                <td>${data.precio} c/u</td>
                <td>{data.count} unid.</td>
                <td>Total: ${ data.precio * data.count }</td>
                <td>
                  <button
                    onClick={() => {
                      deleteItem(data.id);
                      }} className="btnEliminar">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h3>Total de la compra: ${ getItemPrice() }</h3>
          <button onClick={handleCheckout} className="btnComprar">Finalizar compra</button>
        </div>
      </section>
    )
  }

export default CartView;