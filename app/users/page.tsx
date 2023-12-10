import React from 'react'
interface Users{
     id:number,
     name:string
}
export default async function Users() {
     let res = await fetch('https://jsonplaceholder.typicode.com/users',
          {
               next:{
                    revalidate:5
               }
          }
     );
     let users:Users[] = await res.json();
     console.log(users)
     return (
          <div>
               <ul>
                    {
                         users.map((user)=> <li key={user.id}>{user.name}</li>)
                    }
               </ul>   
          </div>
     )
}
