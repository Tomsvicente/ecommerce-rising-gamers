import { productos } from "./productos.jsx";

export const getItem = (id) => {
    return new Promise ( (resolve, reject)=>{
        const productoElegido = productos.find(
            (producto) => producto.id === Number(id)
        );
        setTimeout (()=>{
            resolve(productoElegido);}, 2000);
    });
} 