import React from 'react'
import { FiSend } from "react-icons/fi";

function RightInputContainer() {
  return (
    <div className='flex'>
        <input className='w-full my-5 ml-4 outline-none rounded-md text-black px-4'/>
        <div className='flex'>
            <button className='p-4 outline outline-1 m-3 rounded-full hover:bg-zinc-700'><FiSend className='text-xl'/></button>
        </div>
    </div>
  )
}

export default RightInputContainer