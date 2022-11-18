import React, { useContext } from 'react'
import { ChatContext } from '../../../context/ChatContext'

function IncomingChat({msg}) {
  const {data} = useContext(ChatContext);
  return (
    <div className='self-start'>
      <div className='flex gap-5'>
        <img src={ data.user.photoURL || `./icons/user.png`} loading="lazy" alt="chat-img" className='w-12 h-12 object-cover rounded-full'/>
        <div className='flex flex-col gap-5'>
          <div className='p-4 bg-zinc-700 w-fit rounded-lg self-start'>{msg.text}</div>
          <div className=' flex justify-center hover:cursor-pointer'>
            {msg.img && <img src={ msg.img } loading="lazy" alt="chat-img" className='w-52 h-40 object-cover p-2 bg-zinc-700'/>}
          </div>
        </div>

      </div>
    </div>
  )
}

export default IncomingChat