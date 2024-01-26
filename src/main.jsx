import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import { Home } from './pages/Home';
import ThankYou from './pages/ThankYou';

import ReactGA from 'react-ga4';
ReactGA.initialize('G-93FF6X3JYL');

ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname,
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'thanks',
        element: <ThankYou />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
