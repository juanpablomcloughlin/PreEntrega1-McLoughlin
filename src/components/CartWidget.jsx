import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div className="cart-widget">
            <FontAwesomeIcon icon={faShoppingCart} />
            <Link className="nav-link" to="/carrito">
                Carrito 
                <span className="badge badge-pill">{cantidadEnCarrito()}</span>
            </Link>
        </div>
    );
};

export default CartWidget;