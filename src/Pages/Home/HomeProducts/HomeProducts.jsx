import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../../Loading/Loading';
import HomeProductsCard from './HomeProductsCard';

const HomeProducts = () => {
     const [categories,setCategories] = useState([])
     const {loading} = useContext(AuthContext)
     
    //load only category 
    useEffect(()=> {
        fetch('https://computer-reseller-server.vercel.app/categories')
        .then(res => res.json())
        .then(category => setCategories(category))
    },[])

  if(loading){
    return <Loading > </Loading>
  }
    return (
        <div data-aos="">
            <h2 className='my-10 shadow-lg w-1/2 rounded-tl-2xl rounded-br-2xl mx-auto bg-primary py-3  text-center text-3xl text-white font-bold'data-aos="flip-right"> Our Products Category  </h2>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mx-auto'>
                {
                 categories.map(category => <HomeProductsCard
                    key={category._id} category = {category}
                    > </HomeProductsCard> )
                }
            </div>
        </div>
    );
};

export default HomeProducts;