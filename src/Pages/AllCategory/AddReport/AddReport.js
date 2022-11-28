import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
const AddReport = ({products,setProducts}) => {
    
    const {title,photoURL,reselPrice,} = products;
    const {user} = useContext(AuthContext)
    console.log(user);

    const handleReport = event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const comment = form.comment.value;
        const userReport ={
          photo:photoURL,
           Name: title,
           Price: reselPrice,
           email,
           comment
        }
        console.log(userReport);
        fetch('https://computer-reseller-server.vercel.app/reports', {
          method:'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(userReport)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Your report added  Succefull')
                setProducts(null)
            }
            console.log(data)
        })
    }
    return (
        <div>
        <input type="checkbox" id="report-modal" className="modal-toggle" />
        <div className="modal text-primary">
        <div className="modal-box relative">
            <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-lg font-bold">{title}</h3>
                <p>Price: {reselPrice}</p>
            <form className='grid grid-cols-1 gap-3 mt-10'  onSubmit={handleReport}>

            <input name='name' type="text" defaultValue={user?.displayName} readOnly placeholder="Your Name" className="input bg-slate-200 w-full input-bordered" />
            <input name='email' type="text" defaultValue={user?.email} readOnly placeholder="Email Address" className="input w-full bg-slate-200 input-bordered" />
            <textarea name="comment" required id="" cols="15" className='bg-slate-200 border rounded p-2' placeholder='Please comment here about this products' rows="5"></textarea>
            <br />
            <input type="submit" className='btn btn-primary' value="Submit" />
           
            </form>
        </div>
        </div>
    </div>
    );
};

export default AddReport;