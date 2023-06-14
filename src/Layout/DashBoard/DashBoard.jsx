import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/UseContext';
import { FaAddressCard, FaBook, FaBookOpen, FaDollarSign, FaHome, FaUser, FaUserAlt, FaUsers } from 'react-icons/fa';


const DashBoard = () => {




    const [users,setUsers]=useState([])
    const {user} = useContext(AuthContext)

 useEffect(() => {
  fetch("https://summer-school-server-nahid-139.vercel.app/users")
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
                    { user && users[0]?.role === "user" &&<><h1 className='text-center text-2xl text-gray-300'>DashBoard Home</h1></>}
                    { user && users[0]?.role === "admin" &&<><h1 className='text-center text-2xl text-gray-300'>Admin Home</h1></>}
                    { user && users[0]?.role === "instractor" &&<><h1 className='text-center text-2xl text-gray-300'>Instructor Home</h1></>}
                   

                    <hr />
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
                        <>
                        
                        
                        <li>
                            <div><FaBookOpen></FaBookOpen>
                        <NavLink to='/dashboard/myclasses'>My classes</NavLink ></div>
                        </li>
                    <li>
                        <div><FaDollarSign></FaDollarSign><Link to= '/dashboard/payment'>Payment</Link></div></li></>
                        }
                         {  user && users[0]?.role === "instractor" &&(
                            <>
                            <li>
                             <div>   <FaAddressCard></FaAddressCard>
                            <NavLink to='/dashboard/addclasses'>Add Class</NavLink ></div>
                            </li>
                            <li>
                                <div><FaBookOpen></FaBookOpen>
                            <NavLink to='/dashboard/insmyclass'>Instractor Class</NavLink ></div>
                            </li>
                            </>
                         )}
                         {  user && users[0]?.role === "admin" &&(
                            <><li>
                                <div>
                                <FaUsers></FaUsers>
                            <NavLink to='/dashboard/allusers'>All Users</NavLink >
                                </div>
                            </li>
                            <li><div>
                            <FaBookOpen></FaBookOpen><NavLink to="/dashboard/manageclass">Manage Class</NavLink></div></li></>
                         )}
                        
                        
                        <hr className='mt-10'/>
                      <div className='mt-10'>
                           <li ><div><FaHome></FaHome><Link to='/'>Home</Link></div></li>
                        <li ><div><FaBook></FaBook><Link to='/classes'>Classes</Link></div></li>
                        <li><div><FaUserAlt></FaUserAlt><Link to='/instractors'>Instractors</Link></div></li>
                        </div>
                        
                    </ul>

                </div>
            </div>
            
            


        </div>
    );
};

export default DashBoard;