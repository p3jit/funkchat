import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { ChatContext } from '../../../context/ChatContext'
import { db } from '../../../firebase';
import IncomingChat from '../incomingchat/IncomingChat'
import OutgoingChat from '../outgoingchat/OutgoingChat'

function RightChatContainer() {
  const {data} = useContext(ChatContext);
  const [messages,setMessages] = useState([]);
  const {currentUser} = useContext(AuthContext);
  const messageContainerRef = useRef();

  useEffect(()=>{
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    }
  },[data.chatId]);

  useEffect(()=> {
    if(messageContainerRef) {
      const offsetBottom = messageContainerRef.current.offsetTop + messageContainerRef.current.offsetHeight;
      messageContainerRef.current.scrollTo({ top: offsetBottom + 10000000000000 , behaviour: "smooth" });
      // messageContainerRef.current.scrollIntoView();
    }
  },[messages]);

  // console.log(messages[0]);
  // console.log(typeof messages);
  // Object.entries(messages)?.forEach((item)=>{
  //   console.log(item[1]);
  // })
  return (
    <div className='p-5 overflow-y-auto flex flex-col gap-5 h-[610px] scrollbar-thumb-zinc-700 scrollbar-track-zinc-400 scrollbar-thin scroll' ref={messageContainerRef}>
        { data.chatId && Object.entries(messages)?.map((currMsg) => {
          if(currMsg[1].senderId === currentUser.uid) {
            return <OutgoingChat msg={currMsg[1]} key={currMsg[0]}/>
          }
          else {
            return <IncomingChat msg={currMsg[1]} key={currMsg[0]}/>
          }
        })}
    </div>
  )
}

export default RightChatContainer