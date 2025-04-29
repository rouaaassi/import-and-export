import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup';
import LogIn from './pages/login';
import ForgetPassword from './components/logIn/forgetPassword';
import NavBar from './components/navbar/navbar';
import Home from './pages/home';
import AboutSection from './pages/about';
import AppWrapper from './AppWrapper';


const App: FC = () => {
  return (
    <>
    <AppWrapper>
    <NavBar/>
    <Home/>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>} />
      <Route path='/about' element={<AboutSection/>}/>
    </Routes>
    </AppWrapper>
    </>
  );
};

export default App;
