import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthContext'
import { ChatContext } from '../../../../context/ChatContext';

function LeftNavProfile() {
    const {currentUser,setCurrentUser}  = useContext(AuthContext);
    const {setMessages ,dispatch} = useContext(ChatContext);
    const navigate = useNavigate();

    const handleClick = () => {
        setTimeout(()=>{
            setCurrentUser({});
            setMessages([]);
            dispatch({type:"CHANGE_USER",payload: {}});
        },500);
        navigate("/");
    }   

    return (
        <div className='flex flex-col w-full py-2 px-4 gap-2'>
            <img className="w-24 h-24 self-center pt-1 rounded-full object-cover" loading='lazy' src={currentUser.photoURL || `./icons/user.png`} alt="funk-user"></img>
            <h2 className='self-center'>{currentUser.displayName}</h2>
            {<button className='text-sm bg-zinc-700 rounded p-2' onClick={handleClick}>Logout</button>}
        </div>
    )
}

export default LeftNavProfile