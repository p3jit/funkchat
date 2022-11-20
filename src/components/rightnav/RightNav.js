import React, { useContext } from 'react'
import { ChatContext } from '../../context/ChatContext'
import RightChatContainer from './rightchatcontainer/RightChatContainer'
import RightInputContainer from './rightinputcontainer/RightInputContainer'
import RightNavHeader from './rightnavheader/RightNavHeader'

function RightNav() {
  const {data} = useContext(ChatContext);
  return (
    <div className='basis-8/12 h-auto bg-zinc-500 flex flex-col justify-between'>
      { data.user.uid && 
      <div className='flex flex-col justify-between'>
        <RightNavHeader/>
        <RightChatContainer/>
        <RightInputContainer/>
      </div>}
      {
        !data.user.uid && 
        <div className='flex justify-center items-center h-full bg-zinc-500'>
          <h1 className='p-3 bg-zinc-600 rounded-lg'>Select a chat to see conversations</h1>
        </div>
      }
    </div>
  )
}

export default RightNav