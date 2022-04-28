import React, { useState, useEffect } from "react";
import { PromiseProductos } from "../Utils/PromiseProd";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.scss";
import Monitor from "../../img/monitor.png";
import Mouse from "../../img/mouselogi.png";
import Placa from "../../img/1060g.png";
import { Carousel } from "react-bootstrap";

export default function ItemListContainer({ }) {
    const [items, setItems] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        PromiseProductos(categoryId)
            .then((resultado) => setItems(resultado))
            .catch((error) => console.log(error));
    }, [categoryId]);

    return (
        <>
            <div className="containerCompleto">
                <Carousel variant="dark" className="carrusel carousel">
                    <Carousel.Item className="carousel-item carrusel__imgH">
                        <img className="d-block w-25" src={Monitor} alt={Monitor} />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item carrusel__imgH">
                        <img className="d-block w-25" src={Placa} alt={Placa} />
                    </Carousel.Item>
                    <Carousel.Item className="carousel-item carrusel__imgH">
                        <img className="d-block w-25" src={Mouse} alt={Mouse} />
                    </Carousel.Item>
                </Carousel>
                <section class="productos">
                    <article class="productos__contenedor">
                        <ItemList producto={items} />
                    </article>
                </section>
            </div>
        </>
    );
}
