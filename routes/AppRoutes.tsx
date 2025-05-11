import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StaffDashboard from '../src/pages/staff-dashboard/dashboard-content';
import SignUp from '../src/pages/signup';
import LogIn from '../src/pages/login';
import ForgetPassword from '../src/components/logIn/forgetPassword';
import Home from '../src/pages/home';
import AboutSection from '../src/pages/about';
import Parcels from '../src/pages/staff-dashboard/parcels';
import ParcelsDetails from '../src/pages/staff-dashboard/parcels/[id]';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/forgetpassword' element={<ForgetPassword />} />
      <Route path='/about' element={<AboutSection />} />
      <Route path='/staff-dashboard' element={<StaffDashboard />} />
      <Route path='/parcels' element={<Parcels />} />
      <Route path='/parcels/:id' element={<ParcelsDetails />} />
    </Routes>
  )
}
export default AppRoutes;