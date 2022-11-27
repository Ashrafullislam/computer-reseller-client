import React, { useContext } from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../Hook/useAdmin/useAdmin';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardLayout = () => {
const  {user} = useContext(AuthContext);
// call the custom admin check hook , to verify user email role admin
const [isAdmin] = useAdmin(user?.email)

  return (
    <div>
      <Navbar > </Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}

          <Outlet> </Outlet>
       
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay" />
          <ul className="menu mt-8 text-primary font-semibold p-4 w-80 bg-base-100 ">
            {/* <!-- Sidebar content here --> */}
           
            {/* if isAdmin user.role ? then show the all  user option  */}
            { isAdmin ?
            <>
               <li> <NavLink className="mt-4" to='/dashboard/allusers'> All Users</NavLink></li>
               <li> <NavLink className="mt-4" to='/dashboard/seereport' > See Report </NavLink> </li>
               
            </> 
            :
            <> 
             <li ><NavLink className="mt-4" to='/dashboard'> My Orders </NavLink></li>
             <li> <NavLink className="mt-4" to='/dashboard/addproducts' > Add Products </NavLink> </li>

            </>
            }
          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
