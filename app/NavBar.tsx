'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
function NavBar() {
     const pathname = usePathname();
  return (
    <div className=" flex gap-10 my-5">
     <Link href="/" className={`link ${pathname === '/' ? 'active text-orange-700' : ""}`}>Home</Link>
     <Link href="/posts" className={`link ${pathname === '/posts' ? 'active text-orange-700' : ""}`}>posts</Link>
     <Link href="/login" className={`link ${pathname === 'login' ? 'active' : ''}`} >Login</Link>
    </div>
  )
}

export default NavBar