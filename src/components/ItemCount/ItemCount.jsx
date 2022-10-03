import React from "react";
import "../ItemCount/itemCount.css";

function ItemCount({valorMin, valorMax, onAddToCart}) {
  const [count, setCount] = React.useState(valorMin);

  function handleSuma() {
    if (count < valorMax){
        setCount(count + 1);
    }
  }

  function handleResta() {
    if (count > valorMin) {
        setCount(count - 1);
    }
  }
  
  return (
    <div className="main container">
      <div>
        <button className="btnMasMenos" onClick={handleResta}>-</button>
        <span>{count}</span>
        <button className="btnMasMenos" onClick={handleSuma}>+</button>
      </div>
      <button 
        className="btnAgregarCarro" 
        onClick={() => {
          onAddToCart(count);
          }}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;