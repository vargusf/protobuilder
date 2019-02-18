import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

import PageColor from './pages/color/Color';
import PageText from './pages/text/Text';

import PageButton from './pages/button/Button';

import protoStyle from '../styles/global.css';
import style from './Docs.css';


class Docs extends Component {
	render() {
		return (
			<div>
				<Header />
				
				<div className={protoStyle.displayFlex}>
					<div className={protoStyle.colWidth20}><Sidebar /></div>
					<div className={` ${protoStyle.colWidth80} ${protoStyle.paddingLg} `}>

						<Route exact path='/proto/color' component={PageColor} />
						<Route exact path='/proto/text' component={PageText} />
						<Route exact path='/proto/button' component={PageButton} />

					</div>
				</div>
			</div>
		);
	}
}

export default Docs;
