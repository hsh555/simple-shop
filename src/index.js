import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/homePage';
import SampleClass from './components/sample';
import RouteHandler from './router';

ReactDOM.render(
  <React.StrictMode>
    <RouteHandler />
    {/* <RouteHandler /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
