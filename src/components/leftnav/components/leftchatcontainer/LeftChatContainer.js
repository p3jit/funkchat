import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../../context/AuthContext';
import { db } from '../../../../firebase';
import LeftSingleChat from './leftsinglechat/LeftSingleChat'

function LeftChatContainer() {
  const [chats,setChats] = useState([]);
  const {currentUser} = useContext(AuthContext);

  useEffect(()=>{
    const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
      setChats(doc.data());
    });

    return () => {
      unsub();
    }
  },[currentUser.uid]);
  return (
    <div className=' max-h-[410px] mx-5 mt-2 mb-6 gap-3 flex flex-col overflow-y-auto scrollbar-thumb-zinc-700 scrollbar-track-zinc-400 scrollbar-thin scroll'>
        {/* <LeftSingleChat name={"Kyle Simpsons"}/>
        <LeftSingleChat name={"Jhonny Sins"}/>
        <LeftSingleChat name={"Salman Khan"}/> */}
        { Object.entries(chats)?.sort((a,b)=>{return b[1].date-a[1].date}).map((chat)=> <LeftSingleChat key={chat[0]} value = {chat[1].userInfo} lastMessage={chat[1].lastMessage ? chat[1].lastMessage.text : null}/>)}
    </div>
  )
}

export default LeftChatContainer