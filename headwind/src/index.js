import React from 'react';
import ReactDOM from 'react-dom/';
import { StrictMode } from 'react';
import './index.css';
import App from './App';
import {render} from "react-dom";
//import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
render(
  <StrictMode>
    <App />
  </StrictMode>,
    root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
