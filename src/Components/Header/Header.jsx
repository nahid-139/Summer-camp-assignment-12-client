import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegMinusSquare, FaUser } from "react-icons/fa";

import { AuthContext } from '../Context/UseContext';

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        
      })
      .catch((error) => {
        console.error(error);
      });
  };
    return (
      <div className="bg-slate-500">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full  shadow-lg md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link to="/" title="Toy Hunter" className="inline-flex items-center w-20 ">
            <img src="" alt="" />
            <p className='text-3xl font-bold'>LinGo</p>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to="/"
                className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                Instractor
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
              >
                Classes
              </Link>
            </li>
           
            <li>
                  <Link
                    to="/allToys"
                    className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                  >
                   Dashboard
                  </Link>
                </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            {user?.uid ? (
              <>
                <li>
                  <Link
                    onClick={handleLogout}
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    LogOut
                  </Link>
                </li>
                <li className=" text-lg font-medium">{user?.displayName}</li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/Login"
                    className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-500 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign In"
                    title="Sign In"
                  >
                    Log In
                  </Link>
                </li>
              </>
            )}
            {user?.email ? (
              <>
                {user?.email ? (
              <>
                <img
                  className=" rounded-full  w-16"
                  src={user?.photoURL}
                  alt=""
                />
              </>
            ) : (
              <>
                <span>
                  <FaUser></FaUser>
                </span>
              </>
            )}
              </>
            ) : (
              <></>
            )}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        title="FoodFly"
                        className="inline-flex items-center"
                      >
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          <img src="" alt="" />
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <FaRegMinusSquare></FaRegMinusSquare>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/blog"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </Link>
                      </li>
                      <li>
                            <Link
                              to="/myToys"
                              aria-label="About us"
                              title="About us"
                              className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                            >
                            My Toys
                            </Link>
                          </li>
                      {user?.email ? (
                        <>
                          <li>
                            <Link
                              to="/allToys"
                              className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                            >
                              All Toys
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/addToys"
                              aria-label="About us"
                              title="About us"
                              className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                            >
                            Add Toys
                            </Link>
                          </li>
                        </>
                      ) : (
                        <></>
                      )}
                      {user?.email ? (
                        <>
                          <li>
                            <Link
                              onClick={logOut}
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-blue-600 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Sign In"
                              title="Sign In"
                            >
                              LogOut
                            </Link>
                          </li>
                          <li>{user?.displayName}</li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link
                              to="/login"
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-blue-600 text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Sign In"
                              title="Sign In"
                            >
                              Sign In
                            </Link>
                          </li>
                        </>
                      )}
                      {user?.photoURL?<img className='w-12 rounded-full' title={user?.displayName} src={user?.photoURL} alt="" />:<span className='text-white text-xl w-10 h-10 bg-zinc-500 flex justify-center rounded-full items-center'><FaUser></FaUser></span>
                      }
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    );
};

export default Header;