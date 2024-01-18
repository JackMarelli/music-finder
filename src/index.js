import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FavouriteContextProvider } from './store/FavouriteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavouriteContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FavouriteContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
