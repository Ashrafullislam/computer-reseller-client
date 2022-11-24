import React, { useEffect, useState } from 'react';
import HomeProductsCard from './HomeProductsCard';

const HomeProducts = () => {
     const [categories,setCategories] = useState([])
    //load only category 
    useEffect(()=> {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(category => setCategories(category))
    },[])

    return (
        <div>
            <h2 className='my-10 shadow-lg w-1/2 rounded-tl-2xl rounded-br-2xl mx-auto bg-primary py-3  text-center text-3xl text-white font-bold'> Our Products {categories.length}  </h2>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mx-auto'>
                {
                 categories.map(category => <HomeProductsCard
                    key={category.id} category = {category}
                    > </HomeProductsCard> )
                }
            </div>
        </div>
    );
};

export default HomeProducts;