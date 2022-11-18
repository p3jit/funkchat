import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

function PrivateRoute() {
    const {currentUser} = useContext(AuthContext);
    return (
        currentUser.displayName ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoute