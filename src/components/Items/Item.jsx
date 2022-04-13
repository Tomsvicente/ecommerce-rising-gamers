import { Button } from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from './ItemList'
import ItemDetailContainer from './ItemDetailContainer'


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
                <Button className="mt-3" variant="outline-secondary">Ver detalle</Button>
            </Card.Body>
        </Card>
    </>
)
}

export default Item