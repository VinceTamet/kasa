import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import './components/bannerHomePage/bannerHomePage.scss';
import { HomePage } from './pages/homePage';
import { About } from './pages/aboutPage';
import { ErrorPage } from './pages/errorPage/errorPage';
import App from './App';
import FicheLogement from './pages/ficheLogementPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <About /> },
      {path:  "/logements/:id", element: <FicheLogement/>},
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
