import { useLoaderData, Link, LoaderFunctionArgs } from 'react-router-dom';

import Modal from '../components/Modal';

const backendUrl = import.meta.env.BACKEND_URL;

const PostDetails = () => {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className="p-4 w-120">
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className="">
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className="p-4 w-120">
        <p className="text-sm font-bold m-0 capitalize text-stone-200">
          {post.author}
        </p>
        <p className="text-xl m-1 italic text-stone-300 whitespace-pre-wrap">
          {post.body}
        </p>
      </main>
    </Modal>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }: LoaderFunctionArgs) {
  const responce = await fetch(`${backendUrl}/posts/${params.id}`);
  const resData = await responce.json();
  return resData.post;
}

export default PostDetails;