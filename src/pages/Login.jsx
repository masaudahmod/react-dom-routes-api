import Lottie from "lottie-react";
import loginAnimation from "../../public/animation-json/LoginAnimation.json";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import { useState } from "react";

// toastify
import { toast } from 'react-toastify';

import { Link, useNavigate } from "react-router-dom";


const Login = () => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [togglePassword, setTogglePassword] = useState(false)

    const handleShowPassword = () => {
        setTogglePassword(!togglePassword)
        console.log(togglePassword)
    }


    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailError('')
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordError('')
    }

    const navigate = useNavigate()



const handleForm = (e) => {
    e.preventDefault()

    if(email === ''){
        setEmailError('please enter your Email')
    }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        setEmailError('please enter a valid Email')
    }else{
        setEmailError('')
    }

    if(password ===''){
        setPasswordError('please enter a valid password')
    }
else{
    setPasswordError('')
}

    if(email && password) {
        toast.success("Log In Successfull")

        navigate('/home')

        setEmail('')
        setPassword('')

    }

}


    return (
        <section className="h-screen pt-20 bg-gray-400">
            <div className="flex justify-between items-center container mx-auto">
                <div className="w-2/5 h-full"> 
                    <h2 className="text-cyan-300 text-4xl mb-10 text-center capitalize font-bold">Log In form</h2>
                    <form onSubmit={handleForm}>
                        <div className="relative mb-8">
                            <label className="text-2xl text-white font-semibold">Email:</label>
                            <p  className="text-red-600 capitalize absolute right-0 top-0 text-lg"> {emailError} </p>
                            <input onChange={handleEmail} value={email} type="email" className="outline-none px-5 mt-3 py-2 text-xl rounded-lg w-full" placeholder="Enter Your Email" />
                        </div>
                        <div className="relative">
                            <label className="text-2xl text-white font-semibold">Password:</label>
                            <p className="text-red-600 capitalize absolute right-0 top-0 text-lg">{passwordError} </p>
                            <div className="relative">
                                <input onChange={handlePassword} value={password} type={togglePassword? "text" : "password"} className="outline-none px-5 mt-3 py-2 text-xl rounded-lg w-full" placeholder="Enter Your password" />
                                {
                                    togglePassword?
                                    <IoEye onClick={handleShowPassword} className="absolute right-3 text-xl top-5 cursor-pointer"/>
                                    :
                                    <IoEyeOffSharp onClick={handleShowPassword} className="absolute right-3 text-xl top-5 cursor-pointer"/>            
                                }            
                            </div>
                        </div>
                        <input type="submit" className="w-full cursor-pointer mt-5 bg-teal-300 hover:bg-teal-400 transition-all delay-50 rounded-xl py-2 text-xl font-semibold uppercase" />
                        <div className="mt-8">
                            <h3 className="text-2xl text-balck ">Are You A New User? <Link to='/registration' className="text-amber-400 ms-4 cursor-pointer">Registered!</Link></h3>
                        </div>
                    </form>
                </div>
                <div className="w-2/5 bg-zinc-400 h-full"> 
                    <Lottie animationData={loginAnimation} loop={true} ></Lottie>
                </div>
            </div>
        </section>
    );
};

export default Login;