import React from "react";

const ItemListContainer = ({ greeting }) => {
return (
    <div className="container">
        <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <div className="text-center">
                    <h2>¡Bienvenidos a la tienda de Fulanos Underwear!</h2>
                    <p>{greeting}</p>
                </div>
            </div>
        </div>
    </div>
);
};

export default ItemListContainer;