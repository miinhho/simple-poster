import { Link } from "react-router-dom";

interface PostProps {
  author: string;
  body: string;
}

const Post = ({ author, body }: PostProps) => {  
  return (
    <div
      className="relative rounded-lg w-60 h-40 p-1 bg-neutral-950"
      role="article"
      aria-label="Post"
    >
      <figure className="w-full h-full">
        <div
          className="bg-neutral-950 text-neutral-50 min-h-full rounded-md border border-neutral-800"
        />
      </figure>
      <Link
        className="absolute text-neutral-50 bottom-4 left-0 px-4"
        to={`/posts/${author}`}
      >
        <span className="font-bold">
          {author}
        </span>
        <p className="text-sm opacity-60 line-clamp-2">
          {body}
        </p>
      </Link>
    </div>
  );
};

export default Post;