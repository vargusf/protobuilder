import React from 'react';
import style from './Progress.css';

const ProgressComponent = (
	{
		color = 'primary',
		value = 0,
	}
) => {

	return (
		<div className={`
			${style.progress}
			${style['color_' + color]}
		`}>
			<div className={style.inner} style={{ width: value+'%' }}></div>
		</div>
	)
};

export default ProgressComponent;