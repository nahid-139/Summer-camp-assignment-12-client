import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PopularClasses = () => {

    const [classes, setClasses] = useState([]);
    useEffect(() => {
        fetch('https://summer-school-server-nahid-139.vercel.app/allData')
            .then(res => res.json())
            .then(data => {
                setClasses(data.filter(item => item.category === 'popular'))
            })
    }, [])
    console.log(classes);
    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold text-center mt-10 mb-20 underline'>Our Popular Classes</h1>
            <div className='md:grid grid-cols-3 gap-6 items-end justify-items-center'>
            {
                classes.map(item => <div 
                    key={item._id}

                >
                    <div className="card w-96 bg-slate-300 shadow-xl text-black">
                        <figure><img src={item.image_url} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-start">
                                {item.name}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p className='text-slate-500 text-start'>{item.description}</p>
                            <div className="card-actions justify-start mt-4">
                                <div className="badge badge-outline bg-slate-300 text-black px-4 py-4 text-start">Price {item.price} $</div>
                                <div className="badge badge-outline bg-slate-300 text-black px-4 py-4">Avialable Seats {item.availableSeats}</div>
                            </div>
                        </div>
                    </div>


                </div>)
            }

            
        </div>
        <Link to="/classes"><button className='bg-slate-400 px-4 py-2 rounded hover:bg-slate-300 text-center mt-10'>Show All Classes</button></Link>
        </div>
    );
};

export default PopularClasses;