import { updateProfile } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthContext'
import { ChatContext } from '../../../../context/ChatContext';
import { auth, storage } from '../../../../firebase';

function LeftNavProfile() {
    const {currentUser,setCurrentUser}  = useContext(AuthContext);
    const {setMessages ,dispatch} = useContext(ChatContext);
    const navigate = useNavigate();
    const imgRef = useRef();

    const handleClick = () => {
        setTimeout(()=>{
            setCurrentUser({});
            setMessages([]);
            dispatch({type:"CHANGE_USER",payload: {}});
        },500);
        navigate("/");
    }
    
    const openImageChange = () => {
        imgRef.current?.click();
    }

    const updateImage = async (e) => {
        try {
            const img = e.target.files[0];
            const extension = img.name.split(".")[1];
            const storageRef = ref(storage, `${currentUser.uid}.${extension}`);

            const uploadSnapshot = await uploadBytes(storageRef,img);
            const downloadURL = await getDownloadURL(uploadSnapshot.ref);

            await updateProfile(currentUser, {photoURL: downloadURL}).then(()=> {
                setCurrentUser(auth.currentUser);
            });

        } catch(error) {
            console.log(error);
        }      
        
    }   

    return (
        <div className='flex flex-col w-full py-2 px-4 gap-2'>
            <img className="w-24 h-24 self-center pt-1 rounded-full object-cover" loading='lazy' src={currentUser.photoURL || `./icons/user.png`} alt="funk-user"></img>
            <h2 className='self-center'>{currentUser.displayName}</h2>
            <button className='text-sm bg-zinc-700 rounded p-2' onClick={openImageChange}>Change Image</button>
            <input type="file" style={{display: "none"}} ref={imgRef} accept=".jpg,.png,.jpeg" onChange={updateImage}/>
            <button className='text-sm bg-zinc-700 rounded p-2' onClick={handleClick}>Logout</button>
        </div>
    )
}

export default LeftNavProfile