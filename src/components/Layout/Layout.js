import React from 'react';
import { getResponsiveClasses } from '../../utils/utils';
import globalStyle from '../../styles/global.css';

const Container = ({
	height = "auto", // "[number(per|px)]"|"auto"|"heightMin100vh", default: "auto"
	fixedWidth = "false", // "false"|"true", default: false
	align = "stretch", // "stretch"|"start"|"end"|"center", default: "stretch"
	justify = "start", // "start"|"end"|"center"|"between", default: "start"
	grow = "0", //  "0"|"1", default: "0"
	backgroundColor = "none", // "none"|config.color, default: "none",
	className = "",
	children
}) => {

	const classes = [
		globalStyle.displayFlex,
		globalStyle.flexDirectionColumn,
		globalStyle.width100per,
		globalStyle.positionRelative,
		getResponsiveClasses('height', height),
		getResponsiveClasses('backgroundColor', backgroundColor),
		getResponsiveClasses('fixedWidth', fixedWidth),
		getResponsiveClasses('flexGrow', grow),
		getResponsiveClasses('align', align),
		getResponsiveClasses('justify', justify),
		className,
	].join(' ');

	return (
		<div className={classes}>
			{children}
		</div>
	);
}

const Row = ({
	gutter = "md", // config.size, default: "md"
	align = "stretch", // "stretch"|"start"|"end"|"center", default: "stretch"
	justify = "start", // "start"|"end"|"center"|"between", default: "start"
	wrap = "nowrap", // "nowrap"|"wrap"|"reverse", default: "nowrap"
	direction = "row", //"row"|"column"|"rowReverse"|"columnReverse", default: "row"
	marginTop = "zero", // config.size, default: "zero"
	marginBottom = "zero", // config.size, default: "zero"
	paddingTop = "zero", // config.size, default: "zero"
	paddingBottom = "zero", // config.size, default: "zero"
	grow = "0", //  "0"|"1", default: "0"
	display = "flex", // "flex"|"none", default: block
	className = "",
	children
}) => {

	const classes = [
		globalStyle.width100per,
		globalStyle.gutter,
		getResponsiveClasses('display', display),
		getResponsiveClasses('flex', wrap),
		getResponsiveClasses('flexGrow', grow),
		getResponsiveClasses('align', align),
		getResponsiveClasses('justify', justify),
		getResponsiveClasses('marginTop', marginTop),
		getResponsiveClasses('marginBottom', marginBottom),
		getResponsiveClasses('paddingTop', paddingTop),
		getResponsiveClasses('paddingBottom', paddingBottom),
		getResponsiveClasses('colDirection', direction),
		getResponsiveClasses('gutter', gutter),
		className,
	].join(' ');

	return (
		<div className={classes}>
			{children}
		</div>
	);
}

const Col = ({
	width = "auto", // "auto"|"grow"|"even"|"[number(per|px)]", default: "auto"
	marginTop = "zero", // config.size, default: "zero"
	marginBottom = "zero", // config.size, default: "zero"
	paddingTop = "zero", // config.size, default: "zero"
	paddingBottom = "zero", // config.size, default: "zero"
	display = "block", // "block"|"none", default: block
	className = "",
	children
}) => {

	const classes = [
		getResponsiveClasses('display', display),
		getResponsiveClasses('flexWidth', width),
		getResponsiveClasses('marginTop', marginTop),
		getResponsiveClasses('marginBottom', marginBottom),
		getResponsiveClasses('paddingTop', paddingTop),
		getResponsiveClasses('paddingBottom', paddingBottom),
		className,
	].join(' ');
	
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