import './index.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignUp from './auth/signUp';
import Admin from './admin';
import Home from './pages/Home';
import LandingLayout from './routes/LandingLayout';
import AuthLayout from './routes/AuthLayout';
import SignIn from './auth/SignIn';

function App() {
  return (
    <>
      <Router>
        <Routes>
           {/* Application Routes */}
          <Route element={<LandingLayout />}>
            <Route path='/' exact element={<Home />} />
          </Route>
          {/* Admin Auth */}
          <Route element={<AuthLayout />}>
            <Route path='/admin' element={<Admin />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
