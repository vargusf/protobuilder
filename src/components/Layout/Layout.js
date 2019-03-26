import React from 'react';
import styled from 'styled-components';
import { getStyleConfig, getResponsiveObj } from '../../utils/utils';

const Container = ({
	height = "auto", // "[number(%|px)]"|"auto", default: "auto"
	fixedWidth = "false", // "false"|"true", default: false
	centered = "false", // "false"|"true", default: false
	min100vh = "false", // "false"|"true", default: false
	grow = "0", //  "0"|"1", default: "0"
	backgroundColor = "none", // "none"|config.size, default: "none"
	children
}) => {

	const styles = size => {
		return `
			display: flex; 
			flex-direction: column; 
			width: 100%; 
			position: relative;
			height: ${getResponsiveObj(height)[size] == "auto" ? "auto" : getResponsiveObj(height)[size]};
			max-width: ${getResponsiveObj(fixedWidth)[size] == "true" ? getStyleConfig().fixedwidth.maxWidth : "none"};
			margin-left: ${getResponsiveObj(fixedWidth)[size] == "true" ? "auto" : 0}; 
			margin-right: ${getResponsiveObj(fixedWidth)[size] == "true" ? "auto" : 0}; 
			padding-left: ${getResponsiveObj(fixedWidth)[size] == "true" ? getStyleConfig().fixedwidth.sidePadding : 0};
			padding-right: ${getResponsiveObj(fixedWidth)[size] == "true" ? getStyleConfig().fixedwidth.sidePadding : 0};
			justify-content: ${getResponsiveObj(centered)[size] == "true" ? "center" : "flex-start"};
			align-items: ${getResponsiveObj(centered)[size] == "true" ? "center" : "stretch"};
			min-height: ${getResponsiveObj(min100vh)[size] == "true" ? "100vh" : 0};
			flex-grow: ${getResponsiveObj(grow)[size]};
			background-color: ${getResponsiveObj(backgroundColor)[size] == "none" ? "transparent" : getStyleConfig().color[getResponsiveObj(backgroundColor)[size]] };
		`;
	}

	const ContainerDiv = styled.div`
		${styles("d")}
		@media (max-width: ${getStyleConfig().breakpoint.lg}) { ${styles("lg")} }
		@media (max-width: ${getStyleConfig().breakpoint.md}) { ${styles("md")} }
		@media (max-width: ${getStyleConfig().breakpoint.sm}) { ${styles("sm")} }
		@media (max-width: ${getStyleConfig().breakpoint.xsm}) { ${styles("xsm")} }
	`;

	return (
		<ContainerDiv>
			{children}
		</ContainerDiv>
	);
}

