import React, { useEffect } from 'react';
import cashOn from '../../../Image/service/cashondelivery.png'
import shipping from '../../../Image/service/shipping2.png'
import opening from '../../../Image/service/opening.png'
import Aos from 'aos';

const OurService = () => {

// anmation 
useEffect(()=> {
    Aos.init({duration:1500})
},[]) 
    return (
        <div className='my-16' data-aos="zoom-out">
            
            <h2 className='my-10 shadow-lg w-1/2 rounded-tl-2xl rounded-br-2xl mx-auto bg-primary py-3  text-center text-3xl text-white font-bold' data-aos="flip-right"> Our Services  </h2>
            <div className='grid lg:grid-cols-3 mt-6 '>
                <div className="mx-auto" data-aos="fade-right">
                    <img className='w-46 -h-46 rounded-2xl' src={opening} alt='work time'  />
                </div>
                <div className="mx-auto" data-aos="fade-up">
                    <img className='w-46 -h-46 rounded-2xl' src={shipping} alt='work time' />
                </div>
                <div className="mx-auto" data-aos="fade-left">
                    <img className='w-46 -h-46 rounded-2xl' src={cashOn} alt='work time' />
                </div>
            </div>
        </div>
    );
};

export default OurService;