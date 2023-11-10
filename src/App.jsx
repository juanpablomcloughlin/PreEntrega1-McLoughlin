import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter } from "react-router-dom"; 
import Main from './components/Main.jsx';
import { CartProvider } from './components/context/CartContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
      <CartProvider>
      
        <BrowserRouter>
          
          <NavBar />
        
          <Main />

          <Footer />

          <ToastContainer />
          
        </BrowserRouter> 
        
      </CartProvider>
  )
}

export default App;