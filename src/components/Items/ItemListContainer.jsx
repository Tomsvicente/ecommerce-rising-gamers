import React, {useState, useEffect} from 'react';
import {PromiseProductos} from '../Utils/PromiseProd'
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import s from './ItemListContainer.module.css'

export default function ItemListContainer({}) {

    const [items, setItems] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        PromiseProductos(categoryId)
        .then (resultado => setItems(resultado))
        .catch(error => console.log(error));
    }, [categoryId]);

    return (
        <>
        <div className={s.containerCompleto }>
            <h2 className="titulo">Productos en stock</h2>
                <div className={s.containerProd }>
                    <ItemList producto={items}/>
                </div>
        </div>
        </>
    )
}