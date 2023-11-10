import React, { useState } from 'react'
import ItemCount from './ItemCount'
import { CartContext } from './context/CartContext'
import { useContext } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ( {item} ) => {

  const {agregarAlCarrito} = useContext(CartContext)
    
  const [cantidad,setCantidad] = useState(1)

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  return (
    <div className='containerItem'>
        <div className='tarjetaProductoItem'>
            <img src={item.rutaImagen} alt={item.nombre} />
            <div className='itemDetail'>
                <h3>{item.nombre}</h3>
                <p>Categoria: {item.categoria}</p>
                <p>Descripción: {item.descripción}</p>
                <p>Precio: ${item.precio}</p>
                <ItemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={() => {agregarAlCarrito(item, cantidad)
                toast.success('El producto fue agregado al carrito con éxito', {
                  position: 'bottom-right',
                  autoClose: 3000, 
                });}
              } />
            </div>
        </div>
    </div>
  )
}

export default ItemDetail
