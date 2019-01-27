import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../src/Styles/import.css';


render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.querySelector('.App')
);