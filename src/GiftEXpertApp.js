import React , {useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GiftEXpertApp = () => {
    // const categories = ['One puch', 'Samurai x', 'Dragon ball']
    const [categories, setCategories] = useState(['One puch']);

    /* const handleAdd = () =>{
        setCategories(['HunterxHunter', ...categories]);
    } */

    return (
        <div>
            <h2> hola </h2>
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