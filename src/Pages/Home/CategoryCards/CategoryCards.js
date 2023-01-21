import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const CategoryCards = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    },[])
    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                categories.map(card => <CategoryCard
                    key={card._id}
                    card={card}
                ></CategoryCard>)
            }
        </div>
    );
};

export default CategoryCards;