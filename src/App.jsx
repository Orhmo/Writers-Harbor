import './index.css';
import React, { useState } from 'react';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import TopNavBar from './components/TopNavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';

function App() {
  return (
    <>
      <Router>
        <TopNavBar />
        <Logo />
        <NavBar />
        <div className='content'>
          <Routes>
            {/* <Route path='/' exact element={<Home />} /> */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
