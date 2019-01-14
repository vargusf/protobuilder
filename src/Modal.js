import React from 'react';

const Modal = ({
	type = 'default', // (default|custom)
	bgColor = 'white', // (white|black)
	bgClick = () => {},
	children
}) => {
	const classes = `
		Modal
		Modal--bg-${bgColor}
		Modal--type-${type}
	`;

	return (
		<div className={classes}>
			<div className="Modal_bg" onClick={bgClick}></div>
			<div className="Modal_container">
				{children}
			</div>
		</div>
	)
}

const ModalHeader = props => (
	<div className="Modal_header">{props.children}</div>
)

const ModalBody = props => (
	<div className="Modal_body">{props.children}</div>
)

const ModalActions = props => (
	<div className="Modal_actions">
		{props.children}
	</div>
)

export {
	Modal,
	ModalHeader,
	ModalBody,
	ModalActions
};