import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const BookingModal = ({products}) => {
  const {user} = useContext(AuthContext)
  const {brand,resellPrice,}  = products ;
  const [error , setError] = useState('')
  const bookDate = new Date();
  let bookingDate = bookDate.toLocaleDateString()
  console.log(bookDate)

  const productBookinHandlar = (event) => {
    event.preventDefault()
    const form = event.target ;
    const date = form.date.value ;
    const name = form.name.value ;
    const email = form.email.value ;
    const phone = form.phone.value ;
    console.log(form)
    if(phone.length < 11 ){
      setError('Phone number must be given atleast 11 characters')
      return ;
    }


 
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
            <form onSubmit={productBookinHandlar} className="flex  flex-col items-center leading-4	 ">
              <input
                type="text"
                name='appoint_name'
                placeholder="Product name"
                defaultValue={brand}

                className="input bg-slate-200 input-bordered w-full max-w-xs"
              />
              <br />

              <input
                type="text"
                name='date'
                placeholder=" Booking Date"
                defaultValue={bookingDate}
                readOnly
                className="input bg-slate-200 input-bordered w-full max-w-xs"
              />
              <br />

              <input
                type="text"
                name='sellername'
                defaultValue={user?.displayName}
                readOnly
                placeholder="Enter your full name "
                required
                className="input input-bordered input-accent w-full max-w-xs"
              />
              <br />
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                placeholder="Enter your email "
                readOnly
                className="input input-bordered input-accent w-full max-w-xs"
                required
              />
              <br />
              <input
                type="number"
                name='phone'
                placeholder="Enter your phone number "
                required
                className="input input-bordered input-accent w-full max-w-xs"
              />
              <br />
              <input
                type="text"
                name='location'
                placeholder="Enter your location "
                required
                className="input input-bordered input-accent w-full max-w-xs"
              />
              {error && <p className='text-red-500'> {error} </p>}
              <br />
              <input
                type="submit"
                value='Submit '
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
