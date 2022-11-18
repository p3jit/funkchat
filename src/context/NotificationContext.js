import React, { createContext, useState } from 'react'

export const NotificationContext  = createContext();

function NotificationContextProvider({children}) {
    const [error,setError] = useState("");
    const [success,setSuccess] = useState("");

    return (
        <NotificationContext.Provider value={{error,setError,success,setSuccess}}>{children}</NotificationContext.Provider>
    )
}

export default NotificationContextProvider