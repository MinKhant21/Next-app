import Image from 'next/image'
import Link from 'next/link'
import ProductAddToCart from './components/ProductAddToCart'

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <Link href='/users'>
        Users
      </Link>
      <ProductAddToCart/>
    </main>
  )
}
