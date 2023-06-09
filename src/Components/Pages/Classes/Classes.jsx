import React, { useEffect, useState } from 'react';

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

            <div>
            {
                classes.map(item =><div
                key={item._id}
                
                >
                     <h1>name is{item.name}</h1>


                </div>)
            }
            </div>


        </div>
    );
};

export default Classes;