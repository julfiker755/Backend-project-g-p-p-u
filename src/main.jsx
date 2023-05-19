import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import Addcoffce from './components/Addcoffce/Addcoffce.jsx';
import Updatecoffce from './components/Updatecoffce/Updatecoffce.jsx';
import All from './components/All/All';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        index:true,
        element:<Addcoffce></Addcoffce>
      },{
        path:'/update/:id',
        element:<Updatecoffce></Updatecoffce>
      },{
        path:'/all',
        element:<All></All>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
