import ItemDetailContainer from '../components/ItemDetailContainer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from '../components/ItemListContainer.jsx'
import { Link, Route, Routes} from "react-router-dom"
import Contacto from './Contacto.jsx'
import Cart from './Cart.jsx'
import Checkout from './Checkout.jsx'

const Main = () => {

    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/productos/" element={<ItemListContainer />} />
                <Route path="/productos/:categoria" element={<ItemListContainer />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<p className='carrito'>Tuvimos un error en la página. Por favor te invitamos a que continúes navegando. <button><Link to="/productos" className='button'>Elegir productos</Link></button></p>} />
            </Routes>
        </main>
    )

}

export default Main