import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { db } from '../firebaseConfig'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ItemDetailContainer() {

    const [item,setItem] = useState(null)
    const id = useParams().id;

    useEffect(() => {
        
        const docRef = doc(db, "productos", id)
        getDoc(docRef)
            .then((resp) =>{
                setItem(
                    {...resp.data(), id: resp.id}
            )
        })
            .catch((error) =>{
                toast.error(`Error al obtener los detalles del producto: ${error.message}`, {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            })
    }, [id])
    
    return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer
