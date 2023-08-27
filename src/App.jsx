import './index.css';
import React, { useState } from 'react';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNavBar from './components/navBar/Main';

function App() {
  return (
    <>
      <Router>
        <MainNavBar />
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
