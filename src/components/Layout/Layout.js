import React from 'react';
import { getResponsiveClasses } from '../../utils/utils';
import globalStyle from '../../styles/global.css';

const Container = ({
	height = "auto", // "[number(per|px)]"|"auto"|"min100vh", default: "auto"
	fixedWidth = "false", // "false"|"true", default: false
	align = "stretch", // "stretch"|"start"|"end"|"center", default: "stretch"
	justify = "start", // "start"|"end"|"center"|"between", default: "start"
	centered = "false",
	grow = "0", //  "0"|"1", default: "0"
	backgroundColor = "none", // "none"|config.color, default: "none",
	paddingTop = "zero", // config.size, default: "zero"
	paddingBottom = "zero", // config.size, default: "zero"
	paddingEnds, // config.size, default: "zero"
	className = "",
	children
}) => {

	const classes = [
		className,
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
		getResponsiveClasses('paddingTop', paddingTop),
		getResponsiveClasses('paddingBottom', paddingBottom),
		getResponsiveClasses('paddingEnds', paddingEnds),
		(centered === "true" && getResponsiveClasses('centered')),
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
	centered = "false",
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
		className,
		globalStyle.width100per,
		globalStyle.gutter,
		getResponsiveClasses('display', display),
		getResponsiveClasses('flex', wrap),
		getResponsiveClasses('flexGrow', grow),
		getResponsiveClasses('align', align),
		getResponsiveClasses('justify', justify),
		(centered === "true" && getResponsiveClasses('centered')),
		getResponsiveClasses('marginTop', marginTop),
		getResponsiveClasses('marginBottom', marginBottom),
		getResponsiveClasses('paddingTop', paddingTop),
		getResponsiveClasses('paddingBottom', paddingBottom),
		getResponsiveClasses('colDirection', direction),
		getResponsiveClasses('gutter', gutter),
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
	align = "stretch", // "stretch"|"start"|"end"|"center", default: "stretch"
	justify = "start", // "start"|"end"|"center"|"between", default: "start"
	centered = "false",
	direction = "row", //"row"|"column"|"rowReverse"|"columnReverse", default: "row"
	className = "",
	children
}) => {

	const classes = [
		className,
		getResponsiveClasses('flexWidth', width),
		getResponsiveClasses('marginTop', marginTop),
		getResponsiveClasses('marginBottom', marginBottom),
		getResponsiveClasses('paddingTop', paddingTop),
		getResponsiveClasses('paddingBottom', paddingBottom),
		getResponsiveClasses('display', display),
		getResponsiveClasses('align', align),
		getResponsiveClasses('justify', justify),
		(centered === "true" && getResponsiveClasses('centered')),
		getResponsiveClasses('flexDirection', direction),
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