import React, { createContext, useEffect, useState } from 'react';
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../firebase";

export const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [currentUser , setCurrentUser] = useState({});

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return unsub();
    },[currentUser]);

    return (
        <AuthContext.Provider value={{currentUser,setCurrentUser}}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider