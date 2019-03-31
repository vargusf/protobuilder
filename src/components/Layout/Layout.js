import React from 'react';
import { getResponsiveClasses } from '../../utils/utils';
import globalStyle from '../../styles/global.css';

const Container = ({
	height = "auto", // "[number(%|px)]"|"auto", default: "auto"
	fixedWidth = "false", // "false"|"true", default: false
	centered = "false", // "false"|"true", default: false
	grow = "false", //  "0"|"1", default: "0"
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
		${( grow == "1" ? getResponsiveClasses('flexGrow1') : getResponsiveClasses('flexGrow0') )}
		${className}
	`;

	return (
		<div className={classes}>
			{children}
		</div>
	);
}

const Row = ({
	wrap = "false", // "true"|"false"|"reverse", default: "true"
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
	className = "",
	children
}) => {

	const classes = ` 
		// ${globalStyle.displayFlex} 
		// ${globalStyle.flexDirectionColumn}
		// ${globalStyle.width100per}
		// ${globalStyle.positionRelative}
		// ${getResponsiveClasses('height', height)}
		// ${getResponsiveClasses('backgroundColor', backgroundColor)}
		// ${(fixedWidth == "true" ? getResponsiveClasses('fixedWidth') : '')}
		// ${(centered == "true" ? `${getResponsiveClasses('justifyCenter')} ${getResponsiveClasses('alignCenter')}` : '')}
		// ${(grow == "1" ? getResponsiveClasses('flexGrow1') : getResponsiveClasses('flexGrow0'))}
		${className}
	`;

	// const styles = size => {
	// 	return `
	// 		display: flex;
	// 		width: 100%;
	// 		flex-direction: ${getResponsiveObj(stack)[size] == "true" ? (getResponsiveObj(reverse)[size] == "true" ? "column-reverse" : "column") : (getResponsiveObj(reverse)[size] == "true" ? "row-reverse" : "row")};
	// 		flex-wrap: ${getResponsiveObj(wrap)[size] == "true" ? "wrap" : (getResponsiveObj(wrap)[size] == "false" ? "nowrap" : "wrap-reverse")} ;
	// 		flex-grow: ${getResponsiveObj(grow)[size]};
	// 		align-items: ${getResponsiveObj(align)[size] == "stretch" ? "stretch" : (getResponsiveObj(align)[size] == "start" ? "flex-start" : (getResponsiveObj(align)[size] == "end" ? "flex-end" : "center"))};
	// 		justify-content: ${getResponsiveObj(justify)[size] == "start" ? "flex-start" : (getResponsiveObj(justify)[size] == "end" ? "flex-end" : (getResponsiveObj(justify)[size] == "center" ? "center" : "space-between"))};
	// 		margin-top: ${getStyleConfig().size[getResponsiveObj(marginTop)[size]]};
	// 		margin-bottom: ${getStyleConfig().size[getResponsiveObj(marginBottom)[size]]};
	// 		padding-top: ${getStyleConfig().size[getResponsiveObj(paddingTop)[size]]};
	// 		padding-bottom: ${getStyleConfig().size[getResponsiveObj(paddingBottom)[size]]};
	// 		> * { 
	// 			padding-left: ${getResponsiveObj(stack)[size] == "true" ? 0 : getStyleConfig().size[getResponsiveObj(gutter)[size]]};
	// 			padding-right: ${getResponsiveObj(stack)[size] == "true" ? 0 : getStyleConfig().size[getResponsiveObj(gutter)[size]]};
	// 		}
	// 		> :first-child {
	// 			padding-left: ${getResponsiveObj(reverse)[size] == "true" ? (getResponsiveObj(stack)[size] == "true" ? 0 : getStyleConfig().size[getResponsiveObj(gutter)[size]]) : 0};
	// 			padding-right: ${getResponsiveObj(reverse)[size] == "true" ? 0 : (getResponsiveObj(stack)[size] == "true" ? 0 : getStyleConfig().size[getResponsiveObj(gutter)[size]])};
	// 		}
	// 		> :last-child { 
	// 			padding-left: ${getResponsiveObj(reverse)[size] == "true" ? 0 : (getResponsiveObj(stack)[size] == "true" ? 0 : getStyleConfig().size[getResponsiveObj(gutter)[size]])};
	// 			padding-right: ${getResponsiveObj(reverse)[size] == "true" ? (getResponsiveObj(stack)[size] == "true" ? 0 : getStyleConfig().size[getResponsiveObj(gutter)[size]]): 0};
	// 		}
	// 		> :only-child {
	// 			padding-left: 0;
	// 			padding-right: 0;
	// 		}
	// 	`;
	// }

	// const RowDiv = styled.div`
	// 	${styles("d")}
	// 	@media (max-width: ${getStyleConfig().breakpoint.lg}) { ${styles("lg")} }
	// 	@media (max-width: ${getStyleConfig().breakpoint.md}) { ${styles("md")} }
	// 	@media (max-width: ${getStyleConfig().breakpoint.sm}) { ${styles("sm")} }
	// 	@media (max-width: ${getStyleConfig().breakpoint.xsm}) { ${styles("xsm")} }
	// `;

	return (
		<div className={classes}>
			{/* <RowDiv className={`${className}`}> */}
				{children}
			{/* </RowDiv> */}
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
	
	// const styles = size => {
	// 	return `
	// 		display: ${getResponsiveObj(display)[size]}
	// 		flex-basis: ${getResponsiveObj(width)[size] == "auto" ? (getResponsiveObj(grow)[size] == 1 ? 0 : "auto") : (getResponsiveObj(width)[size] == "grow" ? 0 : getResponsiveObj(width)[size])}
	// 		min-width: ${(getResponsiveObj(width)[size] == "grow" || getResponsiveObj(width)[size] == "auto") ? 0 : getResponsiveObj(width)[size]};
	// 		flex-grow: ${getResponsiveObj(grow)[size]};
	// 		margin-top: ${getStyleConfig().size[getResponsiveObj(marginTop)[size]]};
	// 		margin-bottom: ${getStyleConfig().size[getResponsiveObj(marginBottom)[size]]};
	// 		padding-top: ${getStyleConfig().size[getResponsiveObj(paddingTop)[size]]};
	// 		padding-bottom: ${getStyleConfig().size[getResponsiveObj(paddingBottom)[size]]};
	// 	`;
	// }

	// const ColDiv = styled.div`
	// 	${styles("d")}
	// 	@media (max-width: ${getStyleConfig().breakpoint.lg}) { ${styles("lg")} }
	// 	@media (max-width: ${getStyleConfig().breakpoint.md}) { ${styles("md")} }
	// 	@media (max-width: ${getStyleConfig().breakpoint.sm}) { ${styles("sm")} }
	// 	@media (max-width: ${getStyleConfig().breakpoint.xsm}) { ${styles("xsm")} }
	// `;

	return (
		<div>
		{/* <ColDiv className={`${className}`}> */}
			{children}
		{/* </ColDiv> */}
		</div>
	);
}

export {
	Container,
	Row,
	Col,
};