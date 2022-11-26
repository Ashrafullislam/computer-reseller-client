import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashBoardLayout from '../../LayOut/DashboardLayout';
import Main from '../../LayOut/Main';
import CategoryProducts from '../../Pages/AllCategory/CategoryProducts/CategoryProducts';
import Blog from '../../Pages/Blog/Blog';
import AddProducts from '../../Pages/Dashboard/AddProducts/AddProducts';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders';
import SeeReport from '../../Pages/Dashboard/SeeReport/SeeReport';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Register/Login/Login';
import SignUp from '../../Pages/Register/SignUp/SignUp';
import PrivetRoute from '../PrivetRoute/PrivetRoute';


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
            path: '/dashboard', element: <MyOrders > </MyOrders>
           },
           {
            path: '/dashboard/addproducts', element: <AddProducts > </AddProducts>
           },
           {
            path: '/dashboard/allusers', element: <AllUsers > </AllUsers>
           },
           {
            path: '/dashboard/seereport',element: <SeeReport > </SeeReport>
           }

           
        ]
    }
  ])
    
 


export default router;