import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="categoriaBuscada">{category}</h3>

            {loading ? 
            <p className="loading animate__animated animate__flash">Loading...</p> : 
            <p className="loading animate__animated animate__pulse">Gifs cargados!</p>}

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
