import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css';
import App from './components/App.jsx';


const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>
);