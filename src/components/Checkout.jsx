import React, { useContext, useState } from 'react'
import { CartContext } from './context/CartContext'
import { useForm } from 'react-hook-form'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Checkout() {

    const [pedidoId, setPedidoId] = useState("")
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm ()
    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos")

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                vaciarCarrito()
            })
            .catch((error) =>{
                toast.error(`Error al procesar la compra: ${error.message}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })
    }

    if(pedidoId) {
        return (
            <div className='carrito'>
                <h1>Muchas gracias por comprar en Fulanos®</h1>
                <p>Tu número de pedido es {pedidoId}</p>
            </div>
        )
    }

  return (
    <div className='carrito'>
        <h2>Finalizar compra</h2>
        <form className='formulario' onSubmit={handleSubmit(comprar)}>
            <input type="text" placeholder='Ingresá aqui tu nombre' {...register("nombre")} />
            <input type="email" placeholder='Ingresá aqui tu mail' {...register("email")}/>
            <input type="number" placeholder='Ingresá aqui tu celular'{...register("celular")} />
            <button type="submit" className="submit">Comprar</button>
        </form>
    </div>
)
}

export default Checkout