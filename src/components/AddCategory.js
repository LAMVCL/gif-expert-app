import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Desestructuramos el prop mediante llaves {}
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);

    }
    const handleSubmit = (e) =>{
        //Bloqueamos la actualización de la página
        e.preventDefault();

        //Validamos que el input posea texto mediante un length
        if (inputValue.trim().length > 2){
            //De ser valido asignamos el texto al array mediante setCategories
            setCategories(newCategorie => [inputValue,...newCategorie ]);
            //Vaciamos el input para evitar duplicados al presionar doble submit
            setInputValue('');
        }
        
    }
    return (
        <form className='formulario' onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input 
            type="text"
            value={inputValue}
            placeholder='Buscar...'
            onChange={handleInputChange}
            />
            <button ><i className="fas fa-search"></i></button>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
