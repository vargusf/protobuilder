import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button, ButtonAjax, Container, Col, Row } from '../../index';

import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

class PageButtonAjax extends Component {
	constructor(props) {
		super(props);

		this.state = {
			btnState: "default"
		};
	}

	doAjax() {
		console.info("processing");
		this.setState({btnState: "processing"});
		setTimeout(()=>{
			console.log('complete');
			this.setState({ btnState: "success" });
		},1000)
	}

	render() {
		return (
			<div>

				<h1 className={style.docHeading1}>Button Ajax</h1>

				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<Button onClick={() => { this.doAjax() }}>
							<ButtonAjax state={this.state.btnState}>Button Text</ButtonAjax>
						</Button>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Button>`}</div>
						<div>{`<ButtonAjax state="default|processing|success|fail">Button</ButtonAjax>`}</div>
						<div>{`</Button>`}</div>
					</div>
				</div>

			</div>
		)
	}
}

export default PageButtonAjax;
