import React, { useContext } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth , storage , db } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { NotificationContext } from '../context/NotificationContext';

function Register() {
    const {error,setError,success,setSuccess} = useContext(NotificationContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];
        const extension = file.name.split(".")[1];

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            const storageRef = ref(storage, `${res.user.uid}.${extension}`);

            // Upload file and get the downloadURL
            const uploadSnapshot = await uploadBytes(storageRef,file);
            const downloadURL = await getDownloadURL(uploadSnapshot.ref);

            // Update the profile wiht displayName and photoURL
            await updateProfile(res.user , {displayName: displayName , photoURL: downloadURL});

            //Add user to the user collection in firestore.
            await setDoc(doc(db , "users" , res.user.uid) , {
                uid: res.user.uid,
                displayName: displayName,
                photoURL: downloadURL,
                email: email
            });

            //Create empty userChats collection for storing user specific chats
            await setDoc(doc(db , "userChats" , res.user.uid) , {});

            setSuccess("User registration successfull! Please login");
            setTimeout(()=> {
                setSuccess("");
            } , 3000);

            e.target.reset();

        }
         catch (error) {
            console.log(error);
            setError("Error Occured!");
            setTimeout(()=> {
                setError("");
            } , 3000);
         }

    }

    return (
        <div className='bg-slate-400 flex justify-center items-center h-screen bg-login bg-no-repeat bg-cover flex-col gap-5 '>
            <main className='bg-zinc-200 rounded-md w-4/5 md:w-3/5 lg:w-2/5 xl:w-2/5 min-h-[570px] max-h-[570px] flex flex-col items-center py-3 relative'>
                {error ? <div className='bg-red-400 w-full py-2 rounded-lg text-center text-white absolute -top-16'>{error}</div> : ""}
                {success ? <div className='bg-emerald-800  py-2 w-full rounded-lg text-center text-white absolute -top-16'>{success}</div> : ""}
                <h1 className='text-xl font-bold text-zinc-800'>FunkChat</h1>
                <h3 className='text-lg font-normal'>Register</h3>
                <form className='flex flex-col h-full justify-around w-7/12' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="displayName" className='font-semibold'>Display Name</label>
                        <input className="outline-none rounded py-1 px-2" id="displayName" required/>
                        <label htmlFor="user" className='font-semibold'>Email</label>
                        <input type={"email"} className="outline-none rounded py-1 px-2" id="user" required/>
                        <label htmlFor="password" className='font-semibold'>Password</label>
                        <input type={"password"} className="outline-none rounded py-1 px-2" id="password" required/>
                        <label htmlFor="userPicture" className='font-semibold'>Profile picture</label>
                        <input type={"file"} accept=".jpg,.png,.jpeg" className="outline-none rounded py-1" id="userPicture" required/>
                    </div>
                    <button className='bg-emerald-500 py-2 rounded' type={"submit"}>Register</button>
                    <Link to={"/"} className='text-center underline text-gray-500'>Click here to login</Link>
                </form>
            </main>
        </div>
    )
}

export default Register