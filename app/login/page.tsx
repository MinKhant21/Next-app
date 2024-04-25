'use client'

import { useRouter } from "next/navigation"
function page() {
     const router = useRouter()
  return (
    <div>Login page

     <button className="px-3 py-1 bg-primary text-white" onClick={()=>router.push('/')}>
          create
     </button>
    </div>
  )
}

export default page