import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App.tsx';
import Garage from './views/Garage.tsx';
import Winners from './views/Winners.tsx';
import routerPaths from './data/routerPaths.ts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<p>Hi there, error</p>}>
      <Route index path={routerPaths.garage} element={<Garage />} />
      <Route path={routerPaths.winners} element={<Winners />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
