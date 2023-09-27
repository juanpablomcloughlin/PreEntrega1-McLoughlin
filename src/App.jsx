import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from './components/ItemListContainer.jsx';
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      
      <ItemListContainer greeting="No tenemos local a la calle. Podés seguirnos en nuestras redes"/>

      <Footer />
    </>
  )
}

export default App;