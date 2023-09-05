import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    //const [categories2, setCategories2] = useState(['One Punch', 'Dagron Ball']);
    //console.log(categories);

    const onAddCategory = (newCategory) => {
        //console.log(newCategory);
        //setCategories(['Valorant', ...categories]);
        //setCategories(cat => [...cat, 'Valorant']);
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                //setCategories={(event) => setCategories(event)}
                //onNewCategory={(event) => onAddCategory(event)}
                onNewCategory={onAddCategory}
            />

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
