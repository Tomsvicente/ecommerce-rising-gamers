import React from 'react';
import ItemCount from './ItemCount';

export default function ItemListContainer({teclados, mouse, monitor}) {


    function onAdd(cant){
        alert("Agregaste " + cant + " productos al carrito!")
    }
    return (
        <>
        
        <h2 className="titulo">Productos en stock</h2>
        <ul className="lista">
            <li>{teclados}</li>
            <li>{mouse}</li>
            <li>{monitor}</li>
        </ul>
        <ItemCount stock="5" initial={1} onAdd={onAdd}/>
        </>
    )
}