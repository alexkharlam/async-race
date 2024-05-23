import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Garage from './views/Garage.tsx';
import Winners from './views/Winners.tsx';
import routerPaths from './data/routerPaths.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} errorElement={<p>Hi there, error</p>}>
          <Route index path={routerPaths.garage} element={<Garage />} />
          <Route path={routerPaths.winners} element={<Winners />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
