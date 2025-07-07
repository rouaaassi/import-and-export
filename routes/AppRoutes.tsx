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
import CustomerApp from '../src/pages/customer-app';
import Customers from '../src/pages/staff-dashboard/customers';
import ServiceCenters from '../src/pages/staff-dashboard/service-centers';
import Ratings from '../src/pages/staff-dashboard/ratings';

interface AppRoutesProps {
  setDarkMode: (val: boolean) => void;
  darkMode: boolean;
}

const AppRoutes = ({ setDarkMode, darkMode }: AppRoutesProps) => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/forgetpassword' element={<ForgetPassword />} />
      <Route path='/about' element={<AboutSection />} />
      <Route path='/staff-dashboard' element={<StaffDashboard setDarkMode={setDarkMode} darkMode={darkMode} />} />
      <Route path='/parcels' element={<Parcels/>} />
      <Route path='/parcels/:id' element={<ParcelsDetails />} />
      <Route path='/customer-app' element={<CustomerApp/>}/>
      <Route path ='/staff-dashboard/customers' element= {<Customers/>}/>
      <Route path = '/staff-dashboard/service-centers' element ={<ServiceCenters/>}/>
      <Route path = '/staff-dashboard/rating' element ={<Ratings/>}/>
    </Routes>
  )
}
export default AppRoutes;