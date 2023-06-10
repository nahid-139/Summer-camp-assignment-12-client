import React, { useEffect, useState } from 'react';

const PopularInstractor = () => {

    const [instractors ,setInstractors] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allData')
        .then(res => res.json())
        .then(data =>{
            setInstractors(data.filter(item =>item.category === 'popular'))})
    },[])
    console.log(instractors);
    return (
        <div className='mt-20'>
            {
                instractors.map(item =><div
                key={item._id}
                
                >
                     <h1>name is{item.instructor.name}</h1>


                </div>)
            }
        </div>
    );
};

export default PopularInstractor;