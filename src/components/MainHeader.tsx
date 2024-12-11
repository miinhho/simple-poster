import { MdPostAdd, MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";


const MainHeader = () => {
  return (
    <header className="m-8 p-4 text-center flex justify-between items-center border-y-2 border-solid border-neutral-700">
      <h1 className="text-4xl flex gap-6 items-center text-gray-200">
        <MdMessage />
        Poster
      </h1>
      <p>
        <Link
          to="/create-post"
          className="justify-center inline-flex gap-2 pt-3 pb-6 m-0 bg-stone-950 text-gray-200 border-hidden rounded-md shadow-md hover:shadow-stone-500 shadow-stone-700 cursor-pointer font-bold text-xl w-40 h-14"
        >
          <MdPostAdd size={25} />
          New Post
        </Link>
      </p>
    </header>
  );
};

export default MainHeader;