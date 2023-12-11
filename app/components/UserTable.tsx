import React, { Suspense } from 'react'
interface Users{
     id:number,
     name:string,
     email:string
}
export default async function UserTable () {
     let res = await fetch('https://jsonplaceholder.typicode.com/users',
     {
          next:{
               revalidate:5
          }
     }
);
let users:Users[] = await res.json();
  return (
     <table className="table">
     {/* head */}
     <thead>
          <tr>
               <th></th>
               <th>Name</th>
               <th>Email</th>
          </tr>
     </thead>
     <tbody>
          {
               users.map((user)=>
               <tr className="bg-base-200" key={user.id}>
                    <th>{user.id}</th>
                    <th>{user.name}</th>
                    <th>{user.email}</th>
               </tr> 
               )
          }
          
          
     </tbody>
     </table>
  )
}
