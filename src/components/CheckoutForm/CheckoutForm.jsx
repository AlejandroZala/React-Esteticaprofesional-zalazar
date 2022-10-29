import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartCtx } from "../../context/cartContext";
import { createBuyOrder } from "../../services/firestore";
import "./checkoutForm.css";

function CheckoutForm() {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const navigate = useNavigate();
  const context = useContext(cartCtx);
  const { cart, getItemPrice } = context;

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
      <div className="cajaTituloForm">
        <h4>Ingrese sus datos</h4>
      </div>
        
        <form onSubmit={handleCheckout}>
            <div className="form-group">
            <label htmlFor="name">Nombre y Apellido</label>
            <input
                className="form-control"
                value={dataForm.name}
                onChange={inputChangeHandler}
                name="name"
                type="text"
                placeholder="Nombre y apellido"
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
                type="tel"
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
                type="email"
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
