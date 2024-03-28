'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  const { status , data:session} = useSession();
  return (
    <div className='flex p-5 bg-slate-400 space-x-5'>
     <Link href="/" className=' text-md mr-3'>Next Js</Link>
     <Link href="/users" className=' text-md'>Users</Link>
     { status === 'authenticated' &&  <div>{session.user!.name}</div>}
     { status === 'authenticated' &&  <Link href="/api/auth/signout" className=' text-md'>Sign Out</Link>}
     { status === 'unauthenticated' &&  <Link href="/api/auth/signin" className=' text-md'>Sign in</Link>}
    </div>
  )
}
