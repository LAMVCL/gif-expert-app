import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch Man','Full Metal Alchemist','Tokyo Revengers'])

    /* const handleAdd = () =>{
        const newElement = 'Hunter x Hunter';
        //Usamos el spread operator para clonar el array y añadir el nuevo elemento
        setCategories([...categories,newElement]);
        //Si queremos cambiar el orden del elemento podemos realizar:
        //setCategories([newElement,...categories]);
    }   */  

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory/>
            <hr></hr>
            <ol>
                {
                    categories.map( ( category ) =>{
                        return <li key={ category }> { category } </li>
                    })
                }
            </ol>
        </div>
    )
}
