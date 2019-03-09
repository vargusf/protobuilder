import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

import PageColor from './pages/Color';
import PageText from './pages/Text';
import PageLayout from './pages/Layout';
import PageAlert from './pages/Alert';
import PageButton from './pages/Button';
import PageSpinner from './pages/Spinner';
import PageModal from './pages/Modal';
import PageProgress from './pages/Progress';

import protoStyle from '../styles/global.css';
import style from './Docs.css';


class Docs extends Component {
	render() {
		return (
			<div className={style.docContainer}>
				<Header />
				<div className={`${protoStyle.displayFlex} ${protoStyle.flexGrow1}`}>
					<div className={protoStyle.colWidth20}><Sidebar /></div>
					<div className={`${protoStyle.colWidth80} ${protoStyle.paddingLg}`}>
						<Route exact path='/proto/color' component={PageColor} />
						<Route exact path='/proto/text' component={PageText} />
						<Route exact path='/proto/layout' component={PageLayout} />
						<Route exact path='/proto/button' component={PageButton} />
						<Route exact path='/proto/alert' component={PageAlert} />
						<Route exact path='/proto/spinner' component={PageSpinner} />
						<Route exact path='/proto/modal' component={PageModal} />
						<Route exact path='/proto/progress' component={PageProgress} />
					</div>
				</div>
			</div>
		);
	}
}

export default Docs;
