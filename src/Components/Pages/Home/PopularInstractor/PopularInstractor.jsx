import React, { useEffect, useState } from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PopularInstractor = () => {

    const [instractors ,setInstractors] =useState([]);
    useEffect(()=>{
        fetch('https://summer-school-server-nahid-139.vercel.app/allData')
        .then(res => res.json())
        .then(data =>{
            setInstractors(data.filter(item =>item.category === 'popular'))})
    },[])
    console.log(instractors);
    return (
       <div className='text-center'>
        <h1 className='text-center font-bold text-4xl underline mt-20 mb-8'>Our Popular Instructors</h1>
         <div className='mt-20 md:grid grid-cols-3 gap-6 items-end justify-items-center '>
            {
                instractors.map(item =><div
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
        <Link to ="/instractors"><button className='bg-slate-400 px-4 py-2 rounded hover:bg-slate-300 text-center mt-10'>Show All Classes</button></Link>
       </div>
    );
};

export default PopularInstractor;