import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Classes = () => {
   
    const [classes ,setClasses] =useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>{
            setClasses(data)})
    },[])
    console.log(classes);


    return (
        <div>
            <h1 className='text-center font-bold text-2xl mt-10 mb-4'>Hi Welcome Our classes.</h1>

            <div className='grid grid-cols-2 text-center'>
            {
                classes.map(item =><div className=' border border-lime-200 mx-6 my-6'
                key={item._id}
                
                >
                     <h1>name is{item.name}</h1>
                     <h1>Aviaable Seats {item.availableSeats}</h1>
                     <Link to='/'><button  disabled={item.availableSeats === 0} className='bg-slate-700 text-white px-6 py-2 mt-4'>Select Course</button></Link>


                </div>)
            }
            </div>
            

        </div>
    );
};

export default Classes;