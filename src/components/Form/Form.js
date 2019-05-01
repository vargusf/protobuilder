import React from 'react';

import style from './Form.css';

const Input = ({
	size = "md",
	placeholder = "",
	state = null, // null|"success"|"error"|"warning"
	label = "",
	type = "text", // "text"|"email"|"password"
	helper = "",
	tabindex = "",
	prepend = "",
	append = "",
	onChange = () => { },
	value, 
	name,
}) => {

	const classes = [
		style.input,
    style['size_' + size],
    style['state_' + state],
	].join(" ");
	
	return (
		<div className={classes}>
			<label className={style.label}>{label}</label>
			<div className={style.field}>
				{prepend && <div className={style.prepend}>{prepend}</div>}
				<input name={name} type={type} value={value} placeholder={placeholder} onChange={onChange} tabIndex={tabindex} />
				{append && <div className={style.append}>{append}</div>}
			</div>
			<span className={style.helper}>{helper}</span>
		</div>
	)
}

const Textarea = ({
// 	size = "md",
// 	placeholder = "Enter your email",
// 	state = null, // null|"success"|"error"|"warning"
// 	label = "",
// 	type = "text", // "text"|"email"|"password"
// 	helper = "",
// 	tabindex = "",
// 	labelInline = "", // should be mobile
// 	labelWidth = "", // should be mobile
// 	prepend = "",
// 	append = "",
// 	onChange = () => { },
// 	value
}) => {

// 	const classes = [
// 		style.input,
//     style['size_' + size],
//     style['state_' + state],
// 	].join(" ");
	
// 	return (
// 		<div className={classes}>
// 			<label className={style.label}>{label}</label>
// 			<div className={style.field}>
// 			<div className={prepend}></div>
// 				<input type={type} value={value} placeholder={placeholder} onChange={onChange} tabIndex={tabindex} />
// 				<div className={append}></div>
// 			</div>
// 			<span className={style.helper}>{helper}</span>
// 		</div>
// 	)
}

export {
	Input,
	Textarea,
};