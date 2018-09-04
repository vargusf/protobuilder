import React, { Component } from 'react';
import { render } from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import App from './containers/App';
import './styles/import-with-config.scss'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector(".AppContainer")
);