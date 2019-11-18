import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import style from './ButtonAjax.css';
import global from '../../styles/global.css';

class ButtonAjax extends Component {
	constructor(props) {
		super(props)
		this.ajaxBtn = React.createRef()

		this.state = {
			width: null
		};
	}

	componentDidMount() {
		this.setState({ width: this.ajaxBtn.current.offsetWidth })
	}

	render() {
		if (this.props.state == "processing") {
			return (
				<div style={{ width: `${this.state.width}px` }}>
					<div className={style.spinner}>
						<div className={style.rect1}></div>
						<div className={style.rect2}></div>
						<div className={style.rect3}></div>
						<div className={style.rect4}></div>
					</div>
				</div>
			)
		} else if (this.props.state == "success") {
			return (
				<div className={global.positionRelative} style={{ width: `${this.state.width}px` }}>
					<div className={style.checkmark}></div>
				</div>
			)
		} else if (this.props.state == "error") {
			return (
				<div className={global.positionRelative} style={{ width: `${this.state.width}px` }}>
					<div className={style.times}></div>
				</div>
			)
		} else {
			return <div ref={this.ajaxBtn}>{this.props.children}</div>
		}
	}
}

export default ButtonAjax;