import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { FaCheckCircle } from "react-icons/fa";

const AdvertisedProductsCard = ({advertiseProduct}) => {
  const {user} = useContext(AuthContext)
    const {title,brand,originalPrice,reselPrice,photoURL,category_id,sellerName,verify
    } = advertiseProduct;
   console.log(verify)
   // call use verify hook to find user and check user is verified 

 
  return (
   <div>
     <div data-aos="zoom-in" className=" mx-auto my-10 card w-4/5 text-black bg-base-100 shadow-xl">
        <figure>
          <img src={photoURL} className= 'h-80 w-full' alt="computer" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary text-2xl">
            {brand}
          </h2>
          <p className=' text-primary font-semibold text-lg'>{title}</p>
          <p> Original Price: <b > {originalPrice} </b> BDT </p>
          <p> Resell  Price: <b> {reselPrice} </b>  BDT </p> 
          <p className='flex gap-3'> Seller: <b className='flex items-center gap-3' > {sellerName}
          {  verify == "verified"?
           <FaCheckCircle className='text-primary' />
           :
           ''           
          }
       </b>   </p> 
          <div className="card-actions justify-end">
            <Link to={`/categoryProducts/${category_id}`} className="btn btn-primary"> Same Category </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedProductsCard;