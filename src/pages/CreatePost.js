import React, { useState } from 'react'
import { addDoc, serverTimestamp } from 'firebase/firestore'
import { blogsDB, auth } from '../fb-config'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function CreatePost() {
  const [title, setTitle] = useState("")
  const [postText, setPostText] = useState("")
  const navigate = useNavigate()

  const createPost = async (e) => {
    e.preventDefault()
    await addDoc(blogsDB, {
      title,
      postText,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
        avatar: auth.currentUser.photoURL
      },
      createdAt: serverTimestamp()
    })
    navigate('/')
    toast.success('Successfully created blog')
  }

  return (
    <div className='bg-slate-100 justify-center w-full h-screen flex items-center'>
        <form onSubmit={createPost} className='w-2/5 flex flex-col bg-white p-2 rounded-2xl'>
          <p className='text-center text-5xl my-10'>Create a blog</p>
          <label className='ml-5 text-2xl'>Title</label>
          <input className='border-slate-400 border-2 rounded-full p-2 mb-5'
          onChange={e=>setTitle(e.target.value)} type="text" name="title" placeholder="title of the blog" required />
          <label className='ml-5 text-2xl'>Post</label>
          <textarea className='border-slate-400 border-2 rounded-lg p-2 mb-5'
          onChange={e=>setPostText(e.target.value)} placeholder='post...' />
          <div className='flex justify-center'>
            <button className='bg-[#3498db] py-2 px-4 rounded-full text-xl' type='submit'>Submit</button>
          </div>
        </form>
    </div>

  )
}

export default CreatePost