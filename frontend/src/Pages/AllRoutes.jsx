import React from 'react';
import {Routes, Route} from "react-router-dom";
import { Home } from './Home';
import { Signup } from './Signup';
import { Login } from './Login';
import { RequireAuth } from '../Components/RequireAuth';

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={
          <RequireAuth>
        <Home />
        </RequireAuth>
      } />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}
