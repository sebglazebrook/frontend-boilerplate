import React from 'react';
import ReactDOM , { render }from 'react-dom';
import App from './components/App';

const app = document.getElementById("root");
ReactDOM.hydrate(<App />, app);
