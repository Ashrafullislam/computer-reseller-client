import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FaTrashAlt } from 'react-icons/fa';
import Loading from '../../../Loading/Loading';

const SeeReport = () => {
   
    const url = `http://localhost:5000/reports`
    const {data:reports,isLoading,refetch} = useQuery({
       queryKey:['reports'],
       queryFn: async() => {
         const res = await fetch(url);
         const data = res.json()
         return data ;
       }        
    })
   
// // delete order from database 
const deleteReport = id => {

    fetch(`http://localhost:5000/reports/${id}`,{
        method:'PUT',
        headers:{
            authorization: `bearer ${localStorage.getItem('accessToken')}`,

        }

    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount === 1){
            toast.success('Successfully user deleted')
             refetch()
        }
    })
}

if(isLoading){
    return <Loading > </Loading>
}

console.log(reports)


    return (
        <div className='full px-4'>
            <h2 className='text-2xl font-bold my-3 text-primary'> See all report  </h2>
            <div>
            <div>
      <div className="overflow-x-auto mt-5">
     <table className="table w-full">

        <thead className=''>
        <tr className='head-row'>
            <th></th>
            <th>  Product Image </th>
            <th> Name </th>
            <th> Price </th>
            <th>  User email  </th>
            <th> Comment   </th>
            <th> Delete </th>
        </tr>
        </thead>
        <tbody className='text-primary'>
         {reports?
            reports?.map((report ,i) =>   
            <tr key={report._id}>
                <td> {i+1} </td>
                <td> <img src={report.photo} className  ="w-16 h-16" alt='' /> </td>
                <td >{report.Name}  </td>
                 <td> {report.Price} </td>
                <td> {report.email} </td>
                <td> {report.comment} </td>
              
                <td className='flex'> <button onClick={()=> deleteReport(report._id)} className='btn bg-blue-500 btn-sm text-white ' > Delete <FaTrashAlt className='ml-2'/> </button> </td>
            </tr> )
            :
            ''
        }
         
       </tbody>
       </table>
       </div>
      </div>
        </div>
        </div>
    );
};

export default SeeReport;