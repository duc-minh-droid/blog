import React from 'react'
import ReadMore from './ReadMore'
import { auth, blogsDB } from '../fb-config'
import { deleteDoc, doc } from 'firebase/firestore'
import PostContainer from './PostContainer'
import { BsTrashFill } from '@react-icons/all-files/bs/BsTrashFill'

function Post({ post, isAuth, lastElement }) {
  const deletePost = async (id) => {
    const postDoc = doc(blogsDB, id)
    await deleteDoc(postDoc)
      .then(() => {
        window.location.reload()
      })
  }
  if (!lastElement) {
    return (<PostContainer>
      <div className='flex items-center justify-between mr-5 text-4xl'>
        <div className='bg-cyan-100 flex gap-5 p-2 rounded-full pr-5'>
          <img src={post.author.avatar} alt='' className='w-12 h-12 rounded-full' 
          onError={(e)=>{e.target.onerror = null; e.target.src="https://picsum.photos/200"}}/>
          <p className='text-slate-500'>{post.author.name}</p>
        </div>
        {isAuth &&
          post.author.id === auth.currentUser.uid &&
          <button className='hover:text-white transition-all hover:bg-red-500 hover:rounded-full p-3'
            onClick={() => deletePost(post.id)}>
            {<BsTrashFill />}</button>}
      </div>
      <div className='flex justify-center pr-10 text-3xl mt-5 mb-6'>
        {post.title}
      </div>
      <ReadMore>
        {post.postText}
      </ReadMore>
    </PostContainer>)
  }
  return (
    <PostContainer>
      <div ref={lastElement}>
        <div className='flex items-center justify-between mr-5 text-4xl'>
          <div className='bg-cyan-100 flex gap-5 p-2 rounded-full pr-5'>
            <img src={post.author.avatar} alt='' className='w-12 h-12 rounded-full' />
            <p className='text-slate-500'>{post.author.name}</p>
          </div>
          {isAuth &&
            post.author.id === auth.currentUser.uid &&
            <button className='hover:text-white transition-all hover:bg-red-500 hover:rounded-full p-3'
              onClick={() => deletePost(post.id)}>
              {<BsTrashFill />}</button>}
        </div>
        <div className='flex justify-center pr-10 text-3xl mt-5 mb-6'>
          {post.title}
        </div>
        <ReadMore>
          {post.postText}
        </ReadMore>
      </div>
    </PostContainer>
  )
}

export default Post