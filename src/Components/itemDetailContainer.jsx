import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

const mockAPI = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => 
            resolve(fetch('/data.json'))
        , 2000);
    })
}

export const ItemDetailContainer = () => {
    const { id: itemId } = useParams();
    
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(data.json)
        .then(res => res.json())
        .then((data) => setData(data));
    }, []);

    if (!data) return null; 

    return (
        <div className='detail-container'>
            <ItemDetail data={getItem} />
        </div>
    )
}