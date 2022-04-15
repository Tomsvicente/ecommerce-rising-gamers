import productos from '../Utils/productos';


const customFetch = (time, productos, tipo, id) => {
    return new Promise((resolve, reject) => {
        const prodFiltrados = tipo === 'C' ? productos.filter((producto) => producto.categoria === id) : productos.find((producto) => producto.id === id);
        setTimeout(() => {
            id ? resolve(prodFiltrados) : resolve(productos);
        }, time)
    })
}

export default customFetch;