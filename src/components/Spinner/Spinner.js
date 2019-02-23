import React from 'react';
import style from './Spinner.css';

const Spinner = ({
	size = 'md',
	color = 'primary',
}) => {

	const classes = `
		${style.spinner}
		${style['color_' + color]}
		${style['size_' + size]}
	`;

	return (
		<div className={classes}>
			<svg className={style.svg} viewBox="25 25 50 50">
				<circle className={style.path} cx="50" cy="50" r="20" fill="none" />
			</svg>
		</div>
	);

}

export default Spinner;