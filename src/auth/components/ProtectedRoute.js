import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser, isEmailVerified, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (!currentUser) {
    return <Navigate to='/login' />;
  }

  if (!isEmailVerified) {
    return <Navigate to='/verifyemail' />;
  }

  return children;
};

export default ProtectedRoute;
