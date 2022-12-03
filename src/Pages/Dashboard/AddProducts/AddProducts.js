import React, { useContext } from 'react';
import  { toast }  from 'react-hot-toast'
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useVerify from '../../../Hook/useVerify/useVerify';
const AddProducts = () => {
    const {user} = useContext(AuthContext)
    const email = user?.email;
    const [isVerify] = useVerify(user?.email);
    const verify = isVerify?.verify;
    // console.log(verify)
    const d = new Date();
    let date = d.toLocaleDateString();
    

    const handleAddProduct =event=> {
        event.preventDefault();

        const form = event.target;
        const brand = form.name.value;
        const photoURL = form.photo.value;
        const sellerLocation = form.location.value;
        const originalPrice = form.originalPrice.value;
        const reselPrice = form.resellPrice.value;
        const title = form.title.value;
        const category_id = form.category.value;
        const yearsOfUse = form.year.value;
        const conditionType = form.condition.value;
        const sellerName = form.seller.value;

     
        const addProduct = {
          brand,
          photoURL,
          sellerLocation,
          originalPrice,
          reselPrice,
          title,
          category_id,
          sellerName,
          yearsOfUse,
          conditionType,
          postedTime:date,
          status:"available",
          email,
          verify,
          
         }

         fetch('https://computer-reseller-server.vercel.app/products', {
           method:'POST',
           headers:{
             'content-type': 'application/json'
           },
           body:JSON.stringify(addProduct)
         })
         .then(res=>res.json())
         .then(data=> {
             console.log(data);
             if(data.acknowledged){
                 toast.success('Your products successfully added ')
             }
         })
      
  }

  

    return (
    <div className='shadow-2xl'>
        <div className="card flex-shrink-0 w-full  mt-5 mb-10  ">
      <h2 className='text-2xl font-bold text-primary'> Add  your products by fill  up  info  form </h2>
       <form onSubmit={handleAddProduct}>
      <div className="card-body grid grid-cols-1 md:grid-cols-2 ">

       <div className="form-control">
          <label className="label">
            <span className="">Product Name</span>
          </label>
          <input type="text" name='name' required placeholder="Product Name" className="input input-bordered bg-stone-100 text-primary" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="">Product Image</span>
          </label>
          <input type="url" name='photo' required placeholder="Image URL" className="input input-bordered bg-stone-100 text-primary " />
        </div>
  
        <div  className="form-control">
          <label className="label">
            <span className="">Product Title</span>
          </label>
          <input type="text" name='title' required placeholder="Title" className="input input-bordered bg-stone-100 text-primary " />
        </div>

       

        <div  className="form-control">
          <label className="label">
            <span className="">Original Price</span>
          </label>
          <input type="text" name='originalPrice' required placeholder="Original Price" className="input input-bordered bg-stone-100 text-primary" />
        </div>

        <div  className="form-control">
          <label className="label">
            <span className="">Resell Price</span>
          </label>
          <input type="text" name='resellPrice' required placeholder="Resale Price" className="input input-bordered bg-stone-100 text-primary" />
        </div>

        <div  className="form-control">
          <label className="label">
            <span className="">Location</span>
          </label>
          <input type="text" name='location' required placeholder="Location" className="input input-bordered bg-stone-100 text-primary" />
        </div>
        
        <div  className="form-control">
          <label className="label">
            <span className="">Select Products Category  </span>
        </label>
        <select   className="mt-3 select border-0 bg-stone-100 select-primary text-primary w-full " name='category' >
        <option value="1"> Desktop </option>
        <option value="2">Apple Mac</option>
        <option value="3">Laptop </option>
        <option value="4">Tablet </option>
        
         </select>
      
        </div>

        <div  className="form-control">
          <label className="label">
            <span className="">Uses Time</span>
          </label>
          <input type="text" name='year' required placeholder="Products  Uses time " className="input bg-stone-100  input-bordered text-primary" />
        </div>
        
        <div  className="form-control">
          <label className="label">
            <span className="">Condition</span>
          </label>
          <input type="text" name='condition' required placeholder="Products Condition" className="input bg-stone-100  input-bordered text-primary" />
        </div>

        <div  className="form-control">
          <label className="label">
            <span className="">Posted Time</span>
          </label>
          <input type="text" name='postedTime' defaultValue={date} required placeholder="Products Condition" className="input bg-stone-100  input-bordered text-primary" />
        </div>

        <div  className="form-control">
          <label className="label">
            <span className="">Seller Name</span>
          </label>
          <input type="text" name='seller' defaultValue={user?.displayName} required readOnly placeholder="Products Condition" className="input bg-stone-100 text-primary input-bordered" />
        </div>

        </div>
        <div className=" flex justify-center  mt-4 mb-4">
        <input type="submit" className='btn btn-primary' value="Add Products" />
        </div>
       </form>
    </div>
    </div>
  
    );
};

export default AddProducts;