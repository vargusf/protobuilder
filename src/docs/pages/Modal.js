import React, { Component } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalActions } from '../../index';

import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

class PageModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false
		};

	}

	toggleModal() {
		this.setState({
			active: !this.state.active
		})
	}

	render() {
		return (
			<div>

				<h1 className={style.docHeading1}>Modal</h1>

				<h2 className={style.docHeading2}>Default</h2>

				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<div><Button onClick={() => this.toggleModal()}>Modal</Button></div>
						{ 
							this.state.active &&
							<Modal bgClick={() => this.toggleModal()}>
								<ModalHeader>This is the modal header, it's optional</ModalHeader>
								<ModalBody>This is the modal body. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum velit vel erat egestas elementum.</ModalBody>
								<ModalActions>
									<div><Button fill="false" border="false" onClick={() => this.toggleModal()}>Cancel</Button></div>
									<div><Button onClick={() => this.toggleModal()}>Ok</Button></div>
								</ModalActions>
							</Modal>
						}
					</div>
					<div className={style.docboxCode}>
						<div>{`<div><Button onClick={() => this.toggleModal()}>Modal</Button></div>`}</div>
						<div>{`{ `}</div>
						<div>{`	this.state.active && `}</div>
						<div>{`	<Modal bgClick={() => this.toggleModal()}> `}</div>
						<div>{`			<ModalHeader>This is the modal header, it's optional</ModalHeader> `}</div>
						<div>{`			<ModalBody>This is the modal body. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum velit vel erat egestas elementum.</ModalBody> `}</div>
						<div>{`			<ModalActions> `}</div>
						<div>{`				<div><Button fill="false" border="false" onClick={() => this.toggleModal()}>Cancel</Button></div> `}</div>
						<div>{`				<div><Button onClick={() => this.toggleModal()}>Ok</Button></div> `}</div>
						<div>{`			</ModalActions> `}</div>
						<div>{`		</Modal> `}</div>
						<div>{`	} `}</div>
					</div>
				</div>

			</div>
		)
	}
}

export default PageModal;
