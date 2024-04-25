"use client";
import React from "react";
import Link from "next/link";
export default function PostList({ posts }: any) {
  
  return (
    <div className="">
      <div className=" w-1/2 gap-10   text-black ">
        {posts.map((post: any) => {
          return (
            <Link  href={`/posts/${post.id}`} key={post.id}
              className=" mx-10 p-2 bg-slate-200 rounded-lg cursor-pointer"
            >
              {post.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
