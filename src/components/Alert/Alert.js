import React from 'react';
import style from './Alert.css';

const AlertComponenet = (
	{
		color = 'info',
		children
	}
) => {
	
	const alertColor = style['alert' + color.charAt(0).toUpperCase() + color.slice(1)];
	return (
		<div className={`
			${style.alert}
			${alertColor}
		`}>
			{children}
		</div>
	)
};

export default AlertComponenet;