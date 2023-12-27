'use client '
import React, { Suspense } from 'react'
import UserTable from '../components/UserTable';

export default async function Users() {
   
     return (
          <div>
               <div className="overflow-x-auto">
                    <Suspense fallback={<p>loading ........</p>}>
                         <UserTable/>
                    </Suspense>
               </div>
          </div>
     )
}
