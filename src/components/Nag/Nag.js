import React, { Component } from 'react';
import style from './Nag.css';

class Nag extends Component {
	static defaultProps = {
		color: 'primary',
		isDismissable: true
	}

	constructor(props) {
		super(props)
		this.state = {
			isActive: true
		}
	}

	handleclick() {
		this.setState({
			isActive: false
		})
	}

	render() {
		const classes = [
			style.Nag,
			style[`isActive_${this.props.isActive}`],
			style[`color_${this.props.color}`]
		].join(' ');

		return (
			<div className={classes}>
				{this.props.isDismissable && <a onClick={ () => this.handleclick() } className={style.closeBtn}>X</a>}
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Nag;