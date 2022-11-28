import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './app.css'
import Collection from './components/Collection'
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // need to make error handle
    errorElement: <div>Something has gone wrong</div>
  },
  {
    path: "collection",
    element: <Collection />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // {/* <App/> */}
    <RouterProvider router={router} />
  // </React.StrictMode> 
)
