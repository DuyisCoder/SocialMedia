import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from '../src/pages/login/Login';
import Register from '../src/pages/register/Register';
import Profile from './pages/profile/Profile';
import { AuthContext } from './context/AuthContext';

import Messengers from "./pages/messenger/Messengers"
function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/register" replace />} />
        <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register />} />
        <Route path="/messenger" element={!user ? <Navigate to="/" replace /> : <Messengers />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
