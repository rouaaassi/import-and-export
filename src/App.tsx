import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup';
import LogIn from './pages/login';
import ForgetPassword from './components/logIn/forgetPassword';
import Home from './pages/home';
import AboutSection from './pages/about';
import LoadingProvider from './LoadingProvider';
import AdminDashboard from './pages/admin-dashboard';


const App: FC = () => {
  return (
    <>
      <LoadingProvider>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/about' element={<AboutSection />} />
          <Route path='/admin-dashboard' element={<AdminDashboard />} />
        </Routes>
      </LoadingProvider>
    </>
  );
};

export default App;
