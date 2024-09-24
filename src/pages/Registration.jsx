import Lottie from "lottie-react";
import RegistrationAnimation from "../../public/animation-json/RegistrationAnimation.json";
import { IoEye, IoEyeOff, IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";


const Registration = () => {

    // input
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
    const [birthDay, setbirthDay] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // input Error
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [addressError, setAddressError] = useState('')
    const [birthDayError, setbirthDayError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    // password show/hide
    const [tooglePassShow, setTooglePassShow] = useState(false) 
    const [toogleConfirmPass, setToogleConfirmPass] = useState(false) 


    const navigateTo = useNavigate()

    const handlePass = () => {
        setTooglePassShow(!tooglePassShow)
    }
    const handleConfirmPass = () => {
        setToogleConfirmPass(!toogleConfirmPass)
    }



    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        setFirstNameError('')
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
        setLastNameError('')
    }
    const handleAddress = (e) => {
        setAddress(e.target.value)
        setAddressError('')
    }
    const handleBirthDay = (e) => {
        setbirthDay(e.target.value)
        setbirthDayError('')
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailError('')
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordError('')
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        setConfirmPasswordError('')
    }



    const handleRegistration = (e) => {
        e.preventDefault()

        if(firstName === ''){
            setFirstNameError('Please Enter Your First Name')
        }

        if(lastName === ''){
            setLastNameError('Please Enter Your Last Name')
        }
        if(address === ''){
            setAddressError('Please Enter Your Address')
        }
        if(birthDay === ''){
            setbirthDayError('Your BirthDate?')
        }
        if(email === ''){
            setEmailError('Please Enter Your Email')
        }
        if(password === ''){
            setPasswordError('Please Enter Your Password')
        }
        if(confirmPassword === ''){
            setConfirmPasswordError('Please Enter Your Password')
        }else if(confirmPassword == !password ) {
            setConfirmPasswordError('Please Enter Your Correct Password')
            
        }

        else{
            toast.success("Registration Successfull")
            
            navigateTo("/")
            console.log("submitted")
            setFirstName('')
            setLastName('')
            setAddress('')
            setbirthDay('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
        }

    }


    return (
        <section className="bg-stone-50 min-h-screen">
            <div className="container mx-auto flex pt-10 justify-between items-center">
                <div className="w-2/5">
                    <h3 className="text-3xl font-bold text-center text-yellow-400">Registration form</h3>
                    <form onSubmit={handleRegistration}>
                        <div className="relative my-5">
                            <label className="text-2xl font-semibold">First Name:</label>
                            <p className="text-red-700 absolute right-0 top-0 text-lg">{firstNameError}</p>
                            <input onChange={handleFirstName} type="text" value={firstName} className="w-full py-4 px-3 mt-4 rounded-xl outline-none text-xl" placeholder="Enter Your First Name" />
                        </div>
                        <div className="relative my-5">
                            <label className="text-2xl font-semibold">Last Name:</label>
                            <p className="text-red-700 absolute right-0 top-0 text-lg">{lastNameError}</p>
                            <input onChange={handleLastName} type="text" value={lastName} className="w-full py-4 px-3 mt-4 rounded-xl outline-none text-xl" placeholder="Enter Your Last Name" />
                        </div>
                        <div className="relative my-5">
                            <label className="text-2xl font-semibold">Address:</label>
                            <p className="text-red-700 absolute right-0 top-0 text-lg">{addressError}</p>
                            <input onChange={handleAddress} type="text" value={address} className="w-full py-4 px-3 mt-4 rounded-xl outline-none text-xl" placeholder="Enter Your Current Address" />
                        </div>
                        <div className="relative my-5">
                            <label className="text-2xl font-semibold">Birth Date:</label>
                            <p className="text-red-700 absolute right-0 top-0 text-lg">{birthDayError}</p>
                            <input onChange={handleBirthDay} type="date" value={birthDay} className="w-full py-4 px-3 mt-4 rounded-xl outline-none text-xl"/>
                        </div>
                        <div className="relative my-5">
                            <label className="text-2xl font-semibold">Email:</label>
                            <p className="text-red-700 absolute right-0 top-0 text-lg">{emailError}</p>
                            <input onChange={handleEmail} type="email" value={email} className="w-full py-4 px-3 mt-4 rounded-xl outline-none text-xl" placeholder="Enter Your Email" />
                        </div>
                        <div className="relative my-5">
                            <label className="text-2xl font-semibold">Password:</label>
                            <p className="text-red-700 absolute right-0 top-0 text-lg">{passwordError}</p>
                            <div className="relative">
                                <input onChange={handlePassword} type={tooglePassShow ? "text" : "password"} value={password} className="w-full py-4 px-3 mt-4 rounded-xl outline-none text-xl" placeholder="Enter Your Password" />
                                {
                                    tooglePassShow?
                                    <IoEye onClick={handlePass} className="absolute right-4 top-8 cursor-pointer text-2xl"/>
                                    :
                                    <IoEyeOff onClick={handlePass} className="absolute right-4 top-8 cursor-pointer text-2xl"/>
                                }
                            </div>
                        </div>
                        <div className="relative my-5">
                            <label className="text-2xl font-semibold">Confirm Password:</label>
                            <p className="text-red-700 absolute right-0 top-0 text-lg">{confirmPasswordError}</p>
                            <div className="relative">
                                <input onChange={handleConfirmPassword} type={toogleConfirmPass ? "text" : "password"} value={confirmPassword} className="w-full py-4 px-3 mt-4 rounded-xl outline-none text-xl" placeholder="Enter Your Confirm Password" />
                                {
                                    toogleConfirmPass?
                                    <IoEyeOutline onClick={handleConfirmPass} className="absolute right-4 top-8 cursor-pointer text-2xl"/>
                                    :
                                    <IoEyeOffOutline onClick={handleConfirmPass} className="absolute right-4 top-8 cursor-pointer text-2xl"/>
                                }
                            </div>
                        </div>
                        <input type="submit" className="text-3xl bg-rose-600 w-full py-2 rounded-xl font-bold cursor-pointer" />
                    </form>
                    <div className="mt-10">
                        <h2 className="text-xl ">Already Have An Account? <Link to='/' className="ms-5 text-amber-400">Log In</Link> </h2>
                    </div>
                </div>
                <div className="w-2/5">
                <Lottie animationData={RegistrationAnimation} loop={false} ></Lottie>
                </div>
            </div>
        </section>
    );
};

export default Registration;