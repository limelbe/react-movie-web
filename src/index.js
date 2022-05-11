import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './MovieApp.js';
// import App from './CoinTracker.js';
// import App from './TodoList.js';
// import App from './CleanUp';
// import App from './App';

import "./style.css";  // 전역적으로 css 적용

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
