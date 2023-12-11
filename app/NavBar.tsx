import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div className='flex p-5 bg-slate-400'>
     <Link href="/" className=' text-md mr-3'>Next Js</Link>
     <Link href="/users" className=' text-md'>Users</Link>
    </div>
  )
}
