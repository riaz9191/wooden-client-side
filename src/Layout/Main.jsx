import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <ToastContainer />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;