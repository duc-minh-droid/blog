import React from 'react'
import { NavLink } from 'react-router-dom'

function LinkTag({to, children}) {
  return (
    <>
        <NavLink to={to}>
            <div className="text-slate-500 hover:text-slate-900 hover:drop-shadow-2xl transition-all">
                {children}
            </div>
        </NavLink>
    </>
  )
}

export default LinkTag