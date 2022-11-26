import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const BookingModal = ({products}) => {
  const {user} = useContext(AuthContext)
  const {brand,reselPrice,}  = products ;
  const [error , setError] = useState('')
  const bookDate = new Date();
  let bookingDate = bookDate.toLocaleDateString()
  console.log(bookDate)

  const productBookingHandlar = (event) => {
    event.preventDefault()
    const form = event.target ;
    const date = form.bookingDate.value ;
    const productName = form.productName.value ;
    const email = form.email.value ;
    const phone = form.phone.value ;
    const buyerName = form.buyername.value;
    const meetLocation =form.location.value ;
    const price = form.price.value;
 
    // make an object to send data in data base 
    const booking = {
      productName: productName ,
      buyerName: buyerName,
      bookingDate:date,
      meetLocation,
      email,
      productPrice:price,
      phone,
   
  }
   // send data client to server 
   fetch(`http://localhost:5000/bookings`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(booking)
   })
   .then(res => res.json())
   .then(bookingResult => {
    if(bookingResult.acknowledged){
      toast.success(`Successfully booking on ${productName}`)
    }
    console.log(bookingResult)
   })
  // console.log(booking,'booking')

  }

  return (
    <div className='text-primary'>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold">
          Product  name:  {brand}
          </h3>
          <p className="py-4">
            <form onSubmit={productBookingHandlar} className="flex  flex-col items-center leading-4	 ">
              <input
                type="text"
                name='productName'
                placeholder="Product name"
                defaultValue={brand}

                className="input bg-slate-200 input-bordered w-full max-w-xs"
              />
              <br />

              <input
                type="text"
                name='bookingDate'
                placeholder=" Booking Date"
                defaultValue={bookingDate}
                readOnly
                className="input bg-slate-200 input-bordered w-full max-w-xs"
              />
              <br />

              <input
                type="text"
                name='price'
                placeholder=" Resell price"
                defaultValue={reselPrice}
                required
                readOnly
                className="input  bg-slate-200 input-bordered w-full max-w-xs"
              />
              <br />

              <input
                type="text"
                name='buyername'
                defaultValue={user?.displayName}
                readOnly
                placeholder="Enter your full name "
                required
                className="input input-bordered  bg-slate-200 w-full max-w-xs"
              />
              <br />
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Enter your email "
                readOnly
                className="input input-bordered   bg-slate-200 w-full max-w-xs"
                required
              />
              <br />
              <input
                type="number"
                name='phone'
                placeholder="Enter your phone number "
                required
                className="input input-bordered  bg-slate-200 w-full max-w-xs"
              />
              <br />
              <input
                type="text"
                name='location'
                placeholder="Enter your location "
                required 
                className="input input-bordered  bg-slate-200 w-full max-w-xs"
              />
              {error && <p className='text-red-500'> {error} </p>}
              <br />
              <input
                type="submit"
                value='Booking '
                className="btn bg-accent w-full max-w-xs"
              />
            </form>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
