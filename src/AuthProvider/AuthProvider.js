import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState({})

    // create user by  email  and password 
    const createUser = (email,password) => {
     return createUserWithEmailAndPassword(auth,email,password)
    }
    
    // update user for find the user name 
    const UpdateUser = () => {
        return updateProfile(auth.currentUser)
    }
    // login user with email and password 
    const LoginUser = (email,password) => {
       return signInWithEmailAndPassword(auth,email,password)
    }

    // signIn with google 
    const GoogleLogin = (provider) => {
       return signInWithPopup(auth,provider)
    } 

    // signOut user 
    const LogOutUser  = () => {
        return signOut(auth)
    }



    const info = 
        {
            displayName:'ashrafull'
        }
    
        const authInfo = {
            info,
            user,
            createUser,
            LoginUser,
            GoogleLogin,
            LogOutUser,
            UpdateUser
        }

    return (
      <AuthContext.Provider value={authInfo} > 
        {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;