import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import { PostData } from "./types";
import { MdAutorenew } from "react-icons/md";

const PostList = () => {
  const posts = useLoaderData<PostData[]>();

  return (
    <>
      {posts.length === 0 && 
      (
        <div className="flex gap-1 items-center justify-self-center">
          <MdAutorenew
            className="animate-spin"
          />
          <p>
            Loading...
          </p>
        </div>
    )}
      {posts.length >= 1 && (
        <ul className="list-none max-w-4xl m-4 mx-auto p-4 py-0 grid gap-4 grid-cols-3 justify-center">
          {posts.map((post, index) => (
            <Post
              key={index}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default PostList;