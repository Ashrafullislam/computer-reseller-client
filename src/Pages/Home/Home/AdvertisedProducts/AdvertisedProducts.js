import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertisedProductsCard from './AdvertisedProductsCard';

const AdvertisedProducts = () => {

    const url = `http://localhost:5000/advertised`;
    const {data:advertises = [], isLoading} = useQuery({
        queryKey: ['advertised'],
        queryFn: async()=> {
            const res = await fetch(url);
            const data = res.json();
            return data;
        }
    })
    return (
        <div>
            <h2 className='my-10 shadow-lg w-1/2 rounded-tl-2xl rounded-br-2xl mx-auto bg-primary py-3  text-center text-3xl text-white font-bold'data-aos="flip-right"> 
            Advertised Products{advertises?.length}  </h2>
                         
            <div className='grid lg:grid-cols-3'>
             {
                advertises.map(advertiseProduct  => <AdvertisedProductsCard key={advertiseProduct._id} advertiseProduct = {advertiseProduct} > </AdvertisedProductsCard>  )
             }
            </div>
        </div>
    );
};

export default AdvertisedProducts;