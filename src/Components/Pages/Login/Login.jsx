import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UseContext";
import Swal from "sweetalert2";

const Login = () => {

  const { signIn, signInWithGoogle,} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  
  const handleLoginSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const users = result.user;
        console.log(users);
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
        
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  // goole sign in
  const googleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  

  return (
    <div className="lg:flex justify-center container mx-auto">
        <div className="mt-6">
            <img src='' alt="" />
        </div>
      <div className="lg:w-2/6  bg-gray-100 p-10 rounded shadow-lg my-10 mx-auto">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm  text-gray-900">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="email"
              className="inline-block mb-1 text-lg font-medium"
            >
              E-mail
            </label>
            <input
              placeholder="Your Email Address"
              type="email"
              onBlur={(event) => setUserEmail(event.target.value)}
              {...register("email", { required: "Email Address is required" })}
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            {errors.email && (
              <p className="text-red-400">{errors.email?.message}</p>
            )}
          </div>
          <div className="mb-1 sm:mb-2">
            <label
              htmlFor="password"
              className="inline-block text-lg mb-1 font-medium"
            >
              Password
            </label>
            <input
              placeholder="Enter Your Password"
              type={showPassword ? 'text' : 'password'}
              {...register("password", {
                required: "password is Required",
                minLength: {
                  value: 6,
                  message: "password must be 6 Characters longer",
                },
              })}
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
            />
            {errors.password && (
              <p className="text-red-400">{errors.password?.message}</p>
            )}
            <button type="button" onClick={togglePasswordVisibility}>
              {showPassword ? 
              <div className="flex gap-2">
                <p><FaEyeSlash></FaEyeSlash></p>
              <p className="text-sm">Hide Password</p>
              </div>
               :<div className="flex gap-2">
                <FaEye></FaEye>
                <p className="text-sm">Show Password</p>
                </div>}
            </button>
          </div>
          <div>
            <button
              className="mt-0 pt-0 hover:underline"
            >
              Forgot Password ?
            </button>
          </div>
          <div className="mt-4 mb-2 sm:mb-4">
            <button
              type="submit"
              className="inline-flex mt-4 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md uppercase  bg-blue-600 focus:shadow-outline focus:outline-none"
            >
              Login
            </button>
          </div>
          <p className="text-xs text-black sm:text-sm">
            New to Doctors Portal?{" "}
            <Link
              className=" text-blue-500 font-medium underline"
              to="/signup"
            >
              Create new account
            </Link>
          </p>
        </form>
        <p className="px-3  font-medium text-lg text-center py-6 dark:text-gray-400">
          Login with social accounts
        </p>
        <div>
          <button
           onClick={googleSignIn}
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
          >
            <span className="text-2xl text-white ">
              <FaGoogle></FaGoogle>
            </span>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
