import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from './components/ItemListContainer.jsx';
import Footer from "./components/Footer.jsx";
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import { BrowserRouter, Route, Routes} from "react-router-dom"; 
import CondicionesDeVenta from './components/CondicionesDeVenta.jsx';

function App() {
  return (
      <BrowserRouter>
        
        <NavBar />
      
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos/" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/condiciones-de-venta" element={<CondicionesDeVenta />} />
        </Routes>


        <Footer />
        
      </BrowserRouter> 

  )
}

export default App;