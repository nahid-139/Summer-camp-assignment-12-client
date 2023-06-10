import React, { useEffect, useState } from 'react';

const PopularClasses = () => {

    const [classes ,setClasses] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allData')
        .then(res => res.json())
        .then(data =>{
            // const popularClass= data.filter(item =>item.category === 'popular');
            setClasses(data.filter(item =>item.category === 'popular'))})
    },[])
    console.log(classes);
    return (
        <div>
            {
                classes.map(item =><div
                key={item._id}
                
                >
                     <h1>name is{item.name}</h1>


                </div>)
            }
        </div>
    );
};

export default PopularClasses;