import React , {useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GiftEXpertApp = ( {defaultCategories =['One puch']} ) => {
    // const categories = ['One puch', 'Samurai x', 'Dragon ball']
    const [categories, setCategories] = useState(defaultCategories);

    /* const handleAdd = ( ) =>{
        setCategories(['HunterxHunter', ...categories]);
    } */

    return (
        <div>
            <h2> GifExperrtApp </h2>
            <hr></hr>
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map( category => <GiftGrid key={category} category={category} />)
                }
            </ol>
        </div>
    )
}