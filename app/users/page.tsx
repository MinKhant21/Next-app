
import React, { Suspense } from 'react'
import UserTable from '../components/UserTable';

interface Props{
     searchParams :{sortOrder : string}
}

export default async function Users({searchParams:{sortOrder}}:Props) {
     console.log(sortOrder)
     return (
          <div>
               <div className="overflow-x-auto">
                    <Suspense fallback={<p>loading ........</p>}>
                         <UserTable sortOrder={sortOrder}/>
                    </Suspense>
               </div>
          </div>
     )
}