const Row = ({
	wrap = "true", // "true"|"false"|"reverse", default: "true"
	grow = "0", //  "0"|"1", default: "0"
	stack = "false", //"false"|"true", default: "false"
	reverse = "false", //"false"|"true", default: "false"
	align = "stretch", // "stretch"|"start"|"end"|"center", default: "stretch"
	justify = "start", // "start"|"end"|"center"|"between", default: "start"
	marginTop = "zero", // config.size, default: "zero"
	marginBottom = "zero", // config.size, default: "zero"
	paddingTop = "zero", // config.size, default: "zero"
	paddingBottom = "zero", // config.size, default: "zero"
	gutter = "md", // config.size, default: "md"
	children
}) => {

	const styles = size => {
		return `
			display: flex;
			width: 100%;
			flex-direction: ${getResponsiveObj(stack)[size] == "true" ? (getResponsiveObj(reverse)[size] == "true" ? "column-reverse" : "column") : (getResponsiveObj(reverse)[size] == "true" ? "row-reverse" : "row")};
			flex-wrap: ${getResponsiveObj(wrap)[size] == "true" ? "wrap" : (getResponsiveObj(wrap)[size] == "false" ? "nowrap" : "wrap-reverse")} ;
			flex-grow: ${getResponsiveObj(grow)[size]};
			align-items: ${getResponsiveObj(align)[size] == "stretch" ? "stretch" : (getResponsiveObj(align)[size] == "start" ? "flex-start" : (getResponsiveObj(align)[size] == "end" ? "flex-end" : "center"))};
			justify-content: ${getResponsiveObj(justify)[size] == "start" ? "flex-start" : (getResponsiveObj(justify)[size] == "end" ? "flex-end" : (getResponsiveObj(justify)[size] == "center" ? "center" : "space-between"))};
			margin-top: ${getStyleConfig().size[getResponsiveObj(marginTop)[size]]};
			margin-bottom: ${getStyleConfig().size[getResponsiveObj(marginBottom)[size]]};
			padding-top: ${getStyleConfig().size[getResponsiveObj(paddingTop)[size]]};
			padding-bottom: ${getStyleConfig().size[getResponsiveObj(paddingBottom)[size]]};
			> * { 
				padding-left: ${getResponsiveObj(stack)[size] == "true" ? 0 : getStyleConfig().size[getResponsiveObj(gutter)[size]]};
				padding-right: ${getResponsiveObj(stack)[size] == "true" ? 0 : getStyleConfig().size[getResponsiveObj(gutter)[size]]};
			}
			> :first-child {
				padding-left: ${getResponsiveObj(reverse)[size] == "true" ? (getResponsiveObj(stack)[size] == "true" ? 0 : getStyleConfig().size[getResponsiveObj(gutter)[size]]) : 0};
				padding-right: ${getResponsiveObj(reverse)[size] == "true" ? 0 : (getResponsiveObj(stack)[size] == "true" ? 0 : getStyleConfig().size[getResponsiveObj(gutter)[size]])};
			}
			> :last-child { 
				padding-left: ${getResponsiveObj(reverse)[size] == "true" ? 0 : (getResponsiveObj(stack)[size] == "true" ? 0 : getStyleConfig().size[getResponsiveObj(gutter)[size]])};
				padding-right: ${getResponsiveObj(reverse)[size] == "true" ? (getResponsiveObj(stack)[size] == "true" ? 0 : getStyleConfig().size[getResponsiveObj(gutter)[size]]): 0};
			}
		`;
	}

	const RowDiv = styled.div`
		${styles("d")}
		@media (max-width: ${getStyleConfig().breakpoint.lg}) { ${styles("lg")} }
		@media (max-width: ${getStyleConfig().breakpoint.md}) { ${styles("md")} }
		@media (max-width: ${getStyleConfig().breakpoint.sm}) { ${styles("sm")} }
		@media (max-width: ${getStyleConfig().breakpoint.xsm}) { ${styles("xsm")} }
	`;

	return (
		<RowDiv>
			{children}
		</RowDiv>
	);
}

const Col = ({
	width = "auto", // "[number(%|px)]"|"auto"|"grow", default: "auto"
	grow = "0", // "0"|"1", default: "0"
	children
}) => {
	
	const styles = size => {
		return `
			flex-basis: ${getResponsiveObj(width)[size] == "auto" ? (getResponsiveObj(grow)[size] == 1 ? 0 : "auto") : (getResponsiveObj(width)[size] == "grow" ? 0 : getResponsiveObj(width)[size])}
			min-width: ${(getResponsiveObj(width)[size] == "grow" || getResponsiveObj(width)[size] == "auto") ? 0 : getResponsiveObj(width)[size]};
			flex-grow: ${getResponsiveObj(grow)[size]};
		`;
	}

	const ColDiv = styled.div`
		${styles("d")}
		@media (max-width: ${getStyleConfig().breakpoint.lg}) { ${styles("lg")} }
		@media (max-width: ${getStyleConfig().breakpoint.md}) { ${styles("md")} }
		@media (max-width: ${getStyleConfig().breakpoint.sm}) { ${styles("sm")} }
		@media (max-width: ${getStyleConfig().breakpoint.xsm}) { ${styles("xsm")} }
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