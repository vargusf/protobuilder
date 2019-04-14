import React from 'react';

import style from './Form.css';

const Input = ({
	size = "md",
	placeholder = "Enter your email",
	label = "Email",
	type = "text", // "text"|"email"|"password"
	onChange = () => { },
	value
}) => {

	const classes = [
    style.input,
    style['size_' + size]
	].join(" ");
	
	return (
		<div className={classes}>
			<input type="text" value={value} placeholder={placeholder} onChange={onChange}/>
		</div>
	)
}

export {
	Input,
};