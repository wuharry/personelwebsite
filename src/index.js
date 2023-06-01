import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
//GA 
const root = ReactDOM.createRoot(document.getElementById('root'));
const gaScript = document.createElement('script');
gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-HTG0RJ84VF';
gaScript.async = true;
document.head.appendChild(gaScript);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-HTG0RJ84VF');
//GA
root.render(
  <React.StrictMode>
    <Router><App /></Router>
  </React.StrictMode>
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
