import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StaffDashboard from '../src/pages/staff-dashboard';
import SignUp from '../src/pages/signup';
import LogIn from '../src/pages/login';
import ForgetPassword from '../src/components/logIn/forgetPassword';
import Home from '../src/pages/home';
import AboutSection from '../src/pages/about';


const AppRoutes= ()=>{
    return(
        <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/about' element={<AboutSection />} />
        <Route path='/staff-dashboard' element={<StaffDashboard />} />
      </Routes>
    )
}
export default AppRoutes;