import React from 'react';
import { getResponsiveClasses } from '../../utils/utils';
import globalStyle from '../../styles/global.css';

const Container = ({
	height = "auto", // "[number(%|px)]"|"auto", default: "auto"
	fixedWidth = "false", // "false"|"true", default: false
	centered = "false", // "false"|"true", default: false
	grow = "0", //  "0"|"1", default: "0"
	backgroundColor = "none", // "none"|config.size, default: "none",
	className = "",
	children
}) => {

	const classes = ` 
		${globalStyle.displayFlex} 
		${globalStyle.flexDirectionColumn}
		${globalStyle.width100per}
		${globalStyle.positionRelative}
		${getResponsiveClasses('height', height)}
		${getResponsiveClasses('backgroundColor', backgroundColor)}
		${getResponsiveClasses('fixedWidth', fixedWidth)}
		${getResponsiveClasses('centered', centered)}
		${getResponsiveClasses('flexGrow', grow)}
		${className}
	`;

	return (
		<div className={classes}>
			{children}
		</div>
	);
}

const Row = ({
	direction = "row", //"row"|"column"|"row-reverse"|"column-reverse", default: "row"
	wrap = "false", // "true"|"false"|"reverse", default: "false"
	grow = "0", //  "0"|"1", default: "0"
	align = "stretch", // "stretch"|"start"|"end"|"center", default: "stretch"
	justify = "start", // "start"|"end"|"center"|"between", default: "start"
	marginTop = "zero", // config.size, default: "zero"
	marginBottom = "zero", // config.size, default: "zero"
	paddingTop = "zero", // config.size, default: "zero"
	paddingBottom = "zero", // config.size, default: "zero"
	gutter = "md", // config.size, default: "md"
	className = "",
	children
}) => {

	const classes = ` 
		${globalStyle.displayFlex} 
		${globalStyle.width100per}
		${globalStyle.gutter}
		${getResponsiveClasses('flex', wrap)}
		${getResponsiveClasses('flexGrow', grow)}
		${getResponsiveClasses('align', align)}
		${getResponsiveClasses('justify', justify)}
		${getResponsiveClasses('marginTop', marginTop)}
		${getResponsiveClasses('marginBottom', marginBottom)}
		${getResponsiveClasses('paddingTop', paddingTop)}
		${getResponsiveClasses('paddingBottom', paddingBottom)}
		${getResponsiveClasses('colDirection', direction)}
		${getResponsiveClasses('gutter', gutter)}
		${className}
	`;

	return (
		<div className={classes}>
			{children}
		</div>
	);
}

const Col = ({
	display = "block", // "block"|"none", default: block
	width = "auto", // "[number(%|px)]"|"auto"|"grow", default: "auto"
	grow = "0", // "0"|"1", default: "0"
	marginTop = "zero", // config.size, default: "zero"
	marginBottom = "zero", // config.size, default: "zero"
	paddingTop = "zero", // config.size, default: "zero"
	paddingBottom = "zero", // config.size, default: "zero"
	className = "",
	children
}) => {

	const classes = ` 
		${getResponsiveClasses('display', display)}
		${getResponsiveClasses('flexWidth', width)}
		${getResponsiveClasses('flexGrow', grow)}
		${getResponsiveClasses('marginTop', marginTop)}
		${getResponsiveClasses('marginBottom', marginBottom)}
		${getResponsiveClasses('paddingTop', paddingTop)}
		${getResponsiveClasses('paddingBottom', paddingBottom)}
		${className}
	`;
	
	return (
		<div className={classes}>
			{children}
		</div>
	);
}

export {
	Container,
	Row,
	Col,
};