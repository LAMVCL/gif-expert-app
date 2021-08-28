import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() =>{

        const urlFetch = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=g1dCiL4mecdpaOWgTGtlvZzrLr0c9nBW`;
        const respuesta = await fetch(urlFetch);
        //Destructuramos data para evitar poner data.data
        const {data} = await respuesta.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized.url,
            }
        });

        console.log(gifs);
        //Le pasamos el array de 10 imagenes con su id, titulo y url
        setImages(gifs);
    }

    return (
        <>
            <h3>{category}</h3>
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
