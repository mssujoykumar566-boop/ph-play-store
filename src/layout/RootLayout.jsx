import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/shared/Navbar';
import Footer from '../Component/shared/Footer';

const RootLayout = () => {
    return (
        <div>
           <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;