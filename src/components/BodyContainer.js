import React from 'react'

function BodyContainer({children}) {
  return (
    <div className='bg-slate-100 pt-20 grid-cols-1 justify-center w-full grid gap-y-10 min-h-screen'>
        {children}
    </div>
  )
}

export default BodyContainer