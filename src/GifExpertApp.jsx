import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        // console.log(newCategory);
        
        // setCategories([...categories, 'Fortnite']);
        // setCategories(cat => [...cat, 'Fortnite']);
        // setCategories(['Fortnite', ...categories]);
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            {/* título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={setCategories} 
                onNewCategory={(value) => onAddCategory(value)}
            />

            {/* Listado de Gif */}
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
            </ol>
            {/* Gif Items */}

        </>
    )
}
