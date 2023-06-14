import  { useContext } from 'react';
import { AuthContext } from '../../Context/UseContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useClasses from '../../../Hooks/useClasses';


const LoadClasses = ({ item }) => {
   
    const { name, availableSeats, price, _id,image_url ,description } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useClasses();
    const navigate = useNavigate();


    const handleAddToMyClass = item => {
        console.log(item);
        if (user && user.email) {
            const classItem = { classItemId: _id, name, price, availableSeats, email: user.email }
            fetch('https://summer-school-server-nahid-139.vercel.app/class', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
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
        <div>
            {availableSeats === 0 ?(<><div  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-red-800 dark:bg-red-600 dark:hover:bg-red-400">
   <img className='object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-l-lg' src={image_url} alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">{description}</p>
        <p>Price: {price} $</p>
        <p>Avialable Seats : {availableSeats}</p>
        <button onClick={() => handleAddToMyClass(item)}
                    disabled={availableSeats === 0}
                    className='bg-slate-900 text-white px-6 py-2 mt-4'>
                    Select Course</button>
    </div>
</div></>):(<><div  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
   <img className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src={image_url} alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <p className='text-slate-100'>Price: {price} $</p>
        <p className='text-slate-100'>Avialable Seats : {availableSeats}</p>
        <button onClick={() => handleAddToMyClass(item)}
                    disabled={availableSeats === 0 || user?.role === "admin" || user?.role === "instractor"}
                    className='bg-slate-900 text-white px-6 py-2 mt-4'>
                    Select Course</button>
    </div>
</div></>)}
            


        </div>
    );
};

export default LoadClasses;





