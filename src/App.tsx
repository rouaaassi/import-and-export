import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup';
import LogIn from './pages/login';
import ForgetPassword from './components/logIn/forgetPassword';
import NavBar from './components/navbar/navbar';


const App: React.FC = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path='/login' element={<LogIn/>}/>
      <Route path='/forgetpassword' element={<ForgetPassword/>} />
    </Routes>
    </>
  );
};

export default App;
