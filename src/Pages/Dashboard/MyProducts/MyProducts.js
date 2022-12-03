import { useQuery } from '@tanstack/react-query';
import React,{useContext} from 'react';
import toast from 'react-hot-toast';
import { FaCheckCircle, FaSlideshare, FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../../Loading/Loading';

const MyProducts = () => {
     const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/products/${user?.email}`
    const {data:products = [],isLoading,refetch} = useQuery({
       queryKey:['products'],
       queryFn: async() => {
         const res = await fetch(url);
         const data = res.json()
         return data ;
       }  
    })
    if(isLoading){
        return <Loading > </Loading>
    }
//   make an handlar to delete my products 



//=================== delete order from database ===============
const deleteProducts = (_id) => {

    fetch(`http://localhost:5000/products/delete/${_id}`,{
        method:'PUT',
        headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`,
        }
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount === 1){
            toast.success('Successfully order deleted')
             refetch()
        }
    })
}


// update products in products collection database 
    const AdvertiseProducts = (id) => {

         fetch(`http://localhost:5000/products/${id}`,{

        method: 'PUT',
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
            
        }
        
      })
            .then(res => res.json())
            .then(data  => {
                if( data.modifiedCount >  0){
                    toast.success('Products advertised  successfull')
                    refetch()
          
                  }
            })
    }
    // const token  = localStorage.getItem('accessToken');
   

    return (
  <div>
     <h2 className='text-2xl font-bold my-3 text-primary'> My All Products  </h2>
 <div>
   <div className="overflow-x-auto mt-5">
    <table className="table w-full">

      <thead className=''>
        <tr className='head-row'>
        
            <th></th>
            <th>  Image </th>
            <th>  Name </th>
            <th> Resell Price </th>
            <th> Add Date </th>
            <th> Status </th>
            <th> Advertised </th>
            <th> Adveritse </th>
            <th> Delete </th>
     
    </tr>
    </thead>
    <tbody className='text-primary'>
     {products?
        products?.map((product ,i) =>   
        <tr key={product._id}>
            <td> {i+1} </td>
            <td>
                 <img src={product.photoURL} className="w-20 h-20 rounded-md" alt='product img' />  </td>
                <td> {product.brand}  </td>
                <td> {product.reselPrice} </td>
                <td> {product.postedTime} </td>
                <td> {product.status} </td>
                <td >  <div className='flex '> {product.advertise}
                 { product.advertise == "advertised" && <FaCheckCircle className='text-green-500 ml-2' />} 
                    </div></td>
                 
            <td> 
            <button onClick={()=> AdvertiseProducts(product._id)} className='btn btn-primary btn-sm text-white flex  flex-nowrap' > Advertise <FaSlideshare className='ml-2'/> </button>   </td>

            <td> <button onClick={()=> deleteProducts(product._id)} className='btn bg-blue-500 btn-sm text-white flex flex-nowrap' > Delete <FaTrashAlt className='ml-2'/> </button> </td>
        </tr> )
        :
        ''
    }
     
      </tbody>
      </table>
     </div>
    </div>
  </div>
    );
};

export default MyProducts;