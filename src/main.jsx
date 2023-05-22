import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import GamePage from './routes/GamePage';
import HomePage from './routes/HomePage';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {path: '/', element: <HomePage />},
      {path: '/game', element: <GamePage />},
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
