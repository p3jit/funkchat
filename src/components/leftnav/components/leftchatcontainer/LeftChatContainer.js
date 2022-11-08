import React from 'react'
import LeftSingleChat from './leftsinglechat/LeftSingleChat'

function LeftChatContainer() {
  return (
    <div className='h-96 mx-5 mt-2 mb-6 gap-3 flex flex-col overflow-y-auto scrollbar-thumb-zinc-700 scrollbar-track-zinc-400 scrollbar-thin scroll'>
        <LeftSingleChat name={"Kyle Simpsons"}/>
        <LeftSingleChat name={"Jhonny Sins"}/>
        <LeftSingleChat name={"Amir Khan"}/>
        <LeftSingleChat name={"Salman Khan"}/>
        <LeftSingleChat name={"Salman Khan"}/>
        <LeftSingleChat name={"Salman Khan"}/>
        <LeftSingleChat name={"Salman Khan"}/>
        <LeftSingleChat name={"Salman Khan"}/>
    </div>
  )
}

export default LeftChatContainer