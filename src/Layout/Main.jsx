import React from 'react';
import Navbar from '../Pages/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import { ToastContainer } from 'react-toastify';
// import { Helmet } from 'react-helmet';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Main = () => {
    
    return (
        <div className='max-w-7xl mx-auto bg-base-200'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default Main;