import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import React, { useContext, useRef, useState } from 'react'
import {BiImageAdd} from 'react-icons/bi';
import { ChatContext } from '../../../context/ChatContext';
import { db, storage } from '../../../firebase';
import { v4 as uuid } from 'uuid'
import { AuthContext } from '../../../context/AuthContext';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

function RightInputContainer() {
  const [text,setText] = useState("");
  const [img,setImg] = useState(null);
  const imgRef = useRef();
  const textRef =useRef();

  const {data} = useContext(ChatContext);
  const {currentUser} = useContext(AuthContext);

  const handleImgClick = () => {
    imgRef.current.click();
  };

  const handleSend = async () => {
    textRef.current.value="";
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadSnapshot = await uploadBytes(storageRef,img);

      const downloadURL = await getDownloadURL(uploadSnapshot.ref);

      await updateDoc(doc(db,"chats",data.chatId) , {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
          img: downloadURL
        }),
      });
    }
    else { 
      await updateDoc(doc(db,"chats",data.chatId) , {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now()
        }),
      });
    }

    await updateDoc(doc(db,"userChats",currentUser.uid), {
      [data.chatId+".lastMessage"] : {
        text
      },
      [data.chatId + ".date"] : serverTimestamp()
    });

    await updateDoc(doc(db,"userChats",data.user.uid), {
      [data.chatId+".lastMessage"] : {
        text
      },
      [data.chatId + ".date"] : serverTimestamp()
    });

    setText("");
    setImg(null);
  };

  console.log()

  return (
    <div className='flex w-full justify-between mb-1'>

        <input className='outline-none rounded-md w-full text-black py-2 px-3 my-3 mx-4' onKeyUp={e=>{setText(e.target.value)}} ref={textRef}/>
        <div className='flex items-center gap-3 mr-5'>
            <input type="file" style={{display: 'none'}} ref={imgRef} onChange={e=>setImg(e.target.files[0])} accept=".png,.jpg,.jpeg"/>
            <button className='text-2xl flex relative' onClick={handleImgClick}>
              <BiImageAdd className='text-3xl'/>
            </button>
            <button className='px-5 py-2 bg-zinc-800 rounded-lg' onClick={handleSend}>Send</button>
        </div>
    </div>
  )
}

export default RightInputContainer