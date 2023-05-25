import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import GamePage from './routes/GamePage';
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/about', element: <AboutPage />},
      {path: '/game', element: <GamePage />},
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
