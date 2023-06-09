import {
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  import { useContext } from "react";
  import { FaGoogle } from "react-icons/fa";
  import { Link, useLocation, useNavigate } from "react-router-dom";

// import UseTitle from "../UseTitle/UseTitle";
import { AuthContext, auth } from "../../Context/UseContext";
import Swal from "sweetalert2";
  const Login = () => {
//    UseTitle('Log In')
    const { signIn } = useContext(AuthContext);
 
    const googleProvider = new GoogleAuthProvider();
    const navigate=useNavigate()
    const loaction= useLocation()
  
  

  const froms= loaction.state?.from?.pathname || '/';
  
  

    const handleSubmit = (event) => {
      event.preventDefault();
      const from = event.target;
      const email = from.email.value;
      const password = from.password.value;
      console.log(email, password);
      signIn(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          from.reset()
          navigate(froms,{replace:true})
          Swal.fire(
            'Good job!',
            'You are LogIn !',
            'success'
          )
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    const signInGoogle = () => {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          console.log(user);
          Swal.fire(
            'Good job!',
            'You are LogIn !',
            'success'
          )
        })
        .catch((error) => {
          console.error(error);
        });
    };

  
    return (
      <div className="lg:flex sm:flex-col py-20 lg:flex-row justify-evenly">
        <div className="lg:w-1/2 max-w-md p-8 space-y-3 rounded-xl shadow-xl  dark:text-gray-900">
          <h1 className="text-2xl font-bold text-center py-2">Login</h1>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label for="username" className="block text-xl dark:text-gray-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full px-4 text-lg py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                required
              />
            </div>
            <div className="space-y-1 text-sm">
              <label for="password" className="block text-xl dark:text-gray-400">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full text-lg px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400"
                required
              />
              <div className="flex justify-end text-lg dark:text-gray-400">
                <button>Forgot Password?</button>
              </div>
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-white bg-slate-500">
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
            <button
              onClick={signInGoogle}
              className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1  text-white   bg-slate-600 focus:ring-violet-400"
            >
              <span className=" text-2xl">
                <FaGoogle></FaGoogle>
              </span>
              <p>Login with Google</p>
            </button>
          </div>
          <p className="text-lg text-center sm:px-6 dark:text-gray-400">
            Don't have an account?
            <Link to="/register" className="underline dark:text-gray-900">
              Register
            </Link>
          </p>
        </div>
        <div className="">
        <img src='https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif'alt="" />
        </div>
      </div>
    );
  };
  
  export default Login;
  