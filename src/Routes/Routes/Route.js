import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashBoardLayout from '../../LayOut/DashboardLayout';
import Main from '../../LayOut/Main';
import CategoryProducts from '../../Pages/AllCategory/CategoryProducts/CategoryProducts';
import Blog from '../../Pages/Blog/Blog';
import AddProducts from '../../Pages/Dashboard/AddProducts/AddProducts';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders';
import MyProducts from '../../Pages/Dashboard/MyProducts/MyProducts';
import SeeReport from '../../Pages/Dashboard/SeeReport/SeeReport';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Register/Login/Login';
import SignUp from '../../Pages/Register/SignUp/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivetRoute from '../PrivetRoute/PrivetRoute';
import SellerRoute from '../SellerRoute/SellerRoute';


  const router = createBrowserRouter ([
    {
        path: '/' , element: <Main > </Main>,
        children: [
            {
                path: '/', element: <Home > </Home>
            },
            {
                path: '/home', element: <Home > </Home>
            },
            {
                path: '/blog', element:  <Blog > </Blog> 
            },
            {
                path: '/signup', element: <SignUp > </SignUp>
            },
            {
                path: '/login', element: <Login > </Login>
            },
            {
                path: '/categoryProducts/:id',
                loader:({params}) =>  {
                    return fetch(`http://localhost:5000/categoryProducts/${params.id}`)
                } ,
                element: <PrivetRoute > <CategoryProducts > </CategoryProducts>  </PrivetRoute>  
            },
          
            {
                path: "*", element:<div> 404! Routes not found  </div>
            }
        ]
    },
    {
        path: '/dashboard', element: <PrivetRoute > <DashBoardLayout >  </DashBoardLayout> </PrivetRoute> ,
        children: [
           {
            path: '/dashboard', element: <PrivetRoute >  <MyOrders > </MyOrders> </PrivetRoute>
           },
           {
            path: '/dashboard/addproducts', element:<SellerRoute >  <AddProducts > </AddProducts> </SellerRoute>
           },
           {
            path: '/dashboard/myproducts', element:<SellerRoute >  <MyProducts  > </MyProducts> </SellerRoute>
           },
           {
            path: '/dashboard/allusers', element: <AdminRoute ><AllUsers > </AllUsers> </AdminRoute>
           },
           {
            path: '/dashboard/seereport',element: <AdminRoute > <SeeReport > </SeeReport> </AdminRoute>
           }

           
        ]
    }
  ])
    
 


export default router;