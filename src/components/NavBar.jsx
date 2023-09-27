import React from "react";
import CartWidget from "./CartWidget.jsx";

const NavBar = () => {

const navStyle = {
    backgroundColor: "#3F3F41", 
    color: "#FCE09B", 
};
    return (
        <nav style={navStyle} className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/"><img src="../src/assets/logofulanos.webp" alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/sale">SALE 2023</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/productos">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/condiciones-de-venta">Condiciones de venta</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contacto">Contacto</a>
                    </li>
                </ul>
            </div>
            <CartWidget />
            </div>
        </nav>
);
};

export default NavBar;