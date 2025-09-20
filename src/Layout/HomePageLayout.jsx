import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const HomePageLayout = () => {
  return (
    <div className="bg-blue-100 p-5 h-[100vh] ">
      <Navbar />
      <div className='p-4  '>
        <Outlet />
      </div>
      
    </div>
  );
}

export default HomePageLayout;
