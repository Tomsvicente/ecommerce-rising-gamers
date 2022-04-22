import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'

function Item({prod}) {
return (
    <>
        <Card key={prod.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={prod.imagen} />
            <Card.Body>
                <Card.Title>{prod.nombre}</Card.Title>
                <Card.Text>
                    Precio: {prod.precio}
                </Card.Text>
                <ItemCount stock={5}/>
                <Button variant="outline-secondary"><Link className="link mt-3" variant="outline-secondary" to={`/item/${prod.id}`}>Ver detalle</Link></Button>
            </Card.Body>
        </Card>
    </>
)
}

export default Item