import React from 'react';
import styled from 'styled-components';
import { getStyleConfig, getResponsiveObj } from '../../utils/utils';

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
	wrap = "false", // "true"|"false"|"reverse", default: "false"
	grow = "0", //  "0"|"1", default: "0"
	align = "stretch", // "stretch"|"start"|"end"|"center", default: "stretch"
	justify = "start", // "start"|"end"|"center"|"between", default: "start"
	marginTop = "zero", // config.size, default: "zero"
	marginBottom = "zero", // config.size, default: "zero"
	paddingTop = "zero", // config.size, default: "zero"
	paddingBottom = "zero", // config.size, default: "zero"
	gutter = "md", // config.size, default: "md"
	children
}) => {

	const ColStyles = size => {
		return `
			display: flex;
			width: 100%;
			flex-wrap: ${getResponsiveObj(wrap)[size] == "true" ? "wrap" : (getResponsiveObj(wrap)[size] == "false" ? "nowrap" : "wrap-reverse")} ;
			flex-grow: ${getResponsiveObj(grow)[size]};
			align-items: ${getResponsiveObj(align)[size] == "stretch" ? "stretch" : (getResponsiveObj(align)[size] == "start" ? "flex-start" : (getResponsiveObj(align)[size] == "end" ? "flex-end" : "center"))};
			justify-content: ${getResponsiveObj(justify)[size] == "start" ? "flex-start" : (getResponsiveObj(justify)[size] == "end" ? "flex-end" : (getResponsiveObj(justify)[size] == "center" ? "center" : "space-between"))};
			margin-top: ${getStyleConfig().size[getResponsiveObj(marginTop)[size]]};
			margin-bottom: ${getStyleConfig().size[getResponsiveObj(marginBottom)[size]]};
			padding-top: ${getStyleConfig().size[getResponsiveObj(paddingTop)[size]]};
			padding-bottom: ${getStyleConfig().size[getResponsiveObj(paddingBottom)[size]]};
			> * { padding-left: ${getStyleConfig().size[getResponsiveObj(gutter)[size]]}; padding-right: ${getStyleConfig().size[getResponsiveObj(gutter)[size]]}; }
			> :first-child { padding-left: 0; }
			> :last-child { padding-right: 0; }
		`;
	}

	const RowDiv = styled.div`
		${ColStyles("d")}
		@media (max-width: ${getStyleConfig().breakpoint.xlg}) { ${ColStyles("xlg")} }
		@media (max-width: ${getStyleConfig().breakpoint.lg}) { ${ColStyles("lg")} }
		@media (max-width: ${getStyleConfig().breakpoint.md}) { ${ColStyles("md")} }
		@media (max-width: ${getStyleConfig().breakpoint.sm}) { ${ColStyles("sm")} }
		@media (max-width: ${getStyleConfig().breakpoint.xsm}) { ${ColStyles("xsm")} }
	`;

	return (
		<RowDiv>
			{children}
		</RowDiv>
	);
}

const Col = ({
	width = null, // null|"[number(%|px)]"|("auto":  mobile), default: null
	grow = "0", // "0"|"1", default: "0"
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
		widthRes.xsm = width.xsm == "auto" ? 0 : (width.xsm ? width.xsm : (width.sm == "auto" ? 0 : (width.sm ? width.sm : (width.md == "auto" ? 0 : (width.md ? width.md : (width.lg == "auto" ? 0 : (width.lg ? width.lg : (width.xlg == "auto" ? 0 : (width.xlg ? width.xlg : width.d)))))))));
		widthRes.sm = width.sm == "auto" ? 0 : (width.sm ? width.sm : (width.md == "auto" ? 0 : (width.md ? width.md : (width.lg == "auto" ? 0 : (width.lg ? width.lg : (width.xlg == "auto" ? 0 : (width.xlg ? width.xlg : width.d)))))));
		widthRes.md = width.md == "auto" ? 0 : (width.md ? width.md : (width.lg == "auto" ? 0 : (width.lg ? width.lg : (width.xlg == "auto" ? 0 : (width.xlg ? width.xlg : width.d)))));
		widthRes.lg = width.lg == "auto" ? 0 : (width.lg ? width.lg : (width.xlg == "auto" ? 0 : (width.xlg ? width.xlg : width.d)));
		widthRes.xlg = width.xlg == "auto" ? 0 : (width.xlg ? width.xlg : width.d);
	}

	const ColStyles = size => {
		return `
			flex-basis: ${widthRes[size] ? widthRes[size] : (getResponsiveObj(grow)[size] == 1 ? 0 : "auto")};
			min-width: ${widthRes[size]};
			flex-grow: ${getResponsiveObj(grow)[size]};
		`;
	}

	const ColDiv = styled.div`
		${ColStyles("d")}
		@media (max-width: ${getStyleConfig().breakpoint.xlg}) { ${ColStyles("xlg")} }
		@media (max-width: ${getStyleConfig().breakpoint.lg}) { ${ColStyles("lg")} }
		@media (max-width: ${getStyleConfig().breakpoint.md}) { ${ColStyles("md")} }
		@media (max-width: ${getStyleConfig().breakpoint.sm}) { ${ColStyles("sm")} }
		@media (max-width: ${getStyleConfig().breakpoint.xsm}) { ${ColStyles("xsm")} }
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