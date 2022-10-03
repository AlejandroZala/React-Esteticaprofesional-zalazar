import React from 'react';
import Item from './Item';

function ItemList( { data }) {
  return (
    <div className="main container">
        {data.map((item) => {
            return <Item
                        key={item.id}
                        id={item.id}
                        nombre={item.nombre}
                        precio={item.precio}
                        img={item.img}
                        descripcion={item.descripcion}
                        stock={item.stock}/>
        })}
    </div>
  )
}

export default ItemList