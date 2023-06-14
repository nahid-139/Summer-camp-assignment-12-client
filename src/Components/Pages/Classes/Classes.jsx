import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet-async';
import LoadClasses from './LoadClasses';

const Classes = () => {
 
    const [classes ,setClasses] =useState([]);
    useEffect(()=>{
        fetch('https://summer-school-server-nahid-139.vercel.app/allData')
        .then(res => res.json())
        .then(data =>{
            setClasses(data)})
    },[])
    // console.log(classes);

    


    return (
        <div className='bg-blue-400 pt-20 pb-20'>
             <Helmet>
                <title>LinGo | Classes</title>
            </Helmet>

            <h1 className='text-center text-slate-900 font-bold text-4xl underline mb-20'> Our classes.</h1>

            <div className='grid grid-cols-2 gap-6 justify-items-center'>
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