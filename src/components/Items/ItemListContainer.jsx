import React, {useState, useEffect} from 'react';
import customFetch from '../Utils/customFetch';
import productos from '../Utils/productos';
import ItemList from './ItemList';
import s from './ItemListContainer.module.css'

export default function ItemListContainer({teclados, mouse, monitor}) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        customFetch(3000, productos)
        .then (resultado => setItems(resultado))
        .catch(error => console.log(error));
    }, [items]);

    return (
        <>
        <div className={s.containerCompleto }>
            <h2 className="titulo">Productos en stock</h2>
                <div className={s.containerProd }>
                    <ItemList productos={items}/>
                </div>
        </div>
        </>
    )
}