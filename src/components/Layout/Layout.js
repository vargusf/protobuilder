import React from 'react';
import styled from 'styled-components';

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
	align = "stretch", // start|end|center|stretch
	justify = "start", // start|end|center|between
	wrap = "false", // true|false|reverse
	marginTop = "zero", // zero|xsm|sm|md|lg|xlg|xxlg|jumbo
	marginBottom = "zero", // zero|xsm|sm|md|lg|xlg|xxlg|jumbo
	paddingTop = "zero", // zero|xsm|sm|md|lg|xlg|xxlg|jumbo
	paddingBottom = "zero", // zero|xsm|sm|md|lg|xlg|xxlg|jumbo
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
	width = null, // null|number(%|px)|(auto: if mobile)
	grow = "0", // 0|1
	children
}) => {
	let widthRes = {};
	if (width == null) {
		widthRes.d = null;
	}
	else if (typeof width == 'string') {
		widthRes = { d: width, xsm: width, sm: width, md: width, lg: width, xlg: width };
	} else if (typeof width == 'object') {
		widthRes.d = width.d == "auto" ? 0 : width.d;
		widthRes.xsm = width.xsm == "auto" ? 0 : (width.xsm ? width.xsm : (width.sm ? width.sm : (width.md ? width.md : (width.lg ? width.lg : (width.xlg ? width.xlg : width.d)))));
		widthRes.sm = width.sm == "auto" ? 0 : (width.sm ? width.sm : (width.md ? width.md : (width.lg ? width.lg : (width.xlg ? width.xlg : width.d))));
		widthRes.md = width.md == "auto" ? 0 : (width.md ? width.md : (width.lg ? width.lg : (width.xlg ? width.xlg : width.d)));
		widthRes.lg = width.lg == "auto" ? 0 : (width.lg ? width.lg : (width.xlg ? width.xlg : width.d));
		widthRes.xlg = width.xlg == "auto" ? 0 : (width.xlg ? width.xlg : width.d);
	}

	let growRes = {};
	if (typeof grow == 'string') {
		growRes = {
			d: grow,
			xsm: grow,
			sm: grow,
			md: grow,
			lg: grow,
			xlg: grow,

		};
	} else if (typeof grow == 'object') {
		growRes.d = grow.d;
		growRes.xsm = grow.xsm ? grow.xsm : (grow.sm ? grow.sm : (grow.md ? grow.md : (grow.lg ? grow.lg : (grow.xlg ? grow.xlg : grow.d))));
		growRes.sm = grow.sm ? grow.sm : (grow.md ? grow.md : (grow.lg ? grow.lg : (grow.xlg ? grow.xlg : grow.d)));
		growRes.md = grow.md ? grow.md : (grow.lg ? grow.lg : (grow.xlg ? grow.xlg : grow.d));
		growRes.lg = grow.lg ? grow.lg : (grow.xlg ? grow.xlg : grow.d);
		growRes.xlg = grow.xlg ? grow.xlg : grow.d;
	}

	const breakpoint = {
		xsm: getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-xsm'),
		sm: getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-sm'),
		md: getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-md'),
		lg: getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-lg'),
		xlg: getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-xlg'),
	}

	const ColDiv = styled.div`
		flex-basis: ${widthRes.d ? widthRes.d : (growRes.d == 1 ? 0 : "auto")};
		min-width: ${widthRes.d};
		flex-grow: ${growRes.d};

		@media (max-width: ${breakpoint.xlg}px) {
			flex-basis: ${widthRes.xlg ? widthRes.xlg : (growRes.xlg == 1 ? 0 : "auto")};
			min-width: ${widthRes.xlg};
			flex-grow: ${growRes.xlg};
		}
		
		@media (max-width: ${breakpoint.lg}px) {
			flex-basis: ${widthRes.lg ? widthRes.lg : (growRes.lg == 1 ? 0 : "auto")};
			min-width: ${widthRes.lg};
			flex-grow: ${growRes.lg};
		}
		
		@media (max-width: ${breakpoint.md}px) {
			flex-basis: ${widthRes.md ? widthRes.md : (growRes.md == 1 ? 0 : "auto")};
			min-width: ${widthRes.md};
			flex-grow: ${growRes.md};
		}

		@media (max-width: ${breakpoint.sm}px) {
			flex-basis: ${widthRes.sm ? widthRes.sm : (growRes.sm == 1 ? 0 : "auto")};
			min-width: ${widthRes.sm};
			flex-grow: ${growRes.sm};
		}

		@media (max-width: ${breakpoint.xsm}px) {
			flex-basis: ${widthRes.xsm ? widthRes.xsm : (growRes.xsm == 1 ? 0 : "auto")};
			min-width: ${widthRes.xsm};
			flex-grow: ${growRes.xsm};
		}
	`;

	return (
		<ColDiv >
			{children}
		</ColDiv>
	);
}

export {
	Container,
	Row,
	Col,
};