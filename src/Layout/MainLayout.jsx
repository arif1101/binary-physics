import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
        <div className='bg-slate-100 dark:bg-black'>
            <Navbar></Navbar>
            <div className='max-w-[1256px] mx-auto'>
            <Outlet></Outlet>
            </div>
            <div className='bg-[#0F172A]'>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default MainLayout;