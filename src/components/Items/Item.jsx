import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'

function Item({id, nombre, precio, imagen}) {
return (
    <>
        <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    Precio: {precio}
                </Card.Text>
                <ItemCount stock={5}/>
                <Link className="mt-3" variant="outline-secondary" to={`/item/${id}`}>Ver detalle</Link>
            </Card.Body>
        </Card>
    </>
)
}

export default Item