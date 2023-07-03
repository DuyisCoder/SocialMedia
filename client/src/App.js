import React from 'react';
import Home from './pages/home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from '../src/pages/login/Login';
import Register from'../src/pages/register/Register'
import Profile from './pages/profile/Profile'
function App() {
  return (
     <Router>
       <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile/:username' element={<Profile />} />
       </Routes>
      </Router>
  );
}

export default App;
