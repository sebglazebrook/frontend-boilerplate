import React from 'react';
import ReactDOM , { render }from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './components/App';

const app = document.getElementById("root");
const jsx = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.hydrate(jsx, app);
