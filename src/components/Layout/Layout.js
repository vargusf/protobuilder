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
		${( fixedWidth == "true" ? getResponsiveClasses('fixedWidth') : '' )}
		${( centered == "true" ? `${getResponsiveClasses('justifyCenter')} ${getResponsiveClasses('alignCenter')}`: '' )}
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
	stack = "false", //"false"|"true", default: "false"
	reverse = "false", //"false"|"true", default: "false"
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
		${(wrap == "true" ? getResponsiveClasses('flexWrap') : (wrap == "reverse" ? getResponsiveClasses('flexWrapReverse') : getResponsiveClasses('flexNowrap')))}
		${getResponsiveClasses('flexGrow', grow)}
		${getResponsiveClasses('align', align)}
		${getResponsiveClasses('justify', justify)}
		${getResponsiveClasses('marginTop', marginTop)}
		${getResponsiveClasses('marginBottom', marginBottom)}
		${getResponsiveClasses('paddingTop', paddingTop)}
		${getResponsiveClasses('paddingBottom', paddingBottom)}
		${getResponsiveClasses('gutter', gutter)}
		${(
			stack == "true" ? 
				(
					`
						${getResponsiveClasses('gutterStacked')} 
						${(
							reverse == "true" ? 
								getResponsiveClasses('flexDirectionColumnReverse') : 
								getResponsiveClasses('flexDirectionColumn')
						)}
					`
				) : 
				(
					reverse == "true" ? 
						`
							${getResponsiveClasses('gutterReversed')}
							${getResponsiveClasses('flexDirectionRowReverse')}
						` : 
						`
							${getResponsiveClasses('gutter')}
							${getResponsiveClasses('flexDirectionRow')}
						`
				)
		)}
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

	console.log(getResponsiveClasses(grow));

	const classes = ` 
		${(display == "block" ? getResponsiveClasses('displayBlock') : getResponsiveClasses('displayNone'))}
		${getResponsiveClasses('flexWidth', width)}
		${(grow == "1" ? `${getResponsiveClasses('flexGrow1')} ${getResponsiveClasses('flexBasis0')} ` : getResponsiveClasses('flexGrow0'))}
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