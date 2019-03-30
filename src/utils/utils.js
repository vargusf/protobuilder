import globalStyle from '../styles/global.css';

const getResponsiveObj = param => {
	if (param == null) {
		return { d: null, xsm: null, sm: null, md: null, lg: null, xlg: null };
	} else if (typeof param == 'string') {
		return { d: param, xsm: param, sm: param, md: param, lg: param, xlg: param };
	} else if (typeof param == 'object') {
		return {
			d: param.d,
			xsm: param.xsm ? param.xsm : (param.sm ? param.sm : (param.md ? param.md : (param.lg ? param.lg : (param.xlg ? param.xlg : param.d)))),
			sm: param.sm ? param.sm : (param.md ? param.md : (param.lg ? param.lg : (param.xlg ? param.xlg : param.d))),
			md: param.md ? param.md : (param.lg ? param.lg : (param.xlg ? param.xlg : param.d)),
			lg: param.lg ? param.lg : (param.xlg ? param.xlg : param.d),
			xlg: param.xlg ? param.xlg : param.d,
		}
	}
}

const capitalizeFirstLetter = string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getResponsiveClasses = (style, property = null) => {
	if (property) {
		return `
			${globalStyle[`${style}${capitalizeFirstLetter(getResponsiveObj(property).d)}`]}
			${globalStyle[`${style}${capitalizeFirstLetter(getResponsiveObj(property).lg)}BpLg`]}
			${globalStyle[`${style}${capitalizeFirstLetter(getResponsiveObj(property).md)}BpMd`]}
			${globalStyle[`${style}${capitalizeFirstLetter(getResponsiveObj(property).sm)}BpSm`]}
			${globalStyle[`${style}${capitalizeFirstLetter(getResponsiveObj(property).xsm)}BpXsm`]}
		`
	} else {
		return `
			${globalStyle[`${style}`]}
			${globalStyle[`${style}BpLg`]}
			${globalStyle[`${style}BpMd`]}
			${globalStyle[`${style}BpSm`]}
			${globalStyle[`${style}BpXsm`]}
		`
	}
}

// export const getStyleConfig = () => {
// 	const getCssVar = cssVar => getComputedStyle(document.documentElement).getPropertyValue(cssVar);
// 	return {
// 		size: {
// 			zero:  getCssVar('--size-zero'),
// 			one:   getCssVar('--size-one'),
// 			two:   getCssVar('--size-two'),
// 			tiny:  getCssVar('--size-tiny'),
// 			xxsm:  getCssVar('--size-xxsm'),
// 			xsm:   getCssVar('--size-xsm'),
// 			sm:    getCssVar('--size-sm'),
// 			md:    getCssVar('--size-md'),
// 			lg:    getCssVar('--size-lg'),
// 			xlg:   getCssVar('--size-xlg'),
// 			xxlg:  getCssVar('--size-xxlg'),
// 			jumbo: getCssVar('--size-jumbo'),
// 		},
// 		color: {
// 			primary:        getCssVar('--color-primary'),
// 			primaryLight:   getCssVar('--color-primaryLight'),
// 			primaryDark:    getCssVar('--color-primaryDark'),
// 			secondary:      getCssVar('--color-secondary'),
// 			secondaryLight: getCssVar('--color-secondaryLight'),
// 			secondaryDark:  getCssVar('--color-secondaryDark'),
// 			tertiary:       getCssVar('--color-tertiary'),
// 			tertiaryLight:  getCssVar('--color-tertiaryLight'),
// 			tertiaryDark:   getCssVar('--color-tertiaryDark'),
// 			white:          getCssVar('--color-white'),
// 			black:          getCssVar('--color-black'),
// 			grey100:        getCssVar('--color-grey100'),
// 			grey200:        getCssVar('--color-grey200'),
// 			grey300:        getCssVar('--color-grey300'),
// 			grey400:        getCssVar('--color-grey400'),
// 			grey500:        getCssVar('--color-grey500'),
// 			grey600:        getCssVar('--color-grey600'),
// 			grey700:        getCssVar('--color-grey700'),
// 			grey800:        getCssVar('--color-grey800'),
// 			grey900:        getCssVar('--color-grey900'),
// 			red:            getCssVar('--color-red'),
// 			green:          getCssVar('--color-green'),
// 			blue:           getCssVar('--color-blue'),
// 			yellow:         getCssVar('--color-yellow'),
// 			cyan:           getCssVar('--color-cyan'),
// 			magenta:        getCssVar('--color-magenta'),
// 			orange:         getCssVar('--color-orange'),
// 			pink:           getCssVar('--color-pink'),
// 			purple:         getCssVar('--color-purple'),
// 			azure:          getCssVar('--color-azure'),
// 			teal:           getCssVar('--color-teal'),
// 			lime:           getCssVar('--color-lime'),
// 			info:           getCssVar('--color-info'),
// 			success:        getCssVar('--color-success'),
// 			warning:        getCssVar('--color-warning'),
// 			error:          getCssVar('--color-error'),
// 		},
// 		breakpoint: {
// 			xsm: getCssVar('--breakpoint-xsm'),
// 			sm:  getCssVar('--breakpoint-sm'),
// 			md:  getCssVar('--breakpoint-md'),
// 			lg:  getCssVar('--breakpoint-lg'),
// 		},
// 		fixedwidth: {
// 			maxWidth:    getCssVar('--fixedwidth-maxWidth'),
// 			sidePadding: getCssVar('--fixedwidth-sidePadding'),
// 		},
// 	};
// };