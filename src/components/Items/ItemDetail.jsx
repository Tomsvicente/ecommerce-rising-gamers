import React from 'react';
import productos from '../Utils/productos';
import ItemCount from '../ItemCount/ItemCount';
import { Button , Carousel} from 'react-bootstrap';
import s from './ItemDetail.module.css'

function ItemDetail({producto, onAdd}) {
    return (
        <>
            
            <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <Carousel variant="dark" className={s.carouselImg}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={producto.imagen}
                        alt={producto.resumen}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={producto.imagen}
                        alt={producto.resumen}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={producto.imagen}
                        alt={producto.resumen}
                        />
                    </Carousel.Item>
                    </Carousel>
                    <div className="col-md-6">
                        <div className="small mb-1">Unidad. 142.222</div>
                        <h1 className="display-5 fw-bolder contact100-more-highlight">{producto.nombre}</h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through">$14.000</span>
                            <span>{producto.precio}</span>
                        </div>
                        <p className="lead">{producto.descripcion}</p>
                        <div className="d-flex">
                            <ItemCount stock={10} onAdd={onAdd} className={s.btnContainer}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
};

export default ItemDetail;