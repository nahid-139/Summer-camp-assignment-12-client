import React, { createContext, useEffect, useState,} from 'react';
import { getAuth,createUserWithEmailAndPassword ,signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile,} from "firebase/auth";
import {app} from '../../Firebase/firebase.config';

export const AuthContext= createContext()
export const auth= getAuth(app)

const UseContext = ({children}) => {
    const [user,setuser]=useState(null)
    const [loader,setLoader]=useState(true)
    console.log(user)
  
const createUser=(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const signIn=(email,password)=>{
    setLoader(true)
     return signInWithEmailAndPassword(auth,email,password)
 }
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
setuser(currentUser)
setLoader(false)
})
return ()=>{
    unsubscribe()
}

},[])

const logOut=()=>{
  return signOut(auth)
}
const updateprofile=(name)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,
    })
}

    const authInfo ={user,loader,createUser,signIn,logOut,updateprofile}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;