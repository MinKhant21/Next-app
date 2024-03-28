import Image from 'next/image'
import Link from 'next/link'
import ProductAddToCart from './components/ProductAddToCart'
import { authOptions } from './api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'

export default async function Home() {
  let session = await getServerSession(authOptions)
  return (
    <>
    <p>{session.user!.name}</p>
    Home Page</>
  )
}
