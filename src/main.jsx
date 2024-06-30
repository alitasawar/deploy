import './Index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home.jsx';
import Features from './Components/Features.jsx';
import Layout from './Components/Navbar/Layout.jsx';
import Map from './Components/Map.jsx';
import Pricing from './Components/Pricing.jsx';
// import '; 
import LatestBlogs from './Components/LatestBlogs.jsx';
import MemberDetail from './Components/MemberDetail.jsx';
import Services from './Components/Services.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/features',
        element: <Features />
      },
      {
        path: '/pricing',
        element: <Pricing />
      },
      {
        path: '/contact',
        element: <Map />
      },
      {
        path: '/blog',
        element: <LatestBlogs />
      },
      {
        path: '/Member Details',
        element: <MemberDetail />
      },
      {
        path: '/Services',
        element: <Services />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)
