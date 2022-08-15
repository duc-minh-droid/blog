import React from 'react'

function ReachLast() {
  return (
    <div className='flex justify-center'>
      <div className='text-2xl mb-10 text-center text-purple-600 hover:bg-purple-600 hover:text-white transition p-2 px-4 cursor-pointer'
      onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}
      >You have read all the content we got 
      </div>
    </div>
  )
}

export default ReachLast