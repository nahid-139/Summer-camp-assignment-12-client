import React, { useContext } from 'react';
import { AuthContext } from '../Components/Context/UseContext';


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;