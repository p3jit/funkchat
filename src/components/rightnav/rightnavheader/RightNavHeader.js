import React, { useContext } from 'react'
import { BsThreeDots } from "react-icons/bs";
import { ChatContext } from '../../../context/ChatContext';

function RightNavHeader() {
  const {data} = useContext(ChatContext);
  return (
    <div className='flex justify-between h-16 px-5 bg-zinc-600 items-center'>
        <h1 className='text-lg'>{data.user.displayName || "TEST"}</h1>
        <div className='flex items-center gap-2'>
            <BsThreeDots className='text-2xl'/>
        </div>
    </div>
  )
}

export default RightNavHeader