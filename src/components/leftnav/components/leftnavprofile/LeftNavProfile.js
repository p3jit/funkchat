import React from 'react'
import { useState } from 'react'

function LeftNavProfile() {
    const [loggedIn,setLoggedIn] = useState(false);
    return (
        <div className='flex flex-col w-full py-2 px-4 gap-2'>
            <img className="w-16 self-center pt-1" src={`./icons/user.png`} alt="funk-user"></img>
            <h2 className='self-center'>Prithijit Das</h2>
            {loggedIn ? <button className='text-sm bg-zinc-700 rounded p-2'>Login</button> : <button className='text-sm bg-zinc-700 rounded p-2'>Logout</button>}
        </div>
    )
}

export default LeftNavProfile