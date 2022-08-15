import React, { } from 'react'
import {auth, provider} from "../fb-config"
import {signInWithPopup} from "firebase/auth"
import {useNavigate} from 'react-router-dom'
import {FcGoogle} from '@react-icons/all-files/fc/FcGoogle'
import { toast } from 'react-toastify';

function Login({setIsAuth}) {
  const navigate = useNavigate()
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result)=>{
        setIsAuth(true)
        localStorage.setItem("isAuth", true)
        toast.success("Successfully logged in!")
        navigate('/')
      })
  }

  return (
    <div>
      <div id="container">
        <div id="ghost-bubble" className="chat-bubble"></div>
        <button onClick={signInWithGoogle} className='signIn flex items-center bg-[#2ecc71] py-2 px-4 text-xl text-white'>
          <FcGoogle />
          Sign in with google</button>
        <div className="ghost">
          <div className="ghost-face">
            <div className="ghost-eyes">
              <div className="ghost-eyes-l"></div>
              <div className="ghost-eyes-r"></div>
            </div>
            <div className="ghost-mouth"></div>
          </div>
          <div className="ghost-torso"></div>
          <div className="ghost-hands">
            <div className="ghost-hands-l"></div>
            <div className="ghost-hands-r"></div>
          </div>
          <div className="ghost-legs"></div>
        </div>
      </div>
    </div>
  )
}

export default Login