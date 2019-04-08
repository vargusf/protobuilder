import React from 'react';
import style from './Progress.css';

const ProgressComponent = (
	{
		type = 'info',
		value = 0,
		message = ""
	}
) => {
	if (type == "error") {
		value = 10;
	} else if (type == "success") {
		value = 100;
	}

	return (
		<div className={`
			${style.progress}
			${style['color_' + type]}
		`}>
			<div className={style.bar_bg}></div>
			<div className={style.bar} style={{ width: value+'%' }}></div>
			{ message != "" && <div className={style.message}>{message}</div> }
		</div>
	)
};

export default ProgressComponent;