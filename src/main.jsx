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
import { HelmetProvider } from 'react-helmet-async';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import DashBoard from './Layout/DashBoard/DashBoard.jsx';
import Myclasses from './Components/Pages/Myclasses/Myclasses.jsx'
import PrivateRoute from './Layout/PrivateRoute.jsx';
import AddClass from './Components/Pages/AddClass/AddClass.jsx';
import AllUsers from './Components/Pages/AllUsers/AllUsers.jsx';
import InsMyClass from './Components/Pages/InsMyClass/InsMyClass.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import ManagClass from './Components/Pages/ManageClass/ManagClass.jsx';

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
     
    ]
  },
  {
    path: '/dashboard',
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/dashboard/myclasses',
        element: <Myclasses></Myclasses>

      },
      {
        path: '/dashboard/addclasses',
        element: <AddClass></AddClass>

      },
      {
        path: '/dashboard/allusers',
        element: <AllUsers></AllUsers>

      },
      {
        path: '/dashboard/insmyclass',
        element: <InsMyClass></InsMyClass>

      },
      {
        path: '/dashboard/manageclass',
        element: <ManagClass></ManagClass>

      }
    ]
  },
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