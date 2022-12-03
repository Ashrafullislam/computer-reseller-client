import React from 'react';
import Carousel from '../Carousel/Carousel';
import HomeProducts from '../HomeProducts/HomeProducts';
import OurService from '../OurService/OurService';
import AdvertisedProducts from './AdvertisedProducts/AdvertisedProducts';

const Home = () => {
    return (
        <div>
           <Carousel > </Carousel>
           <HomeProducts > </HomeProducts>
           <AdvertisedProducts > </AdvertisedProducts>
           <OurService  > </OurService>
            
        </div>
    );
};

export default Home;