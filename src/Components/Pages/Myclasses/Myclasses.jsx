import React from 'react';
import useClasses from '../../../Hooks/useClasses';
import { FaTrashAlt } from 'react-icons/fa';

const Myclasses = () => {
    const [classes, refetch] = useClasses();
    return (
        <div>
            <h1 className='text-center font-bold text-3xl'>Hi Welcome to Dashboard</h1>



            <div className="overflow-x-auto pt-20">
                <table className="table">
                    {/* head */}
                    <thead className= 'text-black'>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Avialable Seats</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody className='text-black'>




                        {
                            classes.map((item,index) =>
                                <tr
                                    key={item._id}

                                >
                                   <td>
                                    {index + 1}
                                </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold">
                                                <h1>{item.name}</h1>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center'>
                                        {item.availableSeats}
                                    </td>
                                    <td>{item.price} $</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs bg-slate-600 text-white hover:bg-slate-500"><FaTrashAlt></FaTrashAlt></button>
                                    </th>
                                    <th>
                                        <button className="btn btn-ghost btn-xs bg-slate-600 text-white hover:bg-slate-500">Pay Now</button>
                                    </th>
                                    



                                </tr>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Myclasses;