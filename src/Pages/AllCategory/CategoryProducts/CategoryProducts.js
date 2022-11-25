import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryProductCard from './CategoryProductCard';

const CategoryProducts = () => {
    const categoryProducts = useLoaderData();
    return (
        <div>
            <div className=' mt-6 bg-primary py-3  shadow-lg w-1/2 rounded-tl-2xl rounded-br-2xl mx-auto '>
            <h2 className=' text-center text-3xl text-white font-bold'>  See all same categories products: {categoryProducts.length}  </h2>
            </div>
         
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                 categoryProducts.map(categoryProduct => <CategoryProductCard 
                 key={categoryProduct._id} categoryProduct = {categoryProduct}
                 > 
                 </CategoryProductCard>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;