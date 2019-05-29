import React from 'react';
import { Link } from 'react-router-dom';

import style from './Button.css';

const Button = ({
	type = 'button', // "link"|"href"|"button"
	fill = 'true',
	color = 'primary',
	border = 'true',
	size = 'md',
	paddingEnds = 'false',
	paddingSides = 'false',
	fontsize = 'false',
	letterSpacing = 'false',
	fullwidth = 'false',
	rounded = 'false',
	disabled = 'false',
	circle = 'false',
	transform = 'false',
	weight = 'false',
	to = null,
	target = '_self',
	tabindex= '',
	onClick = () => { },
	className = "",
	children
}) => {
	const classes = [
		className,
		style.button,
		style['color_' + color],
		style['border_' + border],
		style['fill_' + fill],
		style['size_' + size],
		paddingEnds != "false" ? style['paddingEnds_' + paddingEnds] : '',
		paddingSides != "false" ? style['paddingSides_' + paddingSides] : '',
		fontsize != "false" ? style['fontsize_' + fontsize] : '',
		letterSpacing != "false" ? style['letterSpacing_' + letterSpacing] : '',
		rounded != "false" ? style['rounded_' + rounded] : '',
		fullwidth != "false" ? style['fullwidth_' + fullwidth] : '',
		disabled != "false" ? style['disabled_' + disabled] : '',
		circle != "false" ? style['circle_' + circle] : '',
		transform != "false" ? style['transform_' + transform] : '',
		weight != "false" ? style['weight_' + weight] : '',
	].join(' ');

	if (disabled == "true") onClick = null;

	if (type == "link") {
		return <Link to={to} onClick={onClick} className={classes} tabIndex={tabindex}>{children}</Link>
	} else if (type == "href") {
		return <a href={to} onClick={onClick} className={classes} target={target} tabIndex={tabindex}>{children}</a>
	} else {
		return <button onClick={onClick} className={classes} type={type} tabIndex={tabindex}>{children}</button>
	}
}

export default Button;