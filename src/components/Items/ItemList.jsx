import React from 'react'
import Item from './Item'

function ItemList({productos}) {
return (
    productos.map(p => (
        <Item 
            id = {p.id}
            nombre = {p.nombre}
            precio = {p.precio}
            imagen = {p.imagen}
            resumen = {p.resumen}
            descripcion = {p.descripcion}
            categoria = {p.categoria}
        />
    ))
)
}

export default ItemList