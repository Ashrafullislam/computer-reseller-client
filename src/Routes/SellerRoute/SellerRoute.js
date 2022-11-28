import React, {useContext} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useSeller from '../../Hook/useSeller/useSeller';
import Loading from '../../Loading/Loading';

const SellerRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
//   const [isAdmin,isAdminLoading] = useAdmin(user?.email)
     const [isSeller,isSellerLoading] = useSeller(user?.email);
   
  const location = useLocation();
  if (loading || isSellerLoading) {
    return <Loading > </Loading>
     
  }

  if (user && isSeller) {
    return children;

  }
  return <Navigate to="/login" state={{from: location}} replace />;

};

export default SellerRoute;
