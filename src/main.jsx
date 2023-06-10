import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './Components/Pages/Home/Home/Home.jsx';
import Login from './Components/Pages/Login/Login.jsx';
import UseContext from './Components/Context/UseContext.jsx';
import Register from './Components/Pages/Register/Register.jsx';
import Classes from './Components/Pages/Classes/Classes.jsx';
import Instractors from './Components/Pages/Instractors/Instractors.jsx';
import DashBoard from './Components/Pages/DashBoard/DashBoard.jsx';
import { HelmetProvider } from 'react-helmet-async';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
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
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/instractors',
        element: <Instractors></Instractors>
      },
     
      {
        path: '/dashboard',
        element:<DashBoard></DashBoard>
      },
     
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseContext>
      <HelmetProvider>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
       
      </HelmetProvider>
    </UseContext>
  </React.StrictMode>
);