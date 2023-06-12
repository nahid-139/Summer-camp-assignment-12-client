import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/UseContext';
import { FaUser } from 'react-icons/fa';


const DashBoard = () => {




    const [users,setUsers]=useState([])
    const {user} = useContext(AuthContext)

 useEffect(() => {
  fetch("http://localhost:5000/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const checkUser = data.filter((chkUser) => {
        return chkUser.email === user?.email;
      });
      setUsers(checkUser);
    })
    .catch((err) => {
      console.log(err.message);
    });
}, [user]);
    

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
                    <ul className="menu p-4 w-80 h-full  text-base-content bg-slate-600 font-bold ">
                    <div className="flex items-center p-2 space-x-4">
		{
            user.photoURL ? (<img src={user.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />):(<FaUser></FaUser>)
        }
		<div>
			<h2 className="text-lg font-semibold">{user?.displayName}</h2>
			<span className="flex items-center space-x-1">
				<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
			</span>
		</div>
	</div>              { user && users[0]?.role === "user" &&
                        <><li>
                        <NavLink to='/dashboard/myclasses'>My classes</NavLink >
                        </li>
                    <li><Link>Payment</Link></li></>
                        }
                         {  user && users[0]?.role === "instractor" &&(
                            <><li>
                            <NavLink to='/dashboard/addclasses'>Add Class</NavLink >
                            </li></>
                         )}
                         {  user && users[0]?.role === "admin" &&(
                            <><li>
                            <NavLink to='/dashboard/allusers'>All Users</NavLink >
                            </li></>
                         )}
                        
                        
                        <hr className='mt-10'/>
                      <div className='mt-10'>
                           <li ><Link to='/'>Home</Link></li>
                        <li ><Link to='/classes'>Classes</Link></li>
                        <li><Link to='/instractors'>Instractors</Link></li>
                        </div>
                        
                    </ul>

                </div>
            </div>
            
            


        </div>
    );
};

export default DashBoard;