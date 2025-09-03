import getPost from "@/lib/getPost";
import React from "react";

export default async function PostPage({ params }) {
  const { id } = params;

  const post = await getPost(id);

  return (
    <div className="mt-6">
      <h2 className="text-blue-500">{post.title}</h2>
      <p className="mt-2">{post.body}</p>
    </div>
  );
}
