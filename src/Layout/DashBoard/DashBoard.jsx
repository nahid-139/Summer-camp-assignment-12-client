import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/UseContext';
import { FaUser } from 'react-icons/fa';


const DashBoard = () => {
    const {user} = useContext(AuthContext)

    return (

        <div className='bg-white text-black'>
            <Helmet>
                <title>LinGo | Dashboard</title>
            </Helmet>


            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  text-base-content bg-red-800">
                    <div className="flex items-center p-2 space-x-4">
		{
            user.photoURL ? (<img src={user.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />):(<FaUser></FaUser>)
        }
		<div>
			<h2 className="text-lg font-semibold">{user.displayName}</h2>
			<span className="flex items-center space-x-1">
				<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
			</span>
		</div>
	</div>
                        <li><NavLink to='/dashboard/myclasses'>My classes</NavLink ></li>
                        <li><a>Sidebar Item 2</a></li>
                        
                    </ul>

                </div>
            </div>
            
            


        </div>
    );
};

export default DashBoard;