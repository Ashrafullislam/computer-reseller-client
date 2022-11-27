import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Loading from '../../../Loading/Loading';
import './MyOrder.css';
const MyOrders = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    // use react query for get user product order info 
    const {data:orders ,isLoading,refetch} = useQuery ({
        queryKey:['bookings',user?.email],
        queryFn: async()=> {
          
                 // now get token  from localstorage 
      const res = await fetch(url, 
        {
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`,
        }
      } 
      );
            const data = await res.json();
            return data ;

        }
    })

// delete order from database 
const deleteOrder = id => {

    fetch(`http://localhost:5000/booking/${id}`,{
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


    if(isLoading){
        return <Loading > </Loading>
    }
    console.log(orders)


    
    return (
        <div>
           <h2 className='text-2xl my-3 font-bold text-primary'> My Orders  {orders.length}   </h2>
     <div>
      <div className="overflow-x-auto mt-5">
     <table className="table w-full">

        <thead className=''>
        <tr className='head-row'>
            <th></th>
            <th> Product Image </th>
            <th> User email </th>
            <th> Booking Date </th>
            <th> Product Name </th>
            <th> Price </th>
            <th> Payment </th>
            <th> Delete </th>
        </tr>
        </thead>
        <tbody className='text-primary'>
         { orders?
            orders?.map((order ,i) =>   
            <tr key={order._id}>
                <th> {i+1} </th>
                <td> <img src={order.photoURL} className="w-20 h-20 rounded-md" alt='product img' />  </td>
                <td> {order.email}  </td>
                <td> {order.bookingDate} </td>
                <td> {order.productName} </td>
                <td> {order.productPrice} </td>
                <td> <button className='btn text-white btn-primary btn-sm' > Paynow </button> </td>
                <td> <button onClick={()=> deleteOrder(order._id)} className='btn bg-blue-500 btn-sm text-white' > Delete <FaTrashAlt className='ml-2' />  </button> </td>
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

export default MyOrders;