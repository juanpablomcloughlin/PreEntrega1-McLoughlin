import React from 'react'

const ItemDetail = ( {item} ) => {
  return (
    <div className='container'>
        <div className='tarjetaProducto'>
            <img src={item.rutaImagen} alt={item.nombre} />
            <div>
                <h3>{item.nombre}</h3>
                <p>Categoria: {item.categoria}</p>
                <p>Precio: ${item.precio}</p>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
