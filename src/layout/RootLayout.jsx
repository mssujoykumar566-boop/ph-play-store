import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/shared/Navbar';
import Footer from '../Component/shared/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
           <Navbar/>
            <Outlet/>
            <Footer/>
            {/* toast container */}
              <ToastContainer />
        </div>
    );
};

export default RootLayout;