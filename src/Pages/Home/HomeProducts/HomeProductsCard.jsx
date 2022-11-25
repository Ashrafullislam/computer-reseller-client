import React from 'react';
import { Link } from 'react-router-dom';

const HomeProductsCard = ({category}) => {
    const {title,brand,originalPrice,reselPrice,photoURL,category_id,_id} = category ;
  return (
    <div>
      <div className=" mx-auto my-10 card w-4/5 text-black bg-base-100 shadow-xl">
        <figure>
          <img src={photoURL} className= 'h-96 w-full' alt="computer" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary text-2xl">
            {title}
           
          </h2>
          <p className=' text-primary font-semibold text-lg'>{brand}</p>
          <p> Original Price: <b > {originalPrice} </b> BDT </p>
          <p> Resell  Price: <b> {reselPrice} </b>  BDT </p> 
          <div className="card-actions justify-end">
            <Link to={`/categoryProducts/${category_id}`} className="btn btn-primary"> Same Category </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProductsCard;
