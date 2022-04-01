import React from 'react';

export default function ItemListContainer({teclados, mouse, monitor}) {

    return (
        <>
        
        <h2 className="titulo">Productos en stock</h2>
        <ul className="lista">
            <li>{teclados}</li>
            <li>{mouse}</li>
            <li>{monitor}</li>
        </ul>
        
        </>
    )
}