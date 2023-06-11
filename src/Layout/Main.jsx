import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';

const Main = () => {
    return (
        <div className='bg-white text-black'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;