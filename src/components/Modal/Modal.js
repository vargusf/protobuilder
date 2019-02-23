import React from 'react';
import style from './Modal.css';

const Modal = ({
	type = 'default',
	bgClick = () => {},
	children
}) => {
	return (
		<div className={style.modal}>
			<div className={style.modalbg} onClick={bgClick}></div>
			<div className={` ${style.container} ${style['type_' + type]} `}>
				{children}
			</div>
		</div>
	)
}

const ModalHeader = props => (
	<div className={style.header}>{props.children}</div>
)

const ModalBody = props => (
	<div className={style.body}>{props.children}</div>
)

const ModalActions = props => (
	<div className={style.actions}>
		{props.children}
	</div>
)

export {
	Modal,
	ModalHeader,
	ModalBody,
	ModalActions
};