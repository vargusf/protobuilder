import React from 'react';

const Modal = ({
	container = 'default', // (default|custom)
	onEventClose = () => {},
	onEventAction1 = () => {},
}) => {
	const classes = `
		Modal
	`;

	const containerDefault = () => (
		<div className="Modal_containerDefault">
			<div>header</div>
			<div>body</div>
			<div>
				<button onClick={onEventClose}>cancel</button>
				<button onClick={onEventAction1}>ok</button>
			</div>
		</div>
	);

	return (
		<div className={classes}>
			<div className="Modal_bg" onClick={onEventClose}></div>
			<div className="Modal_container">
				{container != 'default' ? children : containerDefault()}
			</div>
		</div>
	)
}

export default Modal;