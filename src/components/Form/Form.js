import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './Form.css';

const TextInput = ({
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
		style.textInput,
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
	size = "md",
	state = null, // null|"success"|"error"|"warning"
	label,
	helper,
	onChange,
	tabindex,
	checked,
	value,
	name,
}) => {

	const classes = [
		style.checkbox,
		style['size_' + size],
		style['state_' + state],
	].join(" ");

	return (
		<div className={classes}>
			<label className={style.field}>
				<input type="checkbox" className={style.inputHidden} name={name} onChange={onChange} value={value} tabIndex={tabindex} />
				<div className={style.custom}>
					<div className={style.unchecked}>
						<FontAwesomeIcon icon={['far', 'square']} fixedWidth />
					</div>
					<div className={style.checked}>
						<FontAwesomeIcon icon={['fas', 'check-square']} fixedWidth />
					</div>
				</div>
				<span className={style.sublabel}>{label}</span>
			</label>
		</div>
	)
}

const Radio = ({
	size = "md",
	state = null, // null|"success"|"error"|"warning"
	label,
	helper,
	onChange,
	tabindex,
	checked,
	value,
	name,
}) => {

	const classes = [
		style.radio,
		style['size_' + size],
		style['state_' + state],
	].join(" ");

	return (
		<div className={classes}>
			<label className={style.field}>
				<input type="radio" className={style.inputHidden} name={name} onChange={onChange} value={value} tabIndex={tabindex} />
				<div className={style.custom}>
					<div className={style.unchecked}>
						<FontAwesomeIcon icon={['far', 'circle']} fixedWidth />
					</div>
					<div className={style.checked}>
						<FontAwesomeIcon icon={['fas', 'circle']} fixedWidth />
					</div>
				</div>
				<span className={style.sublabel}>{label}</span>
			</label>
		</div>
	)
}

const Select = ({
	display = "block", // "block"|"inlineBlock"
	size = "md",
	state = null, // null|"success"|"error"|"warning"
	label,
	helper,
	onChange,
	tabindex,
	value,
	name,
	children
}) => {

	const classes = [
		style.select,
		style['checkbox_' + display],
		style['size_' + size],
		style['state_' + state],
	].join(" ");

	return (
		<div className={classes}>
			<span className={style.label}>{label}</span>
			<div className={style.field}>
				<select name={name} onChange={onChange} tabIndex={tabindex} value={value}>
					{children}
				</select>
				<FontAwesomeIcon className={style.icon} icon={['fas', 'chevron-down']} fixedWidth />
			</div>
			<span className={style.helper}>{helper}</span>
		</div>
	)
}

const Option = ({
	selected = "false",
	value = "",
	children
}) => {

	return (
		<option value={value}>
			{children}
		</option>
	)
}

const FormItemGroup = ({
	label,
	helper,
	state = null,
	children
}) => {

	const classes = [
		style.formItemGroup,
		style['state_' + state],
	].join(" ");

	return (
		<div className={classes}>
			<span className={style.label}>{label}</span>
			<div>
				{children}
			</div>
			<span className={style.helper}>{helper}</span>
		</div>
	)
}

export {
	TextInput,
	Textarea,
	Checkbox,
	Radio,
	Select,
	Option,
	FormItemGroup,
};