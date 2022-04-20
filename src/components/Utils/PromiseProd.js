import {productos} from './productos.jsx'

export const PromiseProductos = (categoryId) => {
    return new Promise((resolve, reject) => {
    let condition = true;
    const productosFiltrados = productos.filter(
        (producto) => producto.categoria === categoryId
    );
    if (condition) {
        setTimeout(() => {
        categoryId ? resolve(productosFiltrados) : resolve(productos);
        }, 2000);
    } else {
        reject(console.log("Error"));
    }
    });
};