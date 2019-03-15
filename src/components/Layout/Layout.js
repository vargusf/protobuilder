import React from 'react';

import protoStyle from '../../styles/global.css';
import style from './Layout.css';

const Container = ({
	fixedWidth = "false",
	centered = "false",
	height = null, // null|number
	min100vh = "false",
	backgroundColor = "", // color
	grow = null, // null|true
	children
}) => {
	const classes = `
		${style.container}
		${style['fixedWidth_' + fixedWidth]}
		${style['centered_' + centered]}
		${style['min100vh_' + min100vh]}
		${style['grow_' + grow]}
		${protoStyle['backgroundColor' + backgroundColor.charAt(0).toUpperCase() + backgroundColor.slice(1)]}
	`;

	const inlineStyle = {
		height: height + "px",
	};

	return (
		<div className={classes} style={inlineStyle}>
			{children}
		</div>
	);
}

const Row = ({
	gutter = "md", // zero|xsm|sm|md|lg|xlg|xxlg|jumbo
	wrap = "false", // true|false|reverse
	align = "stretch", // stretch|center|start|end
	justify = "start", // start|end|center|between
	paddingTop = "zero", // zero|xsm|sm|md|lg|xlg|xxlg|jumbo
	paddingBottom = "zero", // zero|xsm|sm|md|lg|xlg|xxlg|jumbo
	marginTop = "zero", // zero|xsm|sm|md|lg|xlg|xxlg|jumbo
	marginBottom = "zero", // zero|xsm|sm|md|lg|xlg|xxlg|jumbo
	grow = null, // null|true
	children
}) => {
	const classes = `
		${style.row}
		${style['gutter_' + gutter]}
		${style['wrap_' + wrap]}
		${style['alignItems_' + align]}
		${style['justifyContent_' + justify]}
		${style['grow_' + grow]}
		${protoStyle['paddingTop' + paddingTop.charAt(0).toUpperCase() + paddingTop.slice(1)]}
		${protoStyle['paddingBottom' + paddingBottom.charAt(0).toUpperCase() + paddingBottom.slice(1)]}
		${protoStyle['marginTop' + marginTop.charAt(0).toUpperCase() + marginTop.slice(1)]}
		${protoStyle['marginBottom' + marginBottom.charAt(0).toUpperCase() + marginBottom.slice(1)]}
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
	grow = "auto", // null|number|auto
	children
}) => {
	const spacing = width ? width + "px" : ( percent ? percent + "%" : null );
	const flexBasis = spacing ? spacing : ( grow == "auto" ? "auto" : 0 );
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