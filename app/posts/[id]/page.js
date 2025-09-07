import Comments from "@/app/components/Comments";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComment";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }) {
  const { id } = params;

  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

  // console.log(comments);

  const post = await postPromise;

  return (
    <div className="mt-6">
      <h2 className="text-blue-500">{post.title}</h2>
      <p className="mt-2">{post.body}</p>

      <hr />

      {/* <div className="mt-6">
        <h1>Comments</h1>

        <ul>
          {comments.map((comment) => (
            <li className="mb-2" key={comment.id}>
              {comment.body}
            </li>
          ))}
        </ul>
      </div> */}

      <Suspense fallback="<h1>Loading Comments...</h1>">
        <Comments promise={commentsPromise} />
      </Suspense>
    </div>
  );
}
