import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { getItem } from '../Utils/getItem';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer () {

    const [item, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getItem(id)
            .then((res) => {setItems(res);})
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <>
            <ItemDetail producto={item}/>
        </>
    );
}
