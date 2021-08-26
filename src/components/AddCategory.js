import React, { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            placeholder='Buscar...'
            onChange={
                handleInputChange
            }
            />
            <button>enviar!</button>
        </form>
    )
}
