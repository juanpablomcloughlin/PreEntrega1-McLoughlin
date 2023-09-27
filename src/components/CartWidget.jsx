import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
const itemCount = 3; //=> número hardcodeado

return (
    <div className="cart-widget">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="badge badge-pill">{itemCount}</span>
    </div>
    );
};

export default CartWidget;