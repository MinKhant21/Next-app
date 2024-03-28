import React from 'react'
interface Props{
     children:React.ReactNode
}
export default function layout({children}:Props) {
  return (
    <div>
     <aside className=' p-5 bg-slate-400 mr-4'>Admin Side Bar</aside>
     <div>
          {children}
     </div>
    </div>
  )
}
