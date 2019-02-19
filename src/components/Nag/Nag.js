import React, { Component } from 'react';
import style from './Nag.css';

class Nag extends Component {
	static defaultProps = {
		color: 'primary',
		isDismissable: 'true'
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
		const classes = `
			Nag
			Nag--isActive-${this.state.isActive}
			Nag--color-${this.props.color}
		`;

		return (
			<div className={classes}>
				{this.props.isDismissable && <a onClick={ () => this.handleclick() } className="Nag__closeBtn"><i className="material-icons">close</i></a>}
				{this.props.children}
			</div>
		)
	}
}

export default Nag;