import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router-dom';

export const RequireAuth = ({children}) => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const location = useLocation();
    console.log('location:', location)

    if(!isAuth) { //if user is not authenticated take to login page
       return <Navigate to="/login" state={{from: location}} replace />
    }
    
  return children; //else show the page
}

