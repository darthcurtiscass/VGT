import React from 'react';
import ReactDOM from 'react-dom/client';
import { creaRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/reset.css';
import "typeface-roboto";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);


