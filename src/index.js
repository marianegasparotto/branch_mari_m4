import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Pages/Login';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Login />
  </React.StrictMode>
);
reportWebVitals();
