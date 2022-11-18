import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from '../context/AuthContext';
import { NotificationContext } from '../context/NotificationContext';

function Login() {

    const {setCurrentUser} = useContext(AuthContext);
    const {error,setError,success,setSuccess} = useContext(NotificationContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        try {
            const loggedUser = await signInWithEmailAndPassword(auth,email,password);
            setCurrentUser(loggedUser.user);
            setSuccess("Login success! Redirecting now...")
            setTimeout(() => {
                setSuccess("");
                navigate("/chat");
            }, 3000);
        } catch (error) {
            setError("Error occured! Please try again.");
            setTimeout(()=> {
                setError("");
            } , 3000);
        }
    }
    return (
        <div className='bg-slate-400 flex justify-center items-center h-screen bg-login bg-no-repeat bg-cover flex-col gap-5'>
            {error ? <div className='bg-red-400  py-2 w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/5 rounded-lg text-center text-white'>{error}</div> : ""}
            {success ? <div className='bg-emerald-800  py-2 w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/5 rounded-lg text-center text-white'>{success}</div> : ""}
            <main className='bg-zinc-200 rounded-md w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/5 flex flex-col min-h-[400px] max-h-[400px] items-center py-3'>
                <h1 className='text-xl font-bold text-zinc-800'>FunkChat</h1>
                <h3 className='text-lg font-normal'>Login</h3>
                <form className='flex flex-col h-full justify-around w-7/12' onSubmit={handleSubmit}>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor="user" className='font-semibold'>Email</label>
                        <input type={"email"} className="outline-none rounded py-1 px-2" id="user" required/>
                        <label htmlFor="password" className='font-semibold'>Password</label>
                        <input type={"password"} className="outline-none rounded py-1 px-2" id="password" required/>
                    </div>
                    <button className='bg-emerald-500 py-2 rounded' type={"submit"}>Login</button>
                    <Link to={"/register"} className='text-center underline text-gray-500'>Click here to Register</Link>
                </form>
            </main>
        </div>
  )
}

export default Login