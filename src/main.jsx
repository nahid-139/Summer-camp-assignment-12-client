import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import UseContext from './Components/Context/UseContext.jsx';
import Register from './Components/Pages/Register/Register.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Register></Register>
      }
     
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseContext>
    <RouterProvider router={router} />
    </UseContext>
  </React.StrictMode>
);