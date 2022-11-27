import React from 'react';
import { Link } from 'react-router-dom';
import {  FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const CategoryProductCard = ({categoryProduct,setProducts}) => {
    const {brand,conditionType,postedTime,sellerName, sellerLocation ,hardDrive,photoURL,originalPrice,reselPrice,title} = categoryProduct ;

    const handleBook  = () => {
        setProducts(categoryProduct)
    }
    return (
        <div>
         <div className=" mx-auto my-10 card w-4/5 text-black bg-base-100 shadow-xl">
        <figure>
          <img src={photoURL} className= ' h-80 w-full' alt="computer" />
        </figure>
        <div className=" h-80 px-10 relative mt-3 ">
          <h2 className="card-title text-primary text-2xl">
            {title}
           
          </h2>
          <p>{brand}</p>
          <p> Hard-drive: {hardDrive} </p> 
          <p> Conditon: {conditionType} </p>
          <p> Original Price: <b> {originalPrice}</b>  BDT </p>
          <p> Resell  Price: <b> {reselPrice}</b> BDT </p>
          <p> Seller : {sellerName} </p>
          <div className='flex'>
          <p> Posted Time: {postedTime} </p>
           <span className=' text-primary ml-2'> <FaClock  /> </span>
          </div>
          <div className='flex pb-3'>
            <h2> Location: <span className='text-primary'>{sellerLocation}  </span> </h2>
            <span className='text-primary'>  <FaMapMarkerAlt  /> </span>
            </div> 
          <div className="card-actions flex justify-end absolute bottom-0 right-0 p-5 ">

          <label  htmlFor="booking-modal" className={`btn  btn-primary  bg-gradient-to-r from-primary  to-secondary text-white hover:btn-primary p `}                        
             onClick={handleBook}> Book Now </label>

           <label  htmlFor="report-modal" className={`btn  btn-primary  bg-gradient-to-r from-primary to-secondary text-white hover:btn-primary p `}                        
             onClick={handleBook}> Add Report </label>

           
          </div>
        </div>
      </div>
        </div>
    );
};

export default CategoryProductCard; 