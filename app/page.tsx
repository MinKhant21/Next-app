import Image from 'next/image'
import Link from 'next/link'
import Wallpaper from '../public/wallpaper.jpeg'
export default async function Home() {
  return (
    <>
    <Link href="/login">Login</Link>
    <p>Home Page</p>
      <Image alt='image' width={100} height={100} src={Wallpaper} />
    </>
  )
}
