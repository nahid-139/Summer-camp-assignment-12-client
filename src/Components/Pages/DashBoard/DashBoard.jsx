import React from 'react';
import { Helmet } from 'react-helmet-async';
import useClasses from '../../../Hooks/useClasses';

const DashBoard = () => {
    const [classes, refetch] =useClasses();
    return (
       
        <div>
             <Helmet>
                <title>LinGo | Dashboard</title>
            </Helmet>

            <h1 className='text-center font-bold text-3xl'>Hi Welcome to Dashboard</h1>

            {
                classes.map(item =>
                <div
                key={item._id}
            
                >
                    <h1>helo {item.name}</h1>
                </div>)
            }
        </div>
    );
};

export default DashBoard;