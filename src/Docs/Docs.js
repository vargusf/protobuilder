import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import PageDashboard from './pages/Dashboard';
import PageColor from './pages/Color';
import PageText from './pages/Text';
import PageLayout from './pages/Layout';
import PageAlert from './pages/Alert';
import PageButton from './pages/Button';
import PageSpinner from './pages/Spinner';
import PageModal from './pages/Modal';
import PageIcon from './pages/Icon';
import PageProgress from './pages/Progress';
import PageForm from './pages/Form';

import { Container, Col, Row } from '../../index';

import protoStyle from '../styles/global.css';
import style from './Docs.css';


class Docs extends Component {
	render() {
		return (
			<Container height="min100vh">
				<div className={style.header}>
					<div className={style.logo}></div>
				</div>
				<Container grow="1">
					<Row grow="1">
						<Col width="300px">
							<div className={style.sidebar_container}>

								<ul className={protoStyle.marginBottomLg}>
									<li><NavLink to="/proto/dashboard" className={style.link} activeClassName={style.linkActive}>Dashboard</NavLink></li>
								</ul>

								<div className={` ${protoStyle.fontsizeHeading6} ${protoStyle.marginBottomSm} `}>Basic</div>
								<ul className={protoStyle.marginBottomLg}>
									<li><NavLink to="/proto/color" className={style.link} activeClassName={style.linkActive}>Color</NavLink></li>
									<li><NavLink to="/proto/text" className={style.link} activeClassName={style.linkActive}>Text</NavLink></li>
									<li><NavLink to="/proto/layout" className={style.link} activeClassName={style.linkActive}>Layout</NavLink></li>
								</ul>

								<div className={` ${protoStyle.fontsizeHeading6} ${protoStyle.marginBottomSm} `}>Components</div>
								<ul className={protoStyle.marginBottomLg}>
									<li><NavLink to="/proto/alert" className={style.link} activeClassName={style.linkActive}>Alert</NavLink></li>
									<li><NavLink to="/proto/button" className={style.link} activeClassName={style.linkActive}>Button</NavLink></li>
									<li><NavLink to="/proto/spinner" className={style.link} activeClassName={style.linkActive}>Spinner</NavLink></li>
									<li><NavLink to="/proto/modal" className={style.link} activeClassName={style.linkActive}>Modal</NavLink></li>
									<li><NavLink to="/proto/icon" className={style.link} activeClassName={style.linkActive}>Icon</NavLink></li>
									<li><NavLink to="/proto/progress" className={style.link} activeClassName={style.linkActive}>Progress</NavLink></li>
									<li><NavLink to="/proto/form" className={style.link} activeClassName={style.linkActive}>Form</NavLink></li>
								</ul>
							</div>
						</Col>
						<Col width="grow">
							<Container fixedWidth="true">
								<Row paddingTop="lg">
									<Col width="grow">
										<Route exact path='/proto/dashboard' component={PageDashboard} />
										<Route exact path='/proto/color' component={PageColor} />
										<Route exact path='/proto/text' component={PageText} />
										<Route exact path='/proto/layout' component={PageLayout} />
										<Route exact path='/proto/button' component={PageButton} />
										<Route exact path='/proto/alert' component={PageAlert} />
										<Route exact path='/proto/spinner' component={PageSpinner} />
										<Route exact path='/proto/modal' component={PageModal} />
										<Route exact path='/proto/icon' component={PageIcon} />
										<Route exact path='/proto/progress' component={PageProgress} />
										<Route exact path='/proto/form' component={PageForm} />
									</Col>
								</Row>
							</Container>
						</Col>
					</Row>
				</Container>
			</Container>
		);
	}
}

export default Docs;
