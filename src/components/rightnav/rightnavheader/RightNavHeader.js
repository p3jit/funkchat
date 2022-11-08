import React from 'react'
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";

function RightNavHeader() {
  return (
    <div className='flex justify-between h-16 px-5 bg-zinc-600 items-center'>
        <h1 className='text-lg'>Amir Khan</h1>
        <div className='flex items-center gap-2'>
            <HiChatBubbleOvalLeftEllipsis className='text-2xl'/>
            <HiEllipsisHorizontal className='text-3xl'/>
        </div>

    </div>
  )
}

export default RightNavHeader