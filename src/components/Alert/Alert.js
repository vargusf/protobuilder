import React from 'react';
import style from './Alert.css';

const AlertComponenet = (
	{
		color = 'info',
		children
	}
) => {
		
	return (
		<div className={`
			${style.alert}
			${style['alert_' + color]}
		`}>
			{children}
		</div>
	)
};

export default AlertComponenet;