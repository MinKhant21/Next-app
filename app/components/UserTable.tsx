import React, { Suspense } from "react";
import { sort } from "fast-sort";
import Link from "next/link";
interface Users {
  id: number;
  name: string;
  email: string;
}
interface Props {
  sortOrder: string;
}
export default async function UserTable({ sortOrder }: Props) {
  let res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 5,
    },
  });
  let users: Users[] = await res.json();
  let sortedUser = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );
  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUser.map((user) => (
          <tr className="bg-base-200" key={user.id}>
            <th>{user.id}</th>
            <th>{user.name}</th>
            <th>{user.email}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
