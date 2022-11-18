import React, { useContext } from 'react'
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { ChatContext } from '../../../context/ChatContext';

function RightNavHeader() {
  const {data} = useContext(ChatContext);
  return (
    <div className='flex justify-between h-16 px-5 bg-zinc-600 items-center'>
        <h1 className='text-lg'>{data.user.displayName || "TEST"}</h1>
        <div className='flex items-center gap-2'>
            <HiEllipsisHorizontal className='text-3xl'/>
        </div>
    </div>
  )
}

export default RightNavHeader