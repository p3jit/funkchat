import React from 'react'
import IncomingChat from '../incomingchat/IncomingChat'
import OutgoingChat from '../outgoingchat/OutgoingChat'

function RightChatContainer() {
  return (
    <div className='flex-grow p-5 overflow-y-auto flex flex-col gap-5'>
        <IncomingChat/>
        <OutgoingChat/>
    </div>
  )
}

export default RightChatContainer