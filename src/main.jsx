import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ComingSoon from './pages/coming-soon/ComingSoon.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ComingSoon />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
