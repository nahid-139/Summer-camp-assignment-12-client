import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UseContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useClasses from '../../../Hooks/useClasses';

const LoadClasses = ({ item }) => {
    const { name, availableSeats, price, _id } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useClasses();
    const navigate = useNavigate();


    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { classItemId: _id, name, price, availableSeats, email: user.email }
            fetch('http://localhost:5000/class', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();  //  refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your Class is Selected.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Your not Log In',
                text: 'Please Log In frist.',
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (

        <div className=' border border-lime-200 mx-6 my-6'>
            {availableSeats === 0 ? (<div className='bg-rose-800'>
                <h1>name is{name}</h1>
                <h1>Aviaable Seats {availableSeats}</h1>
                <button onClick={() => handleAddToCart(item)}
                    disabled={availableSeats === 0}
                    className='bg-slate-700 text-white px-6 py-2 mt-4'>
                    Select Course</button>
            </div>) : (<div className=''>
                <h1>name is{name}</h1>
                <h1>Aviaable Seats {availableSeats}</h1>
                <button onClick={() => handleAddToCart(item)}
                    disabled={availableSeats === 0}
                    className='bg-slate-700 text-white px-6 py-2 mt-4'>
                    Select Course</button>
            </div>)}
        </div>
    );
};

export default LoadClasses;