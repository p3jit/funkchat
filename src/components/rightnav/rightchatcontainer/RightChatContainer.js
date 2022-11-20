import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { ChatContext } from '../../../context/ChatContext'
import { db } from '../../../firebase';
import IncomingChat from '../incomingchat/IncomingChat'
import OutgoingChat from '../outgoingchat/OutgoingChat'

function RightChatContainer() {
  const {data , messages, setMessages} = useContext(ChatContext);
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
      messageContainerRef.current.scrollTo({ top: offsetBottom + 10000000000000 });
    }
  },[messages]);
  
  return (
    <div className='p-5 overflow-y-auto flex flex-col gap-5 scrollbar-thumb-zinc-700 scrollbar-track-zinc-400 scrollbar-thin scroll h-[720px]' ref={messageContainerRef}>
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