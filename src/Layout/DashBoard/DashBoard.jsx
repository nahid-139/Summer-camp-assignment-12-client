import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Outlet } from 'react-router-dom';


const DashBoard = () => {
    
    return (
       
        <div>
             <Helmet>
                <title>LinGo | Dashboard</title>
            </Helmet>
            <Link to='/dashboard/myclasses'>My classes</Link>
            <Outlet></Outlet>

          
        </div>
    );
};

export default DashBoard;