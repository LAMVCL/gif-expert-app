import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="categoriaBuscada">{category}</h3>

            {loading && 
            <p className="loading animate__animated animate__flash">Loading...</p>}

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
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
