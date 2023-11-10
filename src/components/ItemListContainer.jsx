import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./itemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

const ItemListContainer = () => {

    const [productos,setProductos] = useState([])
    const [titulo, setTitulo] = useState("Productos")
    const categoria = useParams().categoria

    useEffect (() => {

        const productosRef = collection( db, "productos")

        const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef

        getDocs(q)
            .then((resp) => {
                setProductos(

                resp.docs.map((doc) => {
                    return {...doc.data(), id: doc.id}
                })
                )
            })
            setTitulo(categoria)
    }, [categoria])

return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
    )
};

export default ItemListContainer;