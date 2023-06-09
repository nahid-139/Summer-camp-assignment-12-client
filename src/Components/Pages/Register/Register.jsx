import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useContext, useState } from "react";
import {  FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { auth, AuthContext } from "../../Context/UseContext";
import Swal from "sweetalert2";



const Register = () => {
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {createUser,updateprofile}= useContext(AuthContext)
  const googleProvider= new GoogleAuthProvider()

  const handleSubmit = (event) => {


    
    event.preventDefault();
    const from = event.target;
    const name=from.name.value
    const email = from.email.value;
    const password = from.password.value;
    const confirmPassword = from.confirmPassword.value;
    const photoURL=from.Photo.value;
    if (password !== confirmPassword) {
      setPasswordError("Password and confirm password don't match");
      return;
    }

    createUser(email,password)
    .then((result)=>{
      const user= result.user;
      console.log(user)
      Swal.fire(
        'Good job!',
        'You are SignUp !',
        'success'
      )
      updateprofile(name,photoURL)
      .then(()=>{
        Swal.fire(
            'Good job!',
            'You are SignUp!',
            'success'
          )
      })
      .catch((error)=>{
        console.error(error)
      })
    })
    .catch(error=>{
      console.error(error)
    })
  
  };
  const signInGoogle=()=>{
    signInWithPopup(auth,googleProvider)
    .then((result)=>{
      const user= result.user;
      console.log(user)
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
    }).catch(error=>{
      console.error(error)
    })
  }
 
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <div className="flex py-20  justify-evenly mx-40">
      
      <div className="w-full max-w-lg p-8 space-y-3 rounded-xl shadow-xl bg-gray-200 dark:text-gray-900">
        <h1 className="text-2xl font-bold text-center py-2">Register</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label for="username" className="block text-xl dark:text-gray-400">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 text-lg py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
                    <label
                      htmlFor="PhotoURL"
                      className="block text-xl dark:text-gray-700"
                    >
                     PhotoURL
                    </label>
                    <input
                      placeholder="Enter Your ImageUrl"
                      required
                      type="text"
                      className="w-full px-4 text-lg py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                      id="PhotoURL"
                      name="Photo"
                    />
                  </div>
          <div className="space-y-1 text-sm">
            <label for="email" className="block text-xl dark:text-gray-400">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full px-4 text-lg py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block text-xl dark:text-gray-400">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full text-lg px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
            <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? 'Hide Password' : 'Show Password'}
        </button>
          </div>
          <div className="space-y-1 text-sm">
          {passwordError && <div>{passwordError}</div>}
            <label for="confirmPassword" className="block text-xl dark:text-gray-400">
             Confirm Password
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="w-full text-lg px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
            />
            <button type="button" onClick={toggleConfirmPasswordVisibility}>
          {showConfirmPassword ? 'Hide Password' : 'Show Password'}
        </button>
          </div>
          <button className="block w-full p-3 text-center rounded-sm text-white bg-gray-600">
            Sign in
          </button>
        </form>
        <div className="text-center">
          <div className=" sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-lg dark:text-gray-400">
            Login with social accounts
          </p>
        </div>
        <div>
          <button onClick={signInGoogle} className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  text-white   bg-slate-600 focus:ring-violet-400">
            <span className=" text-2xl">
              <FaGoogle></FaGoogle>
            </span>
            <p>Login with Google</p>
          </button>
        </div>

        
        <p className="text-lg text-center sm:px-6 dark:text-gray-400">
          Already  have an account?
          <Link to="/login" className="underline dark:text-gray-900">
            SignIn
          </Link>
        </p>
      </div>
      <div className="w-1/2 mt-40">
        <img src="https://cdn.dribbble.com/users/1107512/screenshots/3997677/media/0435a89ab9eea9a83e5465156053128a.gif" alt="" />
      </div>
    </div>
  );
};

export default Register;