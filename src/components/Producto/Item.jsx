import React from "react";
import Button from "../Button/Button";
import {Link} from "react-router-dom";

import "./item.css";

function Item(props) {
  let { precio, nombre, img, descripcion, stock, id } = props;
  const urlDetalle = `/detalle/${id}-${nombre}`;

  return (
    <div className="item">
      <div className="imagItem">
        <img src={img} alt={nombre} />
      </div>
      <div className="descripcionItem">
        <h4>{nombre}</h4>
        <p className="">{descripcion}</p>
        <h4>${precio}</h4>
        <p>Stock disponible: {stock}</p>
      </div>
      <Link to={urlDetalle}>
        <Button>Ver más</Button>
      </Link>
    </div>
  );
}

export default Item;