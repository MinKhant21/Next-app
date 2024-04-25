import React, { Suspense } from "react";
import Loading from "./loading";
import PostList from "../components/PostList";
const getPosts = async () => {
  let res: any = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

export default async function Posts() {
  let posts = await getPosts();
  return (
    <div>
      Posts
      {posts.map((post: any) => {
        return (
          <Suspense fallback={<Loading />}>
            <PostList posts={posts} />
          </Suspense>
        );
      })}
    </div>
  );
}
