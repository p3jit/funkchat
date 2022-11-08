import React from 'react'
import LeftChatContainer from './components/leftchatcontainer/LeftChatContainer'
import LeftNavHeader from './components/leftnavheader/LeftNavHeader'
import LeftNavProfile from './components/leftnavprofile/LeftNavProfile'
import LeftSearchBar from './components/leftsearchbar/LeftSearchBar'

function LeftNav() {
  return (
    <div className='basis-5/12'>
        <div className='flex flex-col'>
            <LeftNavHeader/>
            <div className='bg-zinc-600'>
              <LeftNavProfile/>
              <LeftSearchBar/>
              <LeftChatContainer/>
            </div>
        </div>
    </div>
  )
}

export default LeftNav