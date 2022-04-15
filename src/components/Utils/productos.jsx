const productos = [
    {
        id: 1,
        nombre: 'Monitor LG',
        precio: '$1.00',
        categoria: 'monitores',
        imagen: 'https://picsum.photos/200/300/?random',
    },
    {
        id: 2,
        nombre: 'Daedalus Prime',
        categoria: 'perifericos',
        precio: '$2.00',
        imagen: 'https://picsum.photos/200/300/?random'
    },
    {
        id: 4,
        nombre: 'Mouse Daedalus Prime',
        modelo: 'Gaming',
        resumen: 'Mouse Logitech linea gamer',
        descripcion: 'Modelo: TUF-GTX1650-O4GD6-P-GAMING /n Motor gráfico: NVIDIA® GeForce GTX 1650 /n NVENC encorder: Turing /n Bus Standard: PCI Express 3.0 /n OpenGL: OpenGL®4.6 /n Video Memory: GDDR6 4GB /n Engine Clock: OC Mode - 1785 MHz (Boost Clock)',
        precio: '$12000',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_190805-MLA25087782527_102016-O.jpg'
    }
];

export default productos;

const producto = [
    {
        id: 1,
        nombre: 'Monitor LG',
        precio: '$1.00',
        categoria: 'Monitor',
        imagen: 'https://picsum.photos/200/300/?random',
    },
    {
        id: 2,
        nombre: 'Daedalus Prime',
        categoria: 'Mouse',
        precio: '$2.00',
        imagen: 'https://picsum.photos/200/300/?random'
    }
];

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000);
    });
};

export const productoDetail = {
    "id": 4,
    "nombre": 'Mouse Daedalus Prime',
    "modelo": 'Gaming',
    "resumen": 'Mouse Logitech linea gamer',
    "descripcion": 'Modelo: TUF-GTX1650-O4GD6-P-GAMING /n Motor gráfico: NVIDIA® GeForce GTX 1650 /n NVENC encorder: Turing /n Bus Standard: PCI Express 3.0 /n OpenGL: OpenGL®4.6 /n Video Memory: GDDR6 4GB /n Engine Clock: OC Mode - 1785 MHz (Boost Clock)',
    "precio": '$12000',
    "imagen": 'https://http2.mlstatic.com/D_NQ_NP_190805-MLA25087782527_102016-O.jpg'
}