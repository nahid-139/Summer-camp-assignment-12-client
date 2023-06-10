import React, { useEffect, useState } from 'react';

const Instractors = () => {

    const [instractors ,setInstractors] =useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/allData")
        .then(res => res.json())
        .then(data =>{
            setInstractors(data)})
    },[])
    console.log(instractors);
    return (
        <div>
            <h1 className='text-center font-bold text-3xl mt-10 mb-4'> Hi I am your Instractor.</h1>

            <div className ='grid grid-cols-2 mt-10 text-center mx-20'>
            {
                instractors.map(item =><div className='border border-red-700 mx-6 my-6'
                key={item._id}
                
                >   
                     <img src="" alt="" />
                     <h1 className='mt-6'>name is{item.instructor.name}</h1>
                     <h1 className='mt-2'>{item.instructor.email}</h1>
            


                </div>)
            }
            </div>

        </div>
    );
};

export default Instractors;