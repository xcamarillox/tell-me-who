import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter , Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import 'antd/dist/antd.css';
import './styles/main.css';
import App from './components/App.jsx';
import store from './store/store-reducer';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <HashRouter >
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </HashRouter >
    </Provider> 
  </React.StrictMode>
);