import React from "react"
import CartWidget from "./CartWidget.jsx"
import { Link } from "react-router-dom"

const NavBar = () => {

const navStyle = {
    backgroundColor: "#3F3F41", 
    color: "#FCE09B", 
};
    return (
        <nav style={navStyle} className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                    <Link className="navbar-brand" to="/"><img src="../src/assets/logofulanos.webp" alt="Logo de Fulanos" width={150}/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/productos/maxibuzos">Maxi Buzos</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/productos/remerones">Remerones </Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/productos/vestidos">Vestidos</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
                    </ul>
                </div>
            <CartWidget />
            </div>
        </nav>
);
};

export default NavBar