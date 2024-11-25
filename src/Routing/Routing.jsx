import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Home from '../componate/Home';
import CommonLayout from '../CommonLayout';
import About from '../componate/About';
import Course from '../componate/Course';
import Contact from '../componate/Contact';

export const router = createBrowserRouter([
    {
        path:"/",
        element:<CommonLayout />,
        children:[
          {
            path:"/",
            element:<Home />,
          },
          {
             path:"/Home",
             element:<Home />,
          },
          {
            path: "/About",
            element:  <About />,
          },
          {
            path:"/Course",
            element: <Course />,
          
          },
          {
              path:"/Contact",
              element:<Contact />,
          },
        ]
    },
  
  ]);

  
