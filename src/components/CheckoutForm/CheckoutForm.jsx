import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartCtx } from "../../context/cartContext";
import { createBuyOrder } from "../../services/firestore";
import "./checkoutForm.css";

function CheckoutForm() {
  //crep estado para guardar los datos ingresados
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  // llamo al hook navigate
  const navigate = useNavigate();
  // saco la info del context
  const context = useContext(cartCtx);
  // hago destractury del context y obtengo cart
  const { cart, getItemPrice } = context;

  //preparo función con el objeto Orden de compra (datos comprador y productos)
  //la cual la llamo al apretar el boton finalizar compra
  function handleCheckout(event) {
    event.preventDefault();
    const orderData = {
      buyer: dataForm,
      items: cart,
      date: new Date(),
      total: getItemPrice(),
    };
    createBuyOrder(orderData).then((orderId) => {
      navigate(`/checkout/${orderId}`);
    });
  }

  function inputChangeHandler(event) {
    let inputName = event.target.name;
    let value = event.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputName] = value;
    setDataForm(newDataForm);
  }

  return (
    <div className="form-container">
        <h4>Ingrese sus datos</h4>
        <form onSubmit={handleCheckout}>
            <div className="form-group">
            <label htmlFor="name">Nombre y Apellido</label>
            <input
                className="form-control"
                value={dataForm.name}
                onChange={inputChangeHandler}
                name="name"
                type="text"
                placeholder="Nombre"
                required
            />
            </div>

            <div className="form-group">
            <label htmlFor="telefono">Telefono</label>
            <input
                className="form-control"
                value={dataForm.phone}
                onChange={inputChangeHandler}
                name="phone"
                type="text"
                placeholder="Telefono"
                required
            />
            </div>

            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                className="form-control"
                value={dataForm.email}
                onChange={inputChangeHandler}
                name="email"
                type="text"
                placeholder="Correo"
                required
            />
            </div>
            <button onClick={handleCheckout} type="submit" className="btnComprar">
            Finalizar compra
            </button>
        </form>
        </div>
    );
}

export default CheckoutForm;
