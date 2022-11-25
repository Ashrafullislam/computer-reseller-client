import React from 'react';
import { Link } from 'react-router-dom';
import {  FaMapMarkerAlt } from 'react-icons/fa';

const CategoryProductCard = ({categoryProduct,setProducts}) => {
    const {brand,conditionType, sellerLocation ,hardDrive,photoURL,originalPrice,reselPrice,title} = categoryProduct ;

    const handleBook  = () => {
        setProducts(categoryProduct)
    }
    console.log(categoryProduct)
    return (
        <div>
         <div className=" mx-auto my-10 card w-4/5 text-black bg-base-100 shadow-xl">
        <figure>
          <img src={photoURL} className= ' h-80 w-full' alt="computer" />
        </figure>
        <div className=" h-72 px-10 relative mt-3 ">
          <h2 className="card-title text-primary text-2xl">
            {title}
           
          </h2>
          <p>{brand}</p>
          <p> Hard-drive: {hardDrive} </p> 
          <p> Conditon: {conditionType} </p>
          <p> Original Price: <b> {originalPrice}</b>  BDT </p>
          <p> Resell  Price: <b> {reselPrice}</b> BDT </p>
          <div className='flex'>
            <h2> Location: <span className='text-primary'>{sellerLocation}  </span> </h2>
            <span>  <FaMapMarkerAlt  /> </span>
            </div> 
          <div className="card-actions flex justify-end absolute bottom-0 right-0 p-5 ">

          <label  htmlFor="booking-modal" className={`btn  btn-primary   bg-gradient-to-r from-primary  to-secondary text-white `}                        
             onClick={handleBook}> Book Now </label>
           
          </div>
        </div>
      </div>
        </div>
    );
};

export default CategoryProductCard; 