import React from 'react'
import LeftNav from '../components/leftnav/LeftNav'
import RightNav from '../components/rightnav/RightNav'

function ChatPage() {
  return (
    <div className='flex justify-center items-center h-screen w-screen p-10 '>
        <div className='bg-zinc-700 text-white flex w-full max-w-4xl min-w-[800px] min-h-full'>
            <LeftNav/>
            <RightNav/>
        </div>
    </div>
  )
}

export default ChatPage