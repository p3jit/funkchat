import React, { useContext } from 'react';
import { ChatContext } from '../../../../../context/ChatContext';

function LeftSingleChat({value , lastMessage}) {
  const {dispatch} = useContext(ChatContext);

  const handleClick = () => {
    dispatch({type:"CHANGE_USER",payload:value});
  }

  return (
    <div className='flex hover:bg-zinc-700 p-3 rounded-lg cursor-pointer' onClick={handleClick}>
      <img src={ value.photoURL || `./icons/user.png`} loading="lazy" alt="friends-img" className='w-12 h-12 object-cover items-center rounded-full'/>
      <div className='pl-4 pt-2 flex flex-col justify-center relative bottom-2'>
        <h1 className='text-md'>{value.displayName}</h1>
        <h1 className='truncate text-ellipsis w-40 text-sm text-zinc-300'>{lastMessage}</h1>
      </div>
    </div>
  )
}

export default LeftSingleChat