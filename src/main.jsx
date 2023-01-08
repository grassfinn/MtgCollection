import App from './App';
import './app.css';
import './reset.css'
import Collection from './components/Collection';
import Homepage from './components/Home';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Homepage />,
//     // need to make error handle
//     errorElement: <div>Something has gone wrong</div>,
//   },
//   {
//     path: 'collection',
//     element: <Collection />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </React.StrictMode>
);
