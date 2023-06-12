import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaStar } from 'react-icons/fa';
import { AuthContext } from '../../Context/UseContext';


const InsMyClass = () => {

    const {user} =useContext(AuthContext)

    const [classes,setClasses] =useState([])
    const url =`http://localhost:5000/insclass?email=${user?.email}`
    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setClasses(data);
          });
      },[url]);
console.log(classes)




    return (
        <div className='m-10'>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Class Image
                </th>
                <th scope="col" className="px-6 py-3">
                   Class Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                   Avialable Seats
                </th>
            </tr>
        </thead>
        <tbody>
            {
                classes.map((classe =>(
                    <tr key={classe._id}className="text-black">
                      
                <th scope="row" className="">
                    <img className='w-20' src={classe.img} alt="" />
                </th>
                <td className="px-6 py-4 text-xl font-bold">
                    {classe.name}
                </td>
                <td className="px-6 py-4">
                    {classe.price}$
                </td>
                <td className="px-6 py-4 text-center">
                    {classe.avialable}
                </td>

                    </tr>
                ))

             )
            }
            </tbody>
            </table>
           </div>
        </div>
    );
};

export default InsMyClass;