import React from 'react';

import protoStyle from '../../styles/global.css';
import style from './Layout.css';

const Container = ({
	fixedWidth = false,
	centered = false,
	height = null, // null|min100vh|number
	children
}) => {
	const fixedWidthClass = fixedWidth ? 'fixedWidth' : null;
	const centeredClass = centered ? 'flexCentered' : null;

	const classes = `
		${protoStyle[fixedWidthClass]}
		${protoStyle[centeredClass]}
	`;

	const style = {
		height: height + "px",
	};

	return (
		<div className={classes} style={style}>
			{children}
		</div>
	);
}

const Row = ({
	gutter = "md", // zero|xsm|sm|md|lg|xlg|xxlg|jumbo
	wrap = "false", // true|false|reverse
	align = 'center', // stretch|center|start|end
	justify = 'start', // start|end|center|between
	children
}) => {
	const classes = `
		${protoStyle.displayFlex}
		${style['gutter_' + gutter]}
		${style['wrap_' + wrap]}
		${style['alignItems_' + align]}
		${style['justifyContent_' + justify]}
	`;

	return (
		<div className={classes}>
			{children}
		</div>
	);
}

const Col = ({
	width = null, // null|number
	percent = null, // null|number
	grow = 1, // null|number|auto
	children
}) => {
	const spacing = width ? width + "px" : ( percent ? percent + "%" : null );
	const flexBasis = spacing ? spacing : 0;
	const minWidth = spacing ? spacing : null;
	const colGrow = spacing ? "auto" : grow;

	const style = {
		flexBasis: flexBasis,
		minWidth: minWidth,
		flexGrow: colGrow
	};

	return (
		<div 
			style={style}
		>
			{children}
		</div>
	);
}

export {
	Container,
	Row,
	Col,
};