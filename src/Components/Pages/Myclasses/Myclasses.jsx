import React from 'react';
import useClasses from '../../../Hooks/useClasses';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Myclasses = () => {
    const [classes, refetch] = useClasses();
    const total = classes.reduce((sum, item) => item.price + sum, 0);

    const handleClassDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-school-server-nahid-139.vercel.app/class/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


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
                                        <button onClick={() => handleClassDelete(item)}  className="btn btn-ghost btn-xs bg-slate-600 text-white hover:bg-slate-500"><FaTrashAlt></FaTrashAlt></button>
                                    </th>
                                    
                                </tr>)
                        }
                    </tbody>
                </table>
                
                <div className='mb-10 mt-6 flex justify-between'>
                <h1 className='font-bold'>Total Class Selected {classes.length}</h1>
                <h1 className='font-bold'>Total Price :{total}$</h1>
                <Link to= '/dashboard/payment'><button className="btn btn-ghost btn-xs bg-slate-600 text-white hover:bg-slate-500 px-10 ">Pay Now</button></Link>
            </div>
            </div>
        </div>
    );
};

export default Myclasses;