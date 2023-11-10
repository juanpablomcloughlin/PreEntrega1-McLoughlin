import React, { useEffect } from "react"
import { useState } from "react"
import ItemList from "./itemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
                setTitulo(categoria)
            })
            .catch((error) =>{
                toast.error(`Error al obtener los detalles del producto: ${error.message}`,{
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })
    }, [categoria])

return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
    )
};

export default ItemListContainer