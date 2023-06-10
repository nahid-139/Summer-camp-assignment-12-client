import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';
import LoadClasses from './LoadClasses';

const Classes = () => {
 
    const [classes ,setClasses] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allData')
        .then(res => res.json())
        .then(data =>{
            setClasses(data)})
    },[])
    // console.log(classes);

    


    return (
        <div>
             <Helmet>
                <title>LinGo | Classes</title>
            </Helmet>

            <h1 className='text-center font-bold text-2xl mt-10 mb-4'>Hi Welcome Our classes.</h1>

            <div className='grid grid-cols-2 text-center'>
            {
                classes.map(item =>
                <LoadClasses
                key={item._id}
               
                item={item}
                
                >
                </LoadClasses>)
            }
            </div>
        </div>
    );
};

export default Classes;