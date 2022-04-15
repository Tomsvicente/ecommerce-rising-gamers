import React, {useState, useEffect} from 'react';
import customFetch from '../Utils/customFetch';
import productos from '../Utils/productos';
import ItemList from './ItemList';
import {useParams} from 'react-router-dom';
import s from './ItemListContainer.module.css'

export default function ItemListContainer({}) {

    const [items, setItems] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        customFetch(500, productos,'C', categoryId)
        .then (resultado => setItems(resultado))
        .catch(error => console.log(error));
    }, [items, categoryId]);

    return (
        <>
        <div className={s.containerCompleto }>
            <h2 className="titulo">Productos en stock</h2>
                <div className={s.containerProd }>
                    <ItemList productos={productos}/>
                </div>
        </div>
        </>
    )
}