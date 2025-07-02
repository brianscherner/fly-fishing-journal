import React from 'react';
import ReactDOM from 'react-dom/client';
import RootApp from './RootApp';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootApp/>
    </BrowserRouter>
  </React.StrictMode>
);
