import React, { useContext } from 'react';
import {  FaCheckCircle, FaClock, FaMapMarkerAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const CategoryProductCard = ({categoryProduct,setProducts}) => {
    const {brand,conditionType,postedTime,sellerName, sellerLocation ,hardDrive,photoURL,originalPrice,reselPrice,title,status,verify,_id} = categoryProduct ;
 
   const {user} = useContext(AuthContext);

    // make an handlar and send products info for set state 
    const handleBook  = () => {
        setProducts(categoryProduct)
    }

    return (
  
          <div>
         <div className=" mx-auto my-10 card w-4/5 text-black bg-base-100 shadow-xl">
        <figure>
          <img src={photoURL} className= ' h-72 w-full' alt="computer" />
        </figure>
        <div className=" h-[55vh] px-10 relative mt-3 ">
          <h2 className="card-title text-primary text-2xl">
            {brand}
           
          </h2>
          <p>{title}</p>
          <p> Hard-drive: {hardDrive} </p> 
          <p> Conditon: {conditionType} </p>
          <p> Original Price: <b> {originalPrice}</b>  BDT </p>
          <p> Resell  Price: <b> {reselPrice}</b> BDT </p>
          <p> Stored: {status} </p>
          <div className='flex'>
          <p> Posted Time: {postedTime} </p>
           <span className=' text-primary ml-2'> <FaClock  /> </span>
          </div>
          <div className='flex '>
            <h2> Location: <span className='text-primary'>{sellerLocation}  </span> </h2>
            <span className='text-primary'>  <FaMapMarkerAlt  /> </span>
            </div> 
            <div className='flex items-center'>
            <FaUserAlt className='mr-2 text-primary' />
            <p>   Seller :  {sellerName} 
           </p>
           {verify == "verified"?
              <FaCheckCircle className='text-primary ml-3' />
              :
              ''      
            } 

            </div>
            <Link  to={`/productsDetails/${_id}`} className='text-blue-500' > More Details   </Link>

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