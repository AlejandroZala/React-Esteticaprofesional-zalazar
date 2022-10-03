import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import getItems, {getItemsByCategory} from "../../services/mockApi";
import Loading from "../Loading/Loading.jsx";

function ItemListContainer(props) {

  const [data, setData] = useState([]);
  const {cat} = useParams();
  const [ loading, setLoading] = useState(true);

  useEffect(() => {
    if (cat === undefined){
      getItems()
        .then((respuestaDatos) => {
          setData(respuestaDatos)
          setLoading(false)
      })
    }
    else {
      getItemsByCategory(cat)
        .then((respuestaDatos) => {
          setData(respuestaDatos)
          setLoading(false)
      })
    }
  }, [cat]);

  return (
    <div className="App">
      <h2>{props.greeting}</h2>
      {!loading ?<ItemList data={data}/> : <Loading/>}
    </div>
  )
}

export default ItemListContainer;