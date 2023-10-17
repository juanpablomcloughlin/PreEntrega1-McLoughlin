import React from 'react'
import { Link } from 'react-router-dom'

function Item({producto}) {
  return (
    <div className='tarjetaProducto'>
        <img src={producto.rutaImagen} alt={producto.nombre} />
        <h2>{producto.nombre}</h2>
        <p> Precio: ${producto.precio}</p>
        <button><Link className='ver-mas' to={`/item/${producto.id}`}>Ver más</Link></button>
    </div>
  )
}

export default Item
