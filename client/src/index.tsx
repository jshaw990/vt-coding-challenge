import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import App from './components/App';
import BlogPost from './components/BlogPost'
import Navbar from './components/Navbar';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/:slug',
    element: <BlogPost />
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);