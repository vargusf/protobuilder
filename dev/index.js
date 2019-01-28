import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../src/Styles/reset.css';
import '../src/Styles/config.css';


render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.querySelector('.App')
);