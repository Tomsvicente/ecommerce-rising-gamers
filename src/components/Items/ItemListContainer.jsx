import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.scss";
import Monitor from "../../img/monitor.png";
import Mouse from "../../img/mouselogi.png";
import Placa from "../../img/1060g.png";
import { Carousel } from "react-bootstrap";
import { collection, getDocs, getFirestore , query, where} from "firebase/firestore";

export default function ItemListContainer({ }) {
    const [items, setItems] = useState([]);

    const { categoryId } = useParams();

    useEffect(()=>{

        const db = getFirestore()
        let productsRef = collection(db, "Productos")

        if(!categoryId) {
            productsRef = collection(db, 'Productos');
        } else {
            productsRef = query(collection(db, 'Productos'), where('categoryId', '==', categoryId));
        }

        getDocs(productsRef).then(res=>{
        setItems(res.docs.map(p=>({id:p.id, ...p.data()})))
        })        
        },[categoryId])

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
                <section className="productos">
                    <article className="productos__contenedor">
                        <ItemList producto={items} />
                    </article>
                </section>
            </div>
        </>
    );
}
