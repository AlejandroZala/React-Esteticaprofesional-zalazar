import React, { useContext } from "react";
import { cartCtx } from "../../context/cartContext";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./cartView.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

function CartView() {
  const context = useContext(cartCtx);
  const { cart, getItemPrice, getItemQty, deleteItem } = context;
  const carroVacio = getItemQty();
  
  if (carroVacio === 0) {
    return (
      <div>
        <h4 className="cajaTituloCarrito">Tu carrito esta vacío</h4>
        <Link to={"/"}>
          <Button>Ver productos</Button>
        </Link>
      </div>
    );
  }

  return (
    <section className="container">
      <div className="cajaTituloCarrito">
        <h3>Tu carrito de compras</h3>
      </div>
      <table className="table">
        <tbody className="cajaCarritoCompra">
          {cart.map((data) => (
            <tr key={data.id}>
              <td>{data.nombre}</td>
              <td>${data.precio} c/u</td>
              <td>{data.count} unid.</td>
              <td>Total: ${data.precio * data.count}</td>
              <td>
                <button
                  onClick={() => {
                    deleteItem(data.id);
                  }}
                  className="btnEliminar"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>Total de la compra: ${getItemPrice()}</h3>
      </div>
      <div>
        <CheckoutForm />
      </div>
    </section>
  );
}

export default CartView;
