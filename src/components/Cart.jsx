import React, { useContext } from 'react'
import { CartContext } from './context/CartContext'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Cart() {
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito()
        toast.success('El carrito fue vaciado con éxito', {
            position: 'bottom-right',
            autoClose: 3000, 
        });
    }

    return (
        <div className='carrito'>
            <h1 className='titulo'>Carrito</h1>
            {
                carrito.map((producto) => (
                    <div key={producto.id} className='carrito1'>
                        <br/>
                        <h3>{producto.nombre}</h3>
                        <p>Precio x unidad: ${producto.precio}</p>
                        <p>Precio total: ${producto.precio * producto.cantidad}</p>
                        <p>Cant: {producto.cantidad}</p>
                        <br/>
                    </div>
                ))
            }

            { carrito.length > 0  ?
                <>
                    <h2>Precio total: ${precioTotal()}</h2>
                    <button onClick={handleVaciar}>Vaciar carrito</button>
                    <button><Link to="/checkout" className='button'>Finalizar Compra</Link></button>
                    <button><Link to="/productos" className='button'>Continuar comprando</Link></button>
                </> : (
                <>
                    <h3>El carrito está vacío. Seleccioná los productos que desees comprar</h3>
                    <button><Link to="/productos" className='button'>Elegir productos</Link></button>
                </>
            )}   
        </div>
    );
}

export default Cart;