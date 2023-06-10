import React, { useContext } from 'react';
import { useQuery} from '@tanstack/react-query'
import { AuthContext } from '../Components/Context/UseContext';

const useClasses = () => {
    const {user} = useContext(AuthContext)
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () =>{
        const response =await fetch(`http://localhost:5000/class?email=${user?.email}`
            )
            return response.json();
        }
    })
    return [classes, refetch]
};

export default useClasses;