export const getStyleConfig = () => {
	const docEl = getComputedStyle(document.documentElement);
	return {
		size: {
			zero:  docEl.getPropertyValue('--size-zero'),
			one:   docEl.getPropertyValue('--size-one'),
			two:   docEl.getPropertyValue('--size-two'),
			tiny:  docEl.getPropertyValue('--size-tiny'),
			xxsm:  docEl.getPropertyValue('--size-xxsm'),
			xsm:   docEl.getPropertyValue('--size-xsm'),
			sm:    docEl.getPropertyValue('--size-sm'),
			md:    docEl.getPropertyValue('--size-md'),
			lg:    docEl.getPropertyValue('--size-lg'),
			xlg:   docEl.getPropertyValue('--size-xlg'),
			xxlg:  docEl.getPropertyValue('--size-xxlg'),
			jumbo: docEl.getPropertyValue('--size-jumbo'),
		},
		color: {
			primary:        docEl.getPropertyValue('--color-primary'),
			primaryLight:   docEl.getPropertyValue('--color-primaryLight'),
			primaryDark:    docEl.getPropertyValue('--color-primaryDark'),
			secondary:      docEl.getPropertyValue('--color-secondary'),
			secondaryLight: docEl.getPropertyValue('--color-secondaryLight'),
			secondaryDark:  docEl.getPropertyValue('--color-secondaryDark'),
			tertiary:       docEl.getPropertyValue('--color-tertiary'),
			tertiaryLight:  docEl.getPropertyValue('--color-tertiaryLight'),
			tertiaryDark:   docEl.getPropertyValue('--color-tertiaryDark'),
			white:          docEl.getPropertyValue('--color-white'),
			black:          docEl.getPropertyValue('--color-black'),
			grey100:        docEl.getPropertyValue('--color-grey100'),
			grey200:        docEl.getPropertyValue('--color-grey200'),
			grey300:        docEl.getPropertyValue('--color-grey300'),
			grey400:        docEl.getPropertyValue('--color-grey400'),
			grey500:        docEl.getPropertyValue('--color-grey500'),
			grey600:        docEl.getPropertyValue('--color-grey600'),
			grey700:        docEl.getPropertyValue('--color-grey700'),
			grey800:        docEl.getPropertyValue('--color-grey800'),
			grey900:        docEl.getPropertyValue('--color-grey900'),
			red:            docEl.getPropertyValue('--color-red'),
			green:          docEl.getPropertyValue('--color-green'),
			blue:           docEl.getPropertyValue('--color-blue'),
			yellow:         docEl.getPropertyValue('--color-yellow'),
			cyan:           docEl.getPropertyValue('--color-cyan'),
			magenta:        docEl.getPropertyValue('--color-magenta'),
			orange:         docEl.getPropertyValue('--color-orange'),
			pink:           docEl.getPropertyValue('--color-pink'),
			purple:         docEl.getPropertyValue('--color-purple'),
			azure:          docEl.getPropertyValue('--color-azure'),
			teal:           docEl.getPropertyValue('--color-teal'),
			lime:           docEl.getPropertyValue('--color-lime'),
			info:           docEl.getPropertyValue('--color-info'),
			success:        docEl.getPropertyValue('--color-success'),
			warning:        docEl.getPropertyValue('--color-warning'),
			error:          docEl.getPropertyValue('--color-error'),
		},
		breakpoint: {
			xsm: docEl.getPropertyValue('--breakpoint-xsm'),
			sm:  docEl.getPropertyValue('--breakpoint-sm'),
			md:  docEl.getPropertyValue('--breakpoint-md'),
			lg:  docEl.getPropertyValue('--breakpoint-lg'),
			xlg: docEl.getPropertyValue('--breakpoint-xlg'),
		},
		fixedwidth: {
			maxWidth:    docEl.getPropertyValue('--fixedwidth-maxWidth'),
			sidePadding: docEl.getPropertyValue('--breakpoint-sidePadding'),
		},
	};
};

export const getResponsiveObj = param => {
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