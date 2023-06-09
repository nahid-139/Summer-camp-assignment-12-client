import React, { useEffect, useState } from 'react';

const Instractors = () => {

    const [instractors ,setInstractors] =useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>{
            setInstractors(data)})
    },[])
    console.log(instractors);
    return (
        <div>
            <h1 className='text-center font-bold text-3xl mt-10 mb-4'> Hi I am your Instractor.</h1>

            <div>
            {
                instractors.map(item =><div
                key={item._id}
                
                >
                     <h1>name is{item.instructor.name}</h1>


                </div>)
            }
            </div>

        </div>
    );
};

export default Instractors;