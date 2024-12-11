import Modal from "../components/Modal";
import { Form, Link, redirect } from "react-router-dom";

const backendUrl = import.meta.env.BACKEND_URL || "http://localhost:8080";

const CreatePost = () => {
  return (
    <Modal>
      <Form
        className="relative rounded-md w-60 h-40 p-1 bg-neutral-950"
        method="POST"
      >
        <figure className="w-full h-full justify-self-center">
          <div
            className="bg-neutral-950 text-neutral-50 min-h-full rounded-xl border border-neutral-800"
          />
        </figure>
        <div className="absolute text-neutral-50 bottom-14 left-0 px-5">
          <input
            className="py-4 appearance-none border-none outline-none bg-neutral-950 text-base opacity-60 line-clamp-2 w-24 h-4"
            type="text"
            placeholder="Author"
            name="author"
            maxLength={12}
            required
          />
          <textarea
            className="fixed appearance-none overflow-clip overscroll-none bg-neutral-950 resize-none border-none outline-none w-40 h-10 text-sm"
            id="body"
            name="body"
            placeholder="Text"
            rows={2}
            maxLength={40}
          />
        </div>
        <div className="fixed grid gap-32 grid-cols-2 py-3 justify-center items-center">
          <Link
            className="text-gray-300 hover:text-gray-100 bg-stone-950 shadow-md shadow-red-700 hover:shadow-red-500 font-bold rounded-md w-18 max-w-24 h-10 max-h-12"
            to="/"
          >
            Cancel
          </Link>
          <button 
            className="text-gray-300 hover:text-gray-100 bg-stone-950 shadow-md shadow-green-700 hover:shadow-green-500 font-bold rounded-md w-18 max-w-24 h-10 max-h-12"
          >
            Submit
          </button>
        </div>
      </Form>
    </Modal>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  await fetch(backendUrl, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return redirect('/');
}

export default CreatePost;