// UnProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const UnProtectedRoute = ({ children }) => {

  const location = useLocation();
  const { currentUser } = useAuth();

  if (currentUser === 'initializing') {
    return null;
  }

  if (location.pathname === '/verifyemail') {
    if (currentUser && currentUser.emailVerified) {
      return <Navigate to="/" />;
    }
    if (currentUser && !currentUser.emailVerified) {
      return children;
    }
    else {
      return <Navigate to="/login" />;
    }
  }

  return !currentUser ? children : <Navigate to="/" />;
};

export default UnProtectedRoute;
