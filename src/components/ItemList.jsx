import React from 'react'
import Item from './Item'

function ItemList({productos}) {
  return (
    <div>
        <h1 id='titulo'>Productos</h1>
        <div id='productos'>
            {
                productos.length > 0 && 
                productos.map((producto) => {
                    return (
                        <Item key={producto.id} producto={producto}/>
                    )
                })
            }
        </div>

    </div>
  )
    }

export default ItemList