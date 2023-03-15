import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import ThankYou from './pages/ThankYou';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/thanks',
    element: <ThankYou />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
