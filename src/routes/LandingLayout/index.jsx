import React from 'react';
import { Outlet } from 'react-router-dom';
import MainNavBar from '../../components/navBar/Main';
import Footer from '../../components/footer';
import '../../index.css';

function LandingLayout() {
  return (
    <div className='content'>
      <MainNavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default LandingLayout;
