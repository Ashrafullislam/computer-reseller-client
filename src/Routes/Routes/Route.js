import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../LayOut/Main';
import CategoryProducts from '../../Pages/AllCategory/CategoryProducts/CategoryProducts';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Register/Login/Login';
import SignUp from '../../Pages/Register/SignUp/SignUp';

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
                path: '/blog', element: <Blog > </Blog>
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
                element: <CategoryProducts > </CategoryProducts>
            },
          
            {
                path: "*", element:<div> 404! Routes not found  </div>
            }
        ]
    }
  ])
    
 


export default router;