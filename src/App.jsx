import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLogin from './Components/UserLogin';
import LandingPage from './Components/LandingPage';
import AdminLogin from './Components/AdminLogin';
import AdminSignUp from './Components/AdminSignUp';
import UserSignUp from './Components/UserSignUp';
import AdminHomepage from './Components/AdminHomepage';
import Errorpage from './Components/Errorpage';
import Protect from './Components/Protect';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Errorpage/>}/>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/adminsignup' element={<AdminSignUp/>}/>
        <Route path='/usersignup' element={<UserSignUp/>}/>
        <Route path='/adminhomepage/*'element={<Protect Child={AdminHomepage}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
