import { useForm } from "react-hook-form"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Contacto() {

    const { register, handleSubmit } = useForm ()
    const enviar = () => {
        toast.success('El formulario se registró con éxito', {
            position: 'bottom-right',
            autoClose: 3000, 
        });
    }

    return (
    <div className='carrito'>
        <h2>Contacto</h2>
        <form className='formulario' onSubmit={handleSubmit(enviar)}>
            <input type="text" placeholder='Ingresá aqui tu nombre' {...register("nombre")} />
            <input type="email" placeholder='Ingresá aqui tu mail' {...register("email")}/>
            <input type="number" placeholder='Ingresá aqui tu celular'{...register("celular")} />
            <input type="text" placeholder='Ingresá aqui tu país'{...register("pais")} />
            <button type="submit" className="submit">Enviar</button>
        </form>
    </div>
)
}

export default Contacto