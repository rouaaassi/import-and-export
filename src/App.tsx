import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup';
import LogIn from './pages/login';
import ForgetPassword from './components/logIn/forgetPassword';
import NavBar from './components/navbar/navbar';
import Home from './pages/home';
import AboutSection from './pages/about';


const App: React.FC = () => {
  return (
    <>
    <NavBar/>
    <Home/>
    <AboutSection/>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>} />
      <Route path='/about' element={<AboutSection/>}/>
    </Routes>
    </>
  );
};

export default App;
