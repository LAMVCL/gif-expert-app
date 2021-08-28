import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    /* const handleAdd = () =>{
        const newElement = 'Hunter x Hunter';
        Usamos el spread operator para clonar el array y añadir el nuevo elemento
        setCategories([...categories,newElement]);
        Si queremos cambiar el orden del elemento podemos realizar:
        setCategories([newElement,...categories]);
    }   */  

    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            <div className="contenido">
                {
                    categories.map((category)=>{
                        return <GifGrid key={category} category={category}/>
                    })
                }
            </div>
        </div>
    )
}
