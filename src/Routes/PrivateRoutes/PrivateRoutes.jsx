import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
          <Spinner className="text-center" animation="border" variant="primary" />
        );
      }
      if (user) {
        return children;
      }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;