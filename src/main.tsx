import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import CreatePost, { action as createPostAction }from './routes/CreatePost';
import RootLayout from './routes/RootLayout';
import Posts, { loader as postsLoader} from './routes/Posts';
import PostDetails, { loader as detailsLoader } from './routes/PostDetails';

const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout />,
    children: [
      { 
        path: '/',
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: '/create-post', element: <CreatePost />, action: createPostAction },
          { path: '/:id', element: <PostDetails />, loader: detailsLoader },
        ]
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
