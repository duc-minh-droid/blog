import React from 'react'

function PostContainer({children}) {
  return (
    <div className='w-1/2 bg-white justify-self-center rounded-xl p-5'>
        {children}
    </div>
  )
}

export default PostContainer