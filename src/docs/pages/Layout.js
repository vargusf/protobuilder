import React, { Component } from 'react';

import { Container, Row, Col } from '../../index';

import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

class PageLayout extends Component {
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
				<h1 className={style.docHeading1}>Layout</h1>
				<h2 className={style.docHeading2}>Container</h2>

				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<h3 className={style.docHeading3}>Fixed Width</h3>
						<Container fixedWidth="true">
							<div className={style.itemTint}>fixedWidth</div>
						</Container>
						<h3 className={` ${style.docHeading3} ${protoStyle.marginTopMd} `}>Centered</h3>
						<Container centered="true">
							<div className={style.itemTint}>centered</div>
						</Container>
						<h3 className={` ${style.docHeading3} ${protoStyle.marginTopMd} `}>Height</h3>
						<Container height="200">
							<div className={style.itemTint}>height 200px</div>
						</Container>
						<h3 className={` ${style.docHeading3} ${protoStyle.marginTopMd} `}>Min Height 100vh</h3>
						<Container min100vh="true">
							<div className={style.itemTint}>min100vh</div>
						</Container>
						<h3 className={` ${style.docHeading3} ${protoStyle.marginTopMd} `}>Background Color</h3>
						<Container backgroundColor="primary" height="100">
							<div className={style.itemTintColored}>primary</div>
						</Container>
						<h3 className={` ${style.docHeading3} ${protoStyle.marginTopMd} `}>Grow</h3>
						<Container grow="true">
							<div className={style.itemTint}>grow</div>
						</Container>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Container fixedWidth="true"></Container>`}</div>
						<div>{`<Container centered="true"></Container>`}</div>
						<div>{`<Container height="200"></Container>`}</div>
						<div>{`<Container min100vh="true"></Container>`}</div>
						<div>{`<Container backgroundColor="primary"></Container>`}</div>
						<div>{`<Container grow="true"></Container>`}</div>
					</div>
				</div>

				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<Container>
							<Row>
								<Col width="100">
									<div className={style.colTint}>1</div>
								</Col>
								<Col>
									<div className={style.colTint}>2</div>
								</Col>
							</Row>

							<Row justify="between">
								<Col grow="auto">
									<div className={style.colTint}>1</div>
								</Col>
								<Col grow="auto">
									<div className={style.colTint}>2</div>
								</Col>
							</Row>

							<Row justify="end">
								<Col grow="auto">
									<div className={style.colTint}>1</div>
								</Col>
							</Row>

							<Row>
								<Col>
									<div className={style.colTint}>1</div>
								</Col>
								<Col>
									<div className={style.colTint}>2</div>
								</Col>
								<Col>
									<div className={style.colTint}>3</div>
								</Col>
							</Row>

							<Row>
								<Col percent="33.33">
									<div className={style.colTint}>1</div>
								</Col>
								<Col percent="66.66">
									<div className={style.colTint}>2</div>
								</Col>
							</Row>

							<Row>
								<Col percent="25">
									<div className={style.colTint}>1</div>
								</Col>
								<Col grow="2">
									<div className={style.colTint}>2</div>
								</Col>
							</Row>

							<Row>
								<Col percent="25">
									<div className={style.colTint}>1</div>
								</Col>
								<Col grow="1">
									<div className={style.colTint}>21</div>
								</Col>
							</Row>

							<Row>
								<Col percent="25">
									<div className={style.colTint}>1</div>
								</Col>
								<Col>
									<div className={style.colTint}>2</div>
								</Col>
							</Row>

							<Row>
								<Col percent="25">
									<div className={style.colTint}>1</div>
								</Col>
								<Col grow="1">
									<div className={style.colTint}>2</div>
								</Col>
							</Row>

							<Row>
								<Col percent="25">
									<div className={style.colTint}>1</div>
								</Col>
								<Col grow="4">
									<div className={style.colTint}>2</div>
								</Col>
							</Row>
							
						</Container>

					</div>
					<div className={style.docboxCode}>
						<div>{`<Container></Container>`}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PageLayout;
