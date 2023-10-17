import data from "../data/productos.json"

export const pedirProductos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (data);
        }, 500) 
    })
}

export default pedirProductos

export const pedirItemPorId = (id) => {
    return new Promise ((resolve, reject) => {

        const item = data.find((elemento) => elemento.id === id)

        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No pudimos encontrar el producto buscado"
            })
        }
    })
}