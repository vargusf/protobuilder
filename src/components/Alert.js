import React from "react";

const AlertComponenet = (
	{
		color = 'info',
		children
	}
) => (
		<div className={"Alert Alert--" + color}>{children}</div>
	);

export default AlertComponenet;