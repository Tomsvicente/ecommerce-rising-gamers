import React , {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Carousel , Button} from 'react-bootstrap';
import './ItemDetail.scss';
import { Link } from 'react-router-dom';

export default function ItemDetail({producto}) {
    const [number, setNumber]=useState(0);

    function onAdd(contar){
        setNumber(contar);
        console.log(contar);
    }
    return (
        <> 
            
            <section className="py-5">
                <div key={producto.id} className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <Carousel variant="dark" className="carouselImg">
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
                                <span className="price">{producto.precio}</span>
                                <span className="text-decoration-line-through discount">{(producto.precio) + (producto.precio *20/100)}</span>
                                <p className="lead">{producto.categoria}</p>
                            </div>
                            <p className="lead">{producto.descripcion}</p>
                            
                            <div className="d-flex">
                                {  number===0 ? <ItemCount stock={5} onAdd={onAdd} producto={producto} />: <Button variant="outline-secondary"><Link to='/cart' className='link'>Ir al carrito</Link></Button> }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}