import React, { useState } from 'react';
import { FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';
import {useLoaderData} from 'react-router-dom';
import BookingModal from '../AllCategory/BookingModal/BookingModal';

const ProductsDetails = _id => {
  const productsDetails = useLoaderData ();
  const [products,setProducts]  = useState({});
  console.log(products,'products ')
  const {
    conditionType,
    brand,
    originalPrice,
    photoURL,
    postedTime,
    reselPrice,
    sellerLocation,
    sellerName,
    status,
    title,
    yearsOfUse,
    verify
  } = productsDetails;

  const handleBook = () => {
    setProducts(productsDetails)

  }
  

  return (
    <div className='text-black w-10/12 mx-auto'>
      <h2 className='text-3xl my-4 text-primary font-semibold text-center'> See Details Info of {brand} </h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 sm:grid-cols-1 bg-base-100 shadow-xl">
    <figure><img src={photoURL} className='w-10/12 h-96' alt="products-img"/></figure>

  <div className="card-body">
    <h2 className="card-title text-2xl text-primary"> {brand} </h2>
    <p>{title}</p>
    <p> Condition Of this: {conditionType} </p>
    <p> Original Price: <span className='text-2xl text-amber-500 font-bold'> {originalPrice} </span> BDT </p>
    <p> Resell Price: <span className='text-2xl text-blue-500 font-bold'> {reselPrice} </span> BDT </p>
    <p> Status: <span className='capitalize'>{status} </span>  </p>
    <p> Used time : {yearsOfUse} </p>
    <p> Posted Time:  {postedTime} </p>
    <p className='flex'> Seller Location: {sellerLocation} <FaMapMarkerAlt className='ml-3 text-primary'  /> </p>
    <p className='flex'> Seller : {sellerName} {
        verify =="verified"? 
        <FaCheckCircle className='text-primary ml-2 text-xl' />
        :
        ''
    }  </p>
    <div className="card-actions ">
      <button className="btn  btn-primary">Give us review </button>
      <label onClick={handleBook}  htmlFor="booking-modal" className={`btn  btn-primary  bg-gradient-to-r from-primary  to-secondary text-white hover:btn-primary p `}                        
     > Book Now </label>
      </div>
     </div>
    </div>
   <div>
  </div>


{/* If have the products of products state  */}
{
  products && 
  <BookingModal key={_id} setProducts={setProducts} products={products} >  </BookingModal>

}

  </div>

  );
};

export default ProductsDetails;
