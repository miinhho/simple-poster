import PostList from "../components/PostList";
import { Outlet } from "react-router-dom";

const Posts = () => {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
};

const backendUrl = import.meta.env.BACKEND_URL || "http://localhost:8080";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const responce = await fetch(backendUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const resData = await responce.json();
  return resData.posts;
}

export default Posts;