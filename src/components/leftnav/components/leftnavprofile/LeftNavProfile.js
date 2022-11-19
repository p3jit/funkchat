import React, { useContext } from 'react'
import { AuthContext } from '../../../../context/AuthContext'

function LeftNavProfile() {
    const {currentUser}  = useContext(AuthContext);
    return (
        <div className='flex flex-col w-full py-2 px-4 gap-2'>
            <img className="w-24 h-24 self-center pt-1 rounded-full object-cover" loading='lazy' src={currentUser.photoURL || `./icons/user.png`} alt="funk-user"></img>
            <h2 className='self-center'>{currentUser.displayName}</h2>
            {<button className='text-sm bg-zinc-700 rounded p-2'>{currentUser.displayName ? "Logout" : "Login"}</button>}
        </div>
    )
}

export default LeftNavProfile