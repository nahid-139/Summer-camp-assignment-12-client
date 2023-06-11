import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {app} from "../../Firebase/firebase.config";

export const AuthContext = createContext();
export const auth= getAuth(app)

const UseContext = ({ children}) => {
  const [loader,setLoader]=useState(true)
  const[user,setUser]=useState(null)
  const googleProvider = new GoogleAuthProvider()

// =========== create user ============
const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password)
}
// ========= update profile ============
const updateName=(name,photo)=>{
  setLoader(true)
  return updateProfile(auth.currentUser,{
    displayName: name,
    photoURL: photo
  })
}
// ======== sign in  ===================
const signIn =(email,password)=>{
  setLoader(true)
 return signInWithEmailAndPassword(auth,email,password)
}
// ======== Log out ====================
const logOut = () => {
  setLoader(true)
  localStorage.removeItem('product_Db')
  return signOut(auth)
}
// =========== googleSign in=============
const signInWithGoogle = () => {
  setLoader(true)
  return signInWithPopup(auth, googleProvider)
}
// =========== reset password =============
const passwordReset = email => {
  setLoader(true)
  return sendPasswordResetEmail(auth, email)
}


// =========== onAuthStateChange ========
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,currentUser=>{
  setUser(currentUser)
  setLoader(false)
 })
 return ()=>{
  unsubscribe()
 }
},[])

  const authInfo = {
    user,loader,createUser,updateProfile,updateName,signIn,logOut,passwordReset,signInWithGoogle
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UseContext;
