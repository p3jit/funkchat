import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

function OutgoingChat({msg}) {
  const {currentUser} = useContext(AuthContext);

  return (
    <div className='self-end'>
      <div className='flex gap-5'>
        <div className='flex flex-col gap-2'>
        {msg.text && <div className='p-3 bg-zinc-700 w-fit rounded-lg self-end'>{msg.text}</div>}
          <div className=' flex justify-center hover:cursor-pointer'>
            {msg.img && <img src={ msg.img } loading="lazy" alt="chat-img" className='max-w-[400px] max-h-[300px] object-cover p-2 bg-sky-800'/>}
          </div>
          <div className=' flex justify-center hover:cursor-pointer'>
            {msg.video && <video width={300} height={200} controls src={ msg.video } loading="lazy" alt="chat-video" className='p-2 bg-sky-800'/>}
          </div>
        </div>
        <img src={ currentUser.photoURL || `./icons/user.png`} loading="lazy" alt="chat-img" className='w-12 h-12 object-cover rounded-full'/>
      </div>
    </div>
  )
}

export default OutgoingChat