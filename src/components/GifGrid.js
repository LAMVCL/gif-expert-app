import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        //Llamamos a la función getGifs del helper pasandole la categoria
        //Al ser una promesa ocupamos un then donde con la arrow function
        //Recibiremos las imagenes para utilizarlas en el useState setImages
        getGifs(category).then(imgs => setImages(imgs));
    }, [category])

    

    return (
        <>
            <h3 className='categoriaBuscada'>{category}</h3>
            <div className="card-grid">
                {
                    images.map( (img) => {

                        return <GifGridItem key={img.id} {...img}
                        />
                    })
                }
            </div>
        </>
        
    )
}
