import React, { useState, useEffect } from "react";
import ItemDetail from './ItemDetail';
import { getSingleItem } from "../../services/firestore";
import { useParams } from "react-router-dom";
import "./itemDetail.css";
import Loading from "../Loading/Loading.jsx";

function ItemDetailContainer() {
  const [data, setData] = useState({}); //Objeto vacio
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [ loading, setLoading] = useState(true);

  // Llamo a una promesa
  useEffect(() => {
    getSingleItem(id)
      .then((respuestaDatos) => {
          setData(respuestaDatos)
          // setLoading(false)
      })
      .catch ((errormsg) => {
        setError(errormsg.message)
      })
      .finally(() => setLoading(false))
  }, [id]);
  // console.log("--->", getSingleItem(id));


  return (
    <div>
      {!loading ?<ItemDetail data={data}/> : <Loading/>}
    </div>
  );
}

export default ItemDetailContainer;
