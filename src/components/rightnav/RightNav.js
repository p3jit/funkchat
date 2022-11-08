import React from 'react'
import RightChatContainer from './rightchatcontainer/RightChatContainer'
import RightInputContainer from './rightinputcontainer/RightInputContainer'
import RightNavHeader from './rightnavheader/RightNavHeader'

function RightNav() {
  return (
    <div className='basis-8/12 bg-zinc-500 flex flex-col justify-between'>
      <RightNavHeader/>
      <RightChatContainer/>
      <RightInputContainer/>
    </div>
  )
}

export default RightNav