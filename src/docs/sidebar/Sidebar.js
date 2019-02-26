import React from 'react';
import { NavLink } from 'react-router-dom';

import protoStyle from '../../styles/global.css';
import style from './Sidebar.css';

const Sidebar = () => {
	return (
		<div className={style.container}>
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
			</ul>
		</div>
	)
}

export default Sidebar;