import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AddReport from '../AddReport/AddReport';
import BookingModal from '../BookingModal/BookingModal';
import CategoryProductCard from './CategoryProductCard';

const CategoryProducts = () => {
    const categoryProducts = useLoaderData();
    const [products,setProducts] = useState(null) ;
    return (
        <div>
            <div className=' mt-6 bg-primary py-3  shadow-lg w-1/2 rounded-tl-2xl rounded-br-2xl mx-auto '>
            <h2 className=' text-center text-3xl text-white font-bold'>  See all same categories products: {categoryProducts.length}  </h2>
            </div>
         
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                 categoryProducts.map(categoryProduct => <CategoryProductCard 
                 key={categoryProduct._id} categoryProduct = {categoryProduct}
                 setProducts = {setProducts}
                 > 
                 </CategoryProductCard>)
                }
            </div>
             <div> 
                {products && 
                
                <BookingModal key={products._id} 
                products = {products} setProducts = {setProducts}
                > 
                </BookingModal>
                }
                {products&&
                <AddReport  key={products._id}
                products = {products} setProducts ={setProducts}
                > 

                </AddReport>

                }
                
             </div>
        </div>
    );
};

export default CategoryProducts;