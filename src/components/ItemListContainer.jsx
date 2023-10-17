import React, { useEffect } from "react";
import { useState } from "react";
import pedirProductos from "./pedirProductos";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [productos,setProductos] = useState([])
    const categoria = useParams().categoria

    useEffect (() => {
        pedirProductos()
            .then((res) => {
                if(categoria) {
                    setProductos(res.filter ((prod) => prod.categoria === categoria))
                } else {
                    setProductos(res)                    
                }
            })
            .catch((error=>{
                console.log("Hubo un error en la importación de los productos")
            }))
    }, [categoria])

return (
    <div>
        <ItemList productos={productos}/>
    </div>
    )
};

export default ItemListContainer;