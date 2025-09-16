import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'aos/dist/aos.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Performance optimization: Remove StrictMode in development for faster startup
const isDevelopment = process.env.NODE_ENV === 'development';

root.render(
  isDevelopment ? (
    <App />
  ) : (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
); 