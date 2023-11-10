import React from 'react'
import Item from './Item'

function ItemList({productos, titulo}) {
  return (
    <div>
        <h1 id='titulo'>{titulo}</h1>
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