import React from 'react'
import {signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {auth} from '../fb-config'
import { toast } from 'react-toastify';

function LogOut({ setIsAuth}) {
    const navigate = useNavigate()
    const logOut = () => {
        signOut(auth)
            .then(()=>{
                localStorage.clear()
                setIsAuth(false)
                toast.warn('User logged out!')
                navigate('/login')
            })
    }
  return (
    <div className='justify-end'>
        <button onClick={logOut}
        className="bg-[#e74c3c] p-2 rounded-lg text-slate-100"
        >Log Out</button>
    </div>
  )
}

export default LogOut