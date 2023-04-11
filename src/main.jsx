import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import getData from './components/utils';
import JobDetails from './components/JobDetails/JobDetails';
import Statistics from './components/Statistics/Statistics';
import AppliedJob from './components/AppliedJob/AppliedJob';
import PageNotFound from './components/PageNotFound/PageNotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <PageNotFound></PageNotFound>,
    loader: getData,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'jobDetails/:id',
        element: <JobDetails></JobDetails>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied-job',
        element: <AppliedJob></AppliedJob>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
