import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../Context/UseContext";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { createUser, updateName, signInWithGoogle } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"
  
  
  

  // handleSubmit 
  const handleRegisetSubmit = (data) => {
    
    createUser(data.email, data.password)

      .then((result) => {
        const users = result.user;
        console.log(users);
        updateName(data.name, data.photo)
          .then(() => {
            saveUser(data.name, data.email, data.role, data.photo)
            navigate(from, { replace: true });
            Swal.fire(
              'Good job!',
              'You clicked the button!',
              'success'
            );
          })

          .catch((error) => console.log(error));
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        );
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(data.email);
      });
  };


  // handlegoogle
  const handleGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const users = result.user
        fetch(`https://summer-school-server-nahid-139.vercel.app/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            name: users.displayName, email: users.email, role: "user"
          })
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            Swal.fire(
              'Good job!',
              'You clicked the button!',
              'success'
            );
            navigate(from, { replace: true });
          })

      })
      .catch(error => console.log(error))
  }
  // saveUser data 
  const saveUser = (name, email, role, photo) => {
    const user = { name, email, role, photo }
    fetch(`https://summer-school-server-nahid-139.vercel.app/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

      })
  }


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <div className="lg:flex container mx-auto mt-14">
      <Helmet>
                <title>LinGo | Register</title>
            </Helmet>
      <div className="mt-6">
        <img src="" alt="" />
      </div>
      <div className="lg:w-2/6 bg-slate-300 p-10 rounded shadow-lg my-10 mx-auto">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
        </div>
        <form onSubmit={handleSubmit(handleRegisetSubmit)}>
          <div className="mb-1 sm:mb-2">
            <label
              htmlhtmlFor="name"
              className="inline-block mb-1 text-lg font-medium"
            >
              Name
            </label>
            <input
              placeholder="Your Name"
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && <p>{errors?.name.message}</p>}
          </div>
          <div className="mb-1 sm:mb-2">
            <label
              htmlhtmlFor="name"
              className="inline-block mb-1 text-lg font-medium"
            >
              Image URL
            </label>
            <input
              placeholder="Image URL"
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              {...register("photo", {
                required: true,
              })}
            />
            {errors.photo && <p>{errors?.photo.message}</p>}
          </div>
          <div className="mb-1 sm:mb-2">
            <label
              htmlhtmlFor="email"
              className="inline-block mb-1 text-lg font-medium"
            >
              E-mail
            </label>
            <input
              placeholder="Your Email Address"
              type="email"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              {...register("email", {
                required: true,
              })}
            />
          </div>

          <div className="mb-1">
            <select  {...register("role", {
              required: true,
            })}
              className="select select-bordered w-full text-white">
              <option value="user">User</option>
              <option value="instractor">Instractor</option>
            </select>
          </div>
          <div className="mb-1 sm:mb-2">
            <label
              htmlhtmlFor="password"
              className="inline-block text-lg mb-1 font-medium"
            >
              Password
            </label>
            <input
             
              placeholder="Enter Your Password"
              type={showPassword ? 'text' : 'password'}
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              {...register("password", {
                required: true,
                minLength: {
                  value: 8,
                  message: "password must be 6 Characters longer",
                },
                pattern: {
                  value:
                    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                  message:
                    "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors?.password.message}</p>
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

          <div className="mb-1 sm:mb-2">
            {passwordError && <div>{passwordError}</div>}
            <label
              htmlhtmlFor="confirmPassword"
              className="inline-block text-lg mb-1 font-medium"
            >
              Confirm Password
            </label>
            <input
            
              placeholder="Confirm Password"
              type={showConfirmPassword ? 'text' : 'password'}
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              {...register("confirmPassword", {
                required: true,
                minLength: {
                  value: 6,
                  message: "password must be 6 Characters longer",
                }

              })}
            />
             

            <button type="button" onClick={toggleConfirmPasswordVisibility}>
            {showConfirmPassword ? 
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

          <div className="mt-4 mb-2 sm:mb-4">
            <button
              type="submit"
              className="inline-flex mt-4 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md uppercase  bg-blue-600 focus:shadow-outline focus:outline-none"
            >
              Sign Up
            </button>
          </div>
          <p className="text-xs text-black sm:text-sm">
            Already have an account?{" "}
            <Link className=" text-blue-500 font-medium underline" to="/login">
              {" "}
              Login
            </Link>
          </p>
        </form>
        <p className="px-3  font-medium text-lg text-center py-6 dark:text-gray-400">
          Login with social accounts
        </p>
        <div>
          <button
            onClick={handleGoogle}
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

export default Register;
