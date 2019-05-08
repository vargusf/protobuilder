import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './Form.css';

const Input = ({
	size = "md",
	state = null, // null|"success"|"error"|"warning"
	label,
	type = "text", // "text"|"email"|"password"
	helper,
	prepend,
	append,
	onChange,
	placeholder,
	tabindex,
	value, 
	name,
	maxlength,
}) => {

	const classes = [
		style.input,
    style['size_' + size],
    style['state_' + state],
	].join(" ");
	
	return (
		<div className={classes}>
			{label && <label className={style.label}>{label}</label>}
			<div className={style.field}>
				{prepend && <div className={style.prepend}>{prepend}</div>}
				<input maxLength={maxlength} name={name} type={type} value={value} placeholder={placeholder} onChange={onChange} tabIndex={tabindex} />
				{append && <div className={style.append}>{append}</div>}
			</div>
			{helper && <span className={style.helper}>{helper}</span>}
		</div>
	)
}

const Textarea = ({
	state = null, // null|"success"|"error"|"warning"
	rows = "3",
	label,
	helper,
	onChange,
	placeholder,
	tabindex,
	value,
	name,
	maxlength,
}) => {

	const classes = [
		style.textarea,
		style['rows_' + rows],
		style['state_' + state],
	].join(" ");
	return (
		<div className={classes}>
			{label && <label className={style.label}>{label}</label>}
			<div className={style.field}>
				<textarea maxLength={maxlength} name={name} placeholder={placeholder} onChange={onChange} tabIndex={tabindex}>{value}</textarea>
		 	</div>
			{helper && <span className={style.helper}>{helper}</span>}
		</div>
	)
}

const Checkbox = ({
	display = "block", // "block"|"inlineBlock"
	size = "md",
	state = null, // null|"success"|"error"|"warning"
	label,
	helper,
	onChange,
	tabindex,
	value,
	name,
}) => {

	const classes = [
		style.checkbox,
		style['checkbox_' + display],
		style['size_' + size],
		style['state_' + state],
	].join(" ");

	return (
		<div className={classes}>
			<label className={style.field}>
				<input type="checkbox" name={name} onChange={onChange} value={value} tabIndex={tabindex} />
				<div className={style.custom}>
					<div className={style.unchecked}>
						<FontAwesomeIcon icon={['far', 'square']} fixedWidth />
					</div>
					<div className={style.checked}>
						<FontAwesomeIcon icon={['fas', 'check-square']} fixedWidth />
					</div>
				</div>
				<span className={style.label}>{label}</span>
			</label>
			<span className={style.helper}>{helper}</span>
		</div>
	)
}

const CheckboxGroup = ({
}) => {

	return (
		<div>checkbox Group</div>
	)
}

const Switch = ({

}) => {

	return (
		<div>Switch</div>
	)
}

const SwitchGroup = ({
}) => {

	return (
		<div>Switch Group</div>
	)
}

export {
	Input,
	Textarea,
	Checkbox,
	CheckboxGroup,
	Switch,
	SwitchGroup,
};