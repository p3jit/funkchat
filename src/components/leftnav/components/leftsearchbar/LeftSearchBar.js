import React, { useContext, useState } from 'react';
import {db} from "../../../../firebase";
import {collection,where, query , getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc} from 'firebase/firestore';
import { AuthContext } from '../../../../context/AuthContext';

function LeftSearchBar() {
  const [searchKey,setSearchKey] = useState("");
  const [foundUser, setFoundUser] = useState({});
  const {currentUser} = useContext(AuthContext);

  const handleKeyDown = (e) => {
    setFoundUser({});
    if(searchKey === "" || searchKey === currentUser.displayName) return;
    e.code === "Enter" && handleSearch();
  }

  const handleSearch = async () => {
    const q = query(collection(db,"users"),where("displayName" , "==" , searchKey));
    try {
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => {
        setFoundUser(doc.data());
      })
    } catch(error) {
      console.log("No user found!");
    }
  }

  const handleSelect = async () => {
    const chatID = currentUser.uid > foundUser.uid ? currentUser.uid + foundUser.uid : foundUser.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db , "chats" , chatID));
      if(!res.exists()) {
        //For coversations
        await setDoc(doc(db,"chats",chatID) , { messages: [] });

        //For ongoing conversation list of userChats
        await updateDoc(doc(db,"userChats",currentUser.uid), {
          [chatID + ".userInfo"]: {
            uid: foundUser.uid,
            displayName: foundUser.displayName,
            photoURL: foundUser.photoURL
          },
          [chatID + ".date"]: serverTimestamp()
        });

        //For incomming conversation list of userChats
        await updateDoc(doc(db,"userChats",foundUser.uid), {
          [chatID + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [chatID + ".date"]: serverTimestamp()
        });
      }
    } catch(error) {
      console.log(error);
    }
  }
  
  return (
    <div className='py-3 px-5 flex flex-col gap-5 relative'>
        <input className='rounded-lg bg-zinc-200 text-zinc-500 pr-4 pl-3 w-full py-1 outline-none relative' 
        placeholder='Search...' 
        onKeyDown={handleKeyDown} 
        onChange={e=>setSearchKey(e.target.value)}/>
        {foundUser.displayName ? 
        <div className='flex items-center gap-3 hover:bg-zinc-700 p-3 cursor-pointer rounded-lg top-[50px] w-full z-50 bg-zinc-500' onClick={handleSelect}>
          <img src={foundUser.photoURL || `./icons/user.png`} alt="friends-img" className='w-12 h-12 object-cover items-center rounded-full'/>
          <h1 className='text-md'>{foundUser.displayName}</h1>
        </div> : ""}
    </div>
  )
}

export default LeftSearchBar