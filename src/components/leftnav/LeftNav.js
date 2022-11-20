import React from 'react'
import LeftChatContainer from './components/leftchatcontainer/LeftChatContainer'
import LeftNavHeader from './components/leftnavheader/LeftNavHeader'
import LeftNavProfile from './components/leftnavprofile/LeftNavProfile'
import LeftSearchBar from './components/leftsearchbar/LeftSearchBar'

function LeftNav() {
  return (
    <div className='basis-4/12 min-w-[300px]'>
        <div className='flex flex-col h-full'>
            <LeftNavHeader/>
            <div className='bg-zinc-600 h-full'>
              <LeftNavProfile/>
              <LeftSearchBar/>
              <hr className=" bg-gray-200 border-0 dark:bg-zinc-700 h-px mx-3 my-3"/>
              <LeftChatContainer/>
            </div>
        </div>
    </div>
  )
}

export default LeftNav