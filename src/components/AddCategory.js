import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setImputValue] = useState('');
    
    const handleImputChange = (e)=>{
        setImputValue(e.target.value);
        // console.log('handle input change llamado ');

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log('hndlessubmit', inputValue);

        if(inputValue.trim().length > 2){

            setCategories(cats=>[ inputValue, ...cats ]);
            setImputValue('');
        }

    }

    return (
        <form onSubmit = {handleSubmit}>
            <p>{ inputValue}</p>

            <input 
                type="text"
                value = {inputValue}
                onChange = {handleImputChange}>

            </input>
        </form>
            
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
