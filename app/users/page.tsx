import React from 'react'
interface Users{
     id:number,
     name:string
}
export default async function Users() {
     let res = await fetch('https://jsonplaceholder.typicode.com/users');
     let users:Users[] = await res.json();
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
