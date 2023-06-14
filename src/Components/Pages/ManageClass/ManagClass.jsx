import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';
import { FaEdit } from 'react-icons/fa';


const ManagClass = () => {
 
    const [classes ,setClasses] =useState([]);
    useEffect(()=>{
        fetch('https://summer-school-server-nahid-139.vercel.app/allData')
        .then(res => res.json())
        .then(data =>{
            setClasses(data)})
    },[])
    // console.log(classes);

    


    return (
        <div className=' pt-20 pb-20'>
             <Helmet>
                <title>LinGo | Manage Classes</title>
            </Helmet>

            <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead>
            <tr className='text-white bg-gray-500'>
              <th>#</th>
              <th>Class Image</th>
              <th className='text-center'>Class Name</th>
              <th>Price</th>
              <th>Avialable Seats</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                classes.map((item,i) =>
                <tr key={item._id}>
                    <th>
                    {i + 1}
                    </th>
                     <th scope="row" className="">
                    <img className='w-20' src={item.image_url} alt="" />
                </th>
                <td className="px-6 py-4 text-xl font-bold text-center">
                    {item.name}
                </td>
                <td className="px-6 py-4">
                    {item.price}$
                </td>
                <td className="px-6 py-4 text-center">
                    {item.availableSeats}
                </td>
                <td>
                   <button className=" bg-slate-600 rounded px-4 py-2 text-white hover:bg-slate-400"><FaEdit></FaEdit></button></td>

                </tr>)
            }
            </tbody>
            </table>
           
            </div>
        </div>
    );
};

export default ManagClass;