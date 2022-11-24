import React from 'react';

const HomeProductsCard = ({category}) => {
    const {title,brand,originalPrice,reselPrice,photoURL,category_id} = category ;
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
          <p>{brand}</p>
          <p> Original Price: {originalPrice} BDT </p>
          <p> Resell  Price: {reselPrice} BDT </p> 
          <div className="card-actions justify-end">
            <div className="btn btn-primary"> Same Category </div>
            <div className="btn btn-secondary">Details</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProductsCard;
