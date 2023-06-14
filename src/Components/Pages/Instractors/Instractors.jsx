import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Instractors = () => {

    const [instractors ,setInstractors] =useState([]);
    useEffect(()=>{
        fetch("https://summer-school-server-nahid-139.vercel.app/allData")
        .then(res => res.json())
        .then(data =>{
            setInstractors(data)})
    },[])
    console.log(instractors);
    return (
        <div>
             <Helmet>
                <title>LinGo | Instractors</title>
            </Helmet>
            <h1 className='text-center font-bold text-3xl mt-10 mb-4'> Hi I am your Instractor.</h1>

            <div className ='grid grid-cols-2 mt-10 text-center mx-20'>
            {
                instractors.map(item =><div className=' mx-6 my-6'
                key={item._id}
                
                >   
                    <div className="card w-96 bg-slate-300 shadow-xl text-black">
                        <figure><img src={item.instructor.image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item.instructor.name}
                             
                            </h2>
                            <p className='text-slate-500 text-start'>{item.instructor.bio}</p>
                            <div className=" mt-4">
                                <div className=" bg-slate-300 text-black text-start "> <span className='font-bold '>Email: </span>{item.instructor.email}</div>
                            </div>
                            <div className='flex gap-4'>
                                <FaFacebook></FaFacebook>
                                <FaTwitter></FaTwitter>
                               <FaLinkedin></FaLinkedin>
                            </div>
                        </div>
                    </div>
            


                </div>)
            }
            </div>

        </div>
    );
};

export default Instractors;