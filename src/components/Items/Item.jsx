import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'

function Item({prod}) {
return (
    <>
    <div class="container container--width productos__contenedor__tabla">
                <div class="productos__contenedor__tabla__align">
                    <div class="row">
                    <div class="elementos">
                        <div class="elementos__caja">
                        <img class="elementos__img" src={prod.imagen} alt={prod.resumen}/>
                        <div class="elementos__imgInfo">
                            <div class="elementos__imgInfo__int">
                            <span class="elementos__imgInfo__int__name">{prod.nombre}</span>
                            <span class="elementos__imgInfo__int__comp">{prod.marca}</span>
                            </div>
                        </div>
                        </div>
                        <div class="elementos__caja_abajo">
                        <div class="elementos__hbg">
                            <div class="elementos__hbg__hbgInner"></div>
                        </div>
                        <span class="elementos__carri">
                            <span class="elementos__carri__precio">${prod.precio}</span>
                            <span class="elementos__carri__agregar">
                            <Button variant="elementos__carri__agregar__txt"><Link className="link mt-3 elementos__carri__agregar__txt" to={`/item/${prod.id}`}>Ver detalle</Link></Button>
                            </span>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    </>
)
}

export default Item