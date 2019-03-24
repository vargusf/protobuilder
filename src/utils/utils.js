export const getStyleConfig = () => {
	const docEl = getComputedStyle(document.documentElement);
	return {
		size: {
			zero: docEl.getPropertyValue('--size-zero'),
			one: docEl.getPropertyValue('--size-one'),
			two: docEl.getPropertyValue('--size-two'),
			tiny: docEl.getPropertyValue('--size-tiny'),
			xxsm: docEl.getPropertyValue('--size-xxsm'),
			xsm: docEl.getPropertyValue('--size-xsm'),
			sm: docEl.getPropertyValue('--size-sm'),
			md: docEl.getPropertyValue('--size-md'),
			lg: docEl.getPropertyValue('--size-lg'),
			xlg: docEl.getPropertyValue('--size-xlg'),
			xxlg: docEl.getPropertyValue('--size-xxlg'),
			jumbo: docEl.getPropertyValue('--size-jumbo'),
		},
		breakpoint: {
			xsm: docEl.getPropertyValue('--breakpoint-xsm'),
			sm: docEl.getPropertyValue('--breakpoint-sm'),
			md: docEl.getPropertyValue('--breakpoint-md'),
			lg: docEl.getPropertyValue('--breakpoint-lg'),
			xlg: docEl.getPropertyValue('--breakpoint-xlg'),
		},
	};
};

export const getResponsiveObj = param => {
	let gutterRes = {};
	if (typeof param == 'string') {
		gutterRes = {
			d: param,
			xsm: param,
			sm: param,
			md: param,
			lg: param,
			xlg: param
		};
	} else if (typeof param == 'object') {
		gutterRes.d = param.d;
		gutterRes.xsm = param.xsm ? param.xsm : (param.sm ? param.sm : (param.md ? param.md : (param.lg ? param.lg : (param.xlg ? param.xlg : param.d))));
		gutterRes.sm = param.sm ? param.sm : (param.md ? param.md : (param.lg ? param.lg : (param.xlg ? param.xlg : param.d)));
		gutterRes.md = param.md ? param.md : (param.lg ? param.lg : (param.xlg ? param.xlg : param.d));
		gutterRes.lg = param.lg ? param.lg : (param.xlg ? param.xlg : param.d);
		gutterRes.xlg = param.xlg ? param.xlg : param.d;
	}
	return gutterRes;
}