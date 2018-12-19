import React, { Component } from 'react';

class Modal extends Component {
	static defaultProps = {
		container: 'default', // (default|custom)
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
			Modal
			Modal--isActive-${this.state.isActive}
		`;

		const containerDefault = () => (
			<div className="Modal_containerDefault">
				<div>header</div>
				<div>body</div>
				<div>actions</div>
			</div>
		)

		return (
			<div className={classes}>
				<div className="Modal_bg" onClick={() => this.handleclick()}></div>
				<div className="Modal_container">
					{this.props.container != 'default' ? this.props.children : containerDefault()}
				</div>
			</div>
		)
	}
}

export default Modal;