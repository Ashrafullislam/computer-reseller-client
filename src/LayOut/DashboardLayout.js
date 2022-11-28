import React, { useContext } from 'react';
import { FaArrowAltCircleRight, FaUsersCog } from 'react-icons/fa';
import {NavLink, Outlet} from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useAdmin from '../Hook/useAdmin/useAdmin';
import useSeller from '../Hook/useSeller/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import './DashBoardLayout.css';
import { BsClipboardCheck, BsJournalPlus } from "react-icons/bs";


const DashBoardLayout = () => {
const  {user} = useContext(AuthContext);
// call the custom admin check hook , to verify user email role admin
const [isAdmin] = useAdmin(user?.email)
// isSeller verify and get access ..if userType is seller 
const [isSeller] = useSeller(user?.email)


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

            { isSeller == "buyer" &&
              <li ><NavLink  className="mt-4 bg-slate-200 " to='/dashboard/myorders'> My Orders </NavLink></li>
            }

          

          {/* if isAdmin user.role ? then show the all  user option  */}
          {isAdmin&&
              <> 
               <li> <NavLink className="mt-4 bg-slate-300" to='/dashboard/allusers'><FaUsersCog /> All Users</NavLink></li>
               <li> <NavLink className="mt-4 bg-slate-300" to='/dashboard/seereport' > <BsClipboardCheck  />  See Report </NavLink> </li>
               
             </>
             
                 
          }
              {/*isSeller?.role == "seller &&  isAdmin?.role == "admin"&&*/}
          { isSeller == "seller" &&
                 <>
                <li> <NavLink className="mt-4 bg-slate-200" to='/dashboard/myproducts' > My  Products <FaArrowAltCircleRight /> </NavLink> </li> 
                 <li> <NavLink className="mt-4 bg-slate-200" to='/dashboard/addproducts' > Add Products <BsJournalPlus  /> </NavLink> </li>  
                 </>  
                               
          }      
           
        
          </ul>

        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
