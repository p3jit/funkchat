import React from 'react'

function LeftSingleChat({name}) {
  return (
    <div className='flex'>
      <img src={`./icons/user.png`} alt="friends-img" className='w-9 object-contain items-center'/>
      <div className='pl-2 pt-2'>
        <h1 className='text-sm'>{name}</h1>
        <h1 className='truncate text-ellipsis w-40'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasssssssssssssssssssa</h1>
      </div>
    </div>
  )
}

export default LeftSingleChat