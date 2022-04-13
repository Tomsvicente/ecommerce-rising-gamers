import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { productoDetail } from '../Utils/productos';

const ItemDetailContainer = () =>{

    const [producto, setProducto] = useState({})

    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productoDetail);
            });
        }, 1000);

        getItem.then((res) => setProducto(res));
        getItem.catch((err) => console.log(err));
    }, []);

    return <>
        {
            <ItemDetail producto={producto}/>
        }
    </>

}

export default ItemDetailContainer;