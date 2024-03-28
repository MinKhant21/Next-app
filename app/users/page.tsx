
import React, { Suspense } from 'react'
import UserTable from '../components/UserTable';
import Link from 'next/link';

interface Props{
     searchParams :{sortOrder : string}
}

export default async function Users({searchParams:{sortOrder}}:Props) {
     console.log(sortOrder)
     return (
          <div>
               <div className="overflow-x-auto">
     <Link href="/users/new" className=' btn btn-primary text-md'>New User</Link>

                    <Suspense fallback={<p>loading ........</p>}>
                         <UserTable sortOrder={sortOrder}/>
                    </Suspense>
               </div>
          </div>
     )
}
