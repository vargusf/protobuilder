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
						<h3 className={style.docHeading3}>Props</h3>
					</div>
					<div className={style.docboxCode}>
						<h3 className={` ${style.docHeading3} ${protoStyle.marginEndsXsm}`}>Height</h3>
						<div>{`<Container height="auto"></Container> // default`}</div>
						<div>{`<Container height="200px"></Container>`}</div>
						<div>{`<Container height="100per"></Container>`}</div>
						<div>{`<Container height="min100vh"></Container>`}</div>

						<h3 className={` ${style.docHeading3} ${protoStyle.marginEndsXsm}`}>Fixed Width</h3>
						<div>{`<Container fixedWidth="false"></Container> // default`}</div>
						<div>{`<Container fixedWidth="true"></Container>`}</div>

						<h3 className={` ${style.docHeading3} ${protoStyle.marginEndsXsm}`}>Align</h3>
						<div>{`<Container align="stretch"></Container> // default`}</div>
						<div>{`<Container align="start"></Container>`}</div>
						<div>{`<Container align="end"></Container>`}</div>
						<div>{`<Container align="center"></Container>`}</div>

						<h3 className={` ${style.docHeading3} ${protoStyle.marginEndsXsm}`}>Justify</h3>
						<div>{`<Container justify="start"></Container> // default`}</div>
						<div>{`<Container justify="end"></Container>`}</div>
						<div>{`<Container justify="center"></Container>`}</div>
						<div>{`<Container justify="between"></Container>`}</div>

						<h3 className={` ${style.docHeading3} ${protoStyle.marginEndsXsm}`}>Grow</h3>
						<div>{`<Container grow="0"></Container> // default`}</div>
						<div>{`<Container width="grow"></Container> // default`}</div>

						<h3 className={` ${style.docHeading3} ${protoStyle.marginEndsXsm}`}>Background Color</h3>
						<div>{`<Container backgroundColor="none"></Container> //default`}</div>
						<div>{`<Container backgroundColor="[config.color]"></Container> //default`}</div>
					</div>
				</div>

				<h2 className={style.docHeading2}>Row Gutter</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<h3 className={` ${style.docHeading3}`}>default "md"</h3>
						<Row gutter="zero" marginBottom="lg">
							<Col width="even"><div className={style.colTint}>zero</div></Col>
							<Col width="even"><div className={style.colTint}>zero</div></Col>
							<Col width="even"><div className={style.colTint}>zero</div></Col>
						</Row>
						<Row gutter="xsm" marginBottom="lg">
							<Col width="even"><div className={style.colTint}>xsm</div></Col>
							<Col width="even"><div className={style.colTint}>xsm</div></Col>
							<Col width="even"><div className={style.colTint}>xsm</div></Col>
						</Row>
						<Row gutter="sm" marginBottom="lg">
							<Col width="even"><div className={style.colTint}>sm</div></Col>
							<Col width="even"><div className={style.colTint}>sm</div></Col>
							<Col width="even"><div className={style.colTint}>sm</div></Col>
						</Row>
						<Row gutter="md" marginBottom="lg">
							<Col width="even"><div className={style.colTint}>md</div></Col>
							<Col width="even"><div className={style.colTint}>md</div></Col>
							<Col width="even"><div className={style.colTint}>md</div></Col>
						</Row>
						<Row gutter="lg" marginBottom="lg">
							<Col width="even"><div className={style.colTint}>lg</div></Col>
							<Col width="even"><div className={style.colTint}>lg</div></Col>
							<Col width="even"><div className={style.colTint}>lg</div></Col>
						</Row>
						<Row gutter="xlg" marginBottom="lg">
							<Col width="even"><div className={style.colTint}>xlg</div></Col>
							<Col width="even"><div className={style.colTint}>xlg</div></Col>
							<Col width="even"><div className={style.colTint}>xlg</div></Col>
						</Row>
						<Row gutter="xxlg">
							<Col width="even"><div className={style.colTint}>xxlg</div></Col>
							<Col width="even"><div className={style.colTint}>xxlg</div></Col>
							<Col width="even"><div className={style.colTint}>xxlg</div></Col>
						</Row>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Row gutter="zero"></Row>`}</div>
						<div>{`<Row gutter="xsm"></Row>`}</div>
						<div>{`<Row gutter="sm"></Row>`}</div>
						<div>{`<Row gutter="md"></Row>`}</div>
						<div>{`<Row gutter="lg"></Row>`}</div>
						<div>{`<Row gutter="xlg"></Row>`}</div>
						<div>{`<Row gutter="xxlg"></Row>`}</div>
					</div>
				</div>

				<h2 className={style.docHeading2}>Row Align</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<h3 className={` ${style.docHeading3}`}>default "stretch"</h3>
						<Row align="stretch" marginBottom="lg">
							<Col width="even"><div className={style.colTint}>stretch</div></Col>
							<Col width="even"><div className={style.colTint}>stretch - Deserunt proident tempor et velit nostrud ullamco enim ipsum excepteur laboris officia amet cillum aute. Aute quis elit cillum sit. </div></Col>
							<Col width="even"><div className={style.colTint}>stretch</div></Col>
						</Row>
						<Row align="start" marginBottom="lg">
							<Col width="even"><div className={style.colTint}>start</div></Col>
							<Col width="even"><div className={style.colTint}>start - Deserunt proident tempor et velit nostrud ullamco enim ipsum excepteur laboris officia amet cillum aute. Aute quis elit cillum sit. </div></Col>
							<Col width="even"><div className={style.colTint}>start</div></Col>
						</Row>
						<Row align="center" marginBottom="lg">
							<Col width="even"><div className={style.colTint}>center</div></Col>
							<Col width="even"><div className={style.colTint}>center - Deserunt proident tempor et velit nostrud ullamco enim ipsum excepteur laboris officia amet cillum aute. Aute quis elit cillum sit. </div></Col>
							<Col width="even"><div className={style.colTint}>center</div></Col>
						</Row>
						<Row align="end" marginBottom="lg">
							<Col width="even"><div className={style.colTint}>end</div></Col>
							<Col width="even"><div className={style.colTint}>end - Deserunt proident tempor et velit nostrud ullamco enim ipsum excepteur laboris officia amet cillum aute. Aute quis elit cillum sit. </div></Col>
							<Col width="even"><div className={style.colTint}>end</div></Col>
						</Row>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Row align="start"></Row>`}</div>
						<div>{`<Row align="center"></Row>`}</div>
						<div>{`<Row align="end"></Row>`}</div>
						<div>{`<Row align="stretch"></Row>`}</div>
					</div>
				</div>

				<h2 className={style.docHeading2}>Row Justify</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<h3 className={` ${style.docHeading3}`}>default "start"</h3>
						<Row justify="start" marginBottom="lg">
							<Col><div className={style.colTint}>start</div></Col>
							<Col><div className={style.colTint}>start</div></Col>
							<Col><div className={style.colTint}>start</div></Col>
						</Row>
						<Row justify="center" marginBottom="lg">
							<Col><div className={style.colTint}>center</div></Col>
							<Col><div className={style.colTint}>center</div></Col>
							<Col><div className={style.colTint}>center</div></Col>
						</Row>
						<Row justify="end" marginBottom="lg">
							<Col><div className={style.colTint}>end</div></Col>
							<Col><div className={style.colTint}>end</div></Col>
							<Col><div className={style.colTint}>end</div></Col>
						</Row>
						<Row justify="between" marginBottom="lg">
							<Col><div className={style.colTint}>between</div></Col>
							<Col><div className={style.colTint}>between</div></Col>
							<Col><div className={style.colTint}>between</div></Col>
						</Row>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Row justify="start"></Row>`}</div>
						<div>{`<Row justify="center"></Row>`}</div>
						<div>{`<Row justify="end"></Row>`}</div>
						<div>{`<Row justify="between"></Row>`}</div>
					</div>
				</div>

				<h2 className={style.docHeading2}>Row Wrap</h2>
				<div className={style.docbox} style={{ width: "50%" }}>
					<div className={style.docboxContent}>
						<h3 className={` ${style.docHeading3}`}>default "nowrap"</h3>
						<Row wrap="nowrap" gutter="zero" marginBottom="lg">
							<Col width="33per"><div className={style.colTint}>1 true</div></Col>
							<Col width="33per"><div className={style.colTint}>2 true</div></Col>
							<Col width="33per"><div className={style.colTint}>3 true</div></Col>
							<Col width="33per"><div className={style.colTint}>4 true</div></Col>
						</Row>
						<Row wrap="wrap" gutter="zero" marginBottom="lg">
							<Col width="33per"><div className={style.colTint}>1 false</div></Col>
							<Col width="33per"><div className={style.colTint}>2 false</div></Col>
							<Col width="33per"><div className={style.colTint}>3 false</div></Col>
							<Col width="33per"><div className={style.colTint}>4 false</div></Col>
						</Row>
						<Row wrap="reverse" gutter="zero" marginBottom="lg">
							<Col width="33per"><div className={style.colTint}>1 reverse</div></Col>
							<Col width="33per"><div className={style.colTint}>2 reverse</div></Col>
							<Col width="33per"><div className={style.colTint}>3 reverse</div></Col>
							<Col width="33per"><div className={style.colTint}>4 reverse</div></Col>
							<Col width="33per"><div className={style.colTint}>5 reverse</div></Col>
							<Col width="33per"><div className={style.colTint}>6 reverse</div></Col>
						</Row>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Row wrap="nowrap"></Row>`}</div>
						<div>{`<Row wrap="wrap"></Row>`}</div>
						<div>{`<Row wrap="reverse"></Row>`}</div>
					</div>
				</div>

				<h2 className={style.docHeading2}>Row Direction</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<h3 className={` ${style.docHeading3}`}>default "row"</h3>
						<Row direction="row" marginBottom="lg">
							<Col col="even"><div className={style.colTint}>row - item 1</div></Col>
							<Col col="even"><div className={style.colTint}>row - item 2</div></Col>
							<Col col="even"><div className={style.colTint}>row - item 3</div></Col>
							<Col col="even"><div className={style.colTint}>row - item 4</div></Col>
						</Row>
						<Row direction="column" marginBottom="lg">
							<Col col="even"><div className={style.colTint}>column - item 1</div></Col>
							<Col col="even"><div className={style.colTint}>column - item 2</div></Col>
							<Col col="even"><div className={style.colTint}>column - item 3</div></Col>
							<Col col="even"><div className={style.colTint}>column - item 4</div></Col>
						</Row>
						<Row direction="rowReverse" marginBottom="lg">
							<Col col="even"><div className={style.colTint}>rowReverse - item 1</div></Col>
							<Col col="even"><div className={style.colTint}>rowReverse - item 2</div></Col>
							<Col col="even"><div className={style.colTint}>rowReverse - item 3</div></Col>
							<Col col="even"><div className={style.colTint}>rowReverse - item 4</div></Col>
						</Row>
						<Row direction="columnReverse" marginBottom="lg">
							<Col col="even"><div className={style.colTint}>columnReverse - item 1</div></Col>
							<Col col="even"><div className={style.colTint}>columnReverse - item 2</div></Col>
							<Col col="even"><div className={style.colTint}>columnReverse - item 3</div></Col>
							<Col col="even"><div className={style.colTint}>columnReverse - item 4</div></Col>
						</Row>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Row direction="row"></Row>`}</div>
						<div>{`<Row direction="column"></Row>`}</div>
						<div>{`<Row direction="rowReverse"></Row>`}</div>
						<div>{`<Row direction="columnReverse"></Row>`}</div>
					</div>
				</div>

				<h2 className={style.docHeading2}>Row & Col Margin</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<h3 className={` ${style.docHeading3}`}>default "zero"</h3>
						<h3 className={style.docHeading3}>Margin Top</h3>
						<Row marginTop="zero">
							<Col width="even"><div className={style.colTint}>zero</div></Col>
							<Col width="even"><div className={style.colTint}>zero</div></Col>
							<Col width="even"><div className={style.colTint}>zero</div></Col>
						</Row>
						<Row marginTop="one">
							<Col width="even"><div className={style.colTint}>one</div></Col>
							<Col width="even"><div className={style.colTint}>one</div></Col>
							<Col width="even"><div className={style.colTint}>one</div></Col>
						</Row>
						<Row marginTop="two">
							<Col width="even"><div className={style.colTint}>two</div></Col>
							<Col width="even"><div className={style.colTint}>two</div></Col>
							<Col width="even"><div className={style.colTint}>two</div></Col>
						</Row>
						<Row marginTop="tiny">
							<Col width="even"><div className={style.colTint}>tiny</div></Col>
							<Col width="even"><div className={style.colTint}>tiny</div></Col>
							<Col width="even"><div className={style.colTint}>tiny</div></Col>
						</Row>
						<Row marginTop="xxsm">
							<Col width="even"><div className={style.colTint}>xxsm</div></Col>
							<Col width="even"><div className={style.colTint}>xxsm</div></Col>
							<Col width="even"><div className={style.colTint}>xxsm</div></Col>
						</Row>
						<Row marginTop="xsm">
							<Col width="even"><div className={style.colTint}>xsm</div></Col>
							<Col width="even"><div className={style.colTint}>xsm</div></Col>
							<Col width="even"><div className={style.colTint}>xsm</div></Col>
						</Row>
						<Row marginTop="sm">
							<Col width="even"><div className={style.colTint}>sm</div></Col>
							<Col width="even"><div className={style.colTint}>sm</div></Col>
							<Col width="even"><div className={style.colTint}>sm</div></Col>
						</Row>
						<Row marginTop="md">
							<Col width="even"><div className={style.colTint}>md</div></Col>
							<Col width="even"><div className={style.colTint}>md</div></Col>
							<Col width="even"><div className={style.colTint}>md</div></Col>
						</Row>
						<Row marginTop="lg">
							<Col width="even"><div className={style.colTint}>lg</div></Col>
							<Col width="even"><div className={style.colTint}>lg</div></Col>
							<Col width="even"><div className={style.colTint}>lg</div></Col>
						</Row>
						<Row marginTop="xlg">
							<Col width="even"><div className={style.colTint}>xlg</div></Col>
							<Col width="even"><div className={style.colTint}>xlg</div></Col>
							<Col width="even"><div className={style.colTint}>xlg</div></Col>
						</Row>
						<Row marginTop="xxlg">
							<Col width="even"><div className={style.colTint}>xxlg</div></Col>
							<Col width="even"><div className={style.colTint}>xxlg</div></Col>
							<Col width="even"><div className={style.colTint}>xxlg</div></Col>
						</Row>
						<Row marginTop="jumbo">
							<Col width="even"><div className={style.colTint}>jumbo</div></Col>
							<Col width="even"><div className={style.colTint}>jumbo</div></Col>
							<Col width="even"><div className={style.colTint}>jumbo</div></Col>
						</Row>
						<h3 className={` ${style.docHeading3} ${protoStyle.marginTopSm}`}>Margin Bottom</h3>
						<Row marginBottom="zero">
							<Col width="even"><div className={style.colTint}>zero</div></Col>
							<Col width="even"><div className={style.colTint}>zero</div></Col>
							<Col width="even"><div className={style.colTint}>zero</div></Col>
						</Row>
						<Row marginBottom="one">
							<Col width="even"><div className={style.colTint}>one</div></Col>
							<Col width="even"><div className={style.colTint}>one</div></Col>
							<Col width="even"><div className={style.colTint}>one</div></Col>
						</Row>
						<Row marginBottom="two">
							<Col width="even"><div className={style.colTint}>two</div></Col>
							<Col width="even"><div className={style.colTint}>two</div></Col>
							<Col width="even"><div className={style.colTint}>two</div></Col>
						</Row>
						<Row marginBottom="tiny">
							<Col width="even"><div className={style.colTint}>tiny</div></Col>
							<Col width="even"><div className={style.colTint}>tiny</div></Col>
							<Col width="even"><div className={style.colTint}>tiny</div></Col>
						</Row>
						<Row marginBottom="xxsm">
							<Col width="even"><div className={style.colTint}>xxsm</div></Col>
							<Col width="even"><div className={style.colTint}>xxsm</div></Col>
							<Col width="even"><div className={style.colTint}>xxsm</div></Col>
						</Row>
						<Row marginBottom="xsm">
							<Col width="even"><div className={style.colTint}>xsm</div></Col>
							<Col width="even"><div className={style.colTint}>xsm</div></Col>
							<Col width="even"><div className={style.colTint}>xsm</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col width="even"><div className={style.colTint}>sm</div></Col>
							<Col width="even"><div className={style.colTint}>sm</div></Col>
							<Col width="even"><div className={style.colTint}>sm</div></Col>
						</Row>
						<Row marginBottom="md">
							<Col width="even"><div className={style.colTint}>md</div></Col>
							<Col width="even"><div className={style.colTint}>md</div></Col>
							<Col width="even"><div className={style.colTint}>md</div></Col>
						</Row>
						<Row marginBottom="lg">
							<Col width="even"><div className={style.colTint}>lg</div></Col>
							<Col width="even"><div className={style.colTint}>lg</div></Col>
							<Col width="even"><div className={style.colTint}>lg</div></Col>
						</Row>
						<Row marginBottom="xlg">
							<Col width="even"><div className={style.colTint}>xlg</div></Col>
							<Col width="even"><div className={style.colTint}>xlg</div></Col>
							<Col width="even"><div className={style.colTint}>xlg</div></Col>
						</Row>
						<Row marginBottom="xxlg">
							<Col width="even"><div className={style.colTint}>xxlg</div></Col>
							<Col width="even"><div className={style.colTint}>xxlg</div></Col>
							<Col width="even"><div className={style.colTint}>xxlg</div></Col>
						</Row>
						<Row marginBottom="jumbo">
							<Col width="even"><div className={style.colTint}>jumbo</div></Col>
							<Col width="even"><div className={style.colTint}>jumbo</div></Col>
							<Col width="even"><div className={style.colTint}>jumbo</div></Col>
						</Row>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Row marginTop="zero"></Row>`}</div>
						<div>{`<Row marginTop="one"></Row>`}</div>
						<div>{`<Row marginTop="two"></Row>`}</div>
						<div>{`<Row marginTop="tiny"></Row>`}</div>
						<div>{`<Row marginTop="xxsm"></Row>`}</div>
						<div>{`<Row marginTop="xsm"></Row>`}</div>
						<div>{`<Row marginTop="sm"></Row>`}</div>
						<div>{`<Row marginTop="md"></Row>`}</div>
						<div>{`<Row marginTop="lg"></Row>`}</div>
						<div>{`<Row marginTop="xlg"></Row>`}</div>
						<div>{`<Row marginTop="xxlg"></Row>`}</div>
						<div>{`<Row marginTop="jumbo"></Row>`}</div>
						<div>{`<Row marginBottom="zero"></Row>`}</div>
						<div>{`<Row marginBottom="one"></Row>`}</div>
						<div>{`<Row marginBottom="two"></Row>`}</div>
						<div>{`<Row marginBottom="tiny"></Row>`}</div>
						<div>{`<Row marginBottom="xxsm"></Row>`}</div>
						<div>{`<Row marginBottom="xsm"></Row>`}</div>
						<div>{`<Row marginBottom="sm"></Row>`}</div>
						<div>{`<Row marginBottom="md"></Row>`}</div>
						<div>{`<Row marginBottom="lg"></Row>`}</div>
						<div>{`<Row marginBottom="xlg"></Row>`}</div>
						<div>{`<Row marginBottom="xxlg"></Row>`}</div>
						<div>{`<Row marginBottom="jumbo"></Row>`}</div>
					</div>
				</div>

				<h2 className={style.docHeading2}>Row & Col Padding</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<h3 className={` ${style.docHeading3}`}>default "zero"</h3>
						<h3 className={style.docHeading3}>Padding Top</h3>
						<Row paddingTop="zero">
							<Col width="even"><div className={style.colTint}>zero</div></Col>
							<Col width="even"><div className={style.colTint}>zero</div></Col>
							<Col width="even"><div className={style.colTint}>zero</div></Col>
						</Row>
						<Row paddingTop="one">
							<Col width="even"><div className={style.colTint}>one</div></Col>
							<Col width="even"><div className={style.colTint}>one</div></Col>
							<Col width="even"><div className={style.colTint}>one</div></Col>
						</Row>
						<Row paddingTop="two">
							<Col width="even"><div className={style.colTint}>two</div></Col>
							<Col width="even"><div className={style.colTint}>two</div></Col>
							<Col width="even"><div className={style.colTint}>two</div></Col>
						</Row>
						<Row paddingTop="tiny">
							<Col width="even"><div className={style.colTint}>tiny</div></Col>
							<Col width="even"><div className={style.colTint}>tiny</div></Col>
							<Col width="even"><div className={style.colTint}>tiny</div></Col>
						</Row>
						<Row paddingTop="xxsm">
							<Col width="even"><div className={style.colTint}>xxsm</div></Col>
							<Col width="even"><div className={style.colTint}>xxsm</div></Col>
							<Col width="even"><div className={style.colTint}>xxsm</div></Col>
						</Row>
						<Row paddingTop="xsm">
							<Col width="even"><div className={style.colTint}>xsm</div></Col>
							<Col width="even"><div className={style.colTint}>xsm</div></Col>
							<Col width="even"><div className={style.colTint}>xsm</div></Col>
						</Row>
						<Row paddingTop="sm">
							<Col width="even"><div className={style.colTint}>sm</div></Col>
							<Col width="even"><div className={style.colTint}>sm</div></Col>
							<Col width="even"><div className={style.colTint}>sm</div></Col>
						</Row>
						<Row paddingTop="md">
							<Col width="even"><div className={style.colTint}>md</div></Col>
							<Col width="even"><div className={style.colTint}>md</div></Col>
							<Col width="even"><div className={style.colTint}>md</div></Col>
						</Row>
						<Row paddingTop="lg">
							<Col width="even"><div className={style.colTint}>lg</div></Col>
							<Col width="even"><div className={style.colTint}>lg</div></Col>
							<Col width="even"><div className={style.colTint}>lg</div></Col>
						</Row>
						<Row paddingTop="xlg">
							<Col width="even"><div className={style.colTint}>xlg</div></Col>
							<Col width="even"><div className={style.colTint}>xlg</div></Col>
							<Col width="even"><div className={style.colTint}>xlg</div></Col>
						</Row>
						<Row paddingTop="xxlg">
							<Col width="even"><div className={style.colTint}>xxlg</div></Col>
							<Col width="even"><div className={style.colTint}>xxlg</div></Col>
							<Col width="even"><div className={style.colTint}>xxlg</div></Col>
						</Row>
						<Row paddingTop="jumbo">
							<Col width="even"><div className={style.colTint}>jumbo</div></Col>
							<Col width="even"><div className={style.colTint}>jumbo</div></Col>
							<Col width="even"><div className={style.colTint}>jumbo</div></Col>
						</Row>
						<h3 className={` ${style.docHeading3} ${protoStyle.paddingTopSm}`}>Padding Bottom</h3>
						<Row paddingBottom="zero">
							<Col width="even"><div className={style.colTint}>zero</div></Col>
							<Col width="even"><div className={style.colTint}>zero</div></Col>
							<Col width="even"><div className={style.colTint}>zero</div></Col>
						</Row>
						<Row paddingBottom="one">
							<Col width="even"><div className={style.colTint}>one</div></Col>
							<Col width="even"><div className={style.colTint}>one</div></Col>
							<Col width="even"><div className={style.colTint}>one</div></Col>
						</Row>
						<Row paddingBottom="two">
							<Col width="even"><div className={style.colTint}>two</div></Col>
							<Col width="even"><div className={style.colTint}>two</div></Col>
							<Col width="even"><div className={style.colTint}>two</div></Col>
						</Row>
						<Row paddingBottom="tiny">
							<Col width="even"><div className={style.colTint}>tiny</div></Col>
							<Col width="even"><div className={style.colTint}>tiny</div></Col>
							<Col width="even"><div className={style.colTint}>tiny</div></Col>
						</Row>
						<Row paddingBottom="xxsm">
							<Col width="even"><div className={style.colTint}>xxsm</div></Col>
							<Col width="even"><div className={style.colTint}>xxsm</div></Col>
							<Col width="even"><div className={style.colTint}>xxsm</div></Col>
						</Row>
						<Row paddingBottom="xsm">
							<Col width="even"><div className={style.colTint}>xsm</div></Col>
							<Col width="even"><div className={style.colTint}>xsm</div></Col>
							<Col width="even"><div className={style.colTint}>xsm</div></Col>
						</Row>
						<Row paddingBottom="sm">
							<Col width="even"><div className={style.colTint}>sm</div></Col>
							<Col width="even"><div className={style.colTint}>sm</div></Col>
							<Col width="even"><div className={style.colTint}>sm</div></Col>
						</Row>
						<Row paddingBottom="md">
							<Col width="even"><div className={style.colTint}>md</div></Col>
							<Col width="even"><div className={style.colTint}>md</div></Col>
							<Col width="even"><div className={style.colTint}>md</div></Col>
						</Row>
						<Row paddingBottom="lg">
							<Col width="even"><div className={style.colTint}>lg</div></Col>
							<Col width="even"><div className={style.colTint}>lg</div></Col>
							<Col width="even"><div className={style.colTint}>lg</div></Col>
						</Row>
						<Row paddingBottom="xlg">
							<Col width="even"><div className={style.colTint}>xlg</div></Col>
							<Col width="even"><div className={style.colTint}>xlg</div></Col>
							<Col width="even"><div className={style.colTint}>xlg</div></Col>
						</Row>
						<Row paddingBottom="xxlg">
							<Col width="even"><div className={style.colTint}>xxlg</div></Col>
							<Col width="even"><div className={style.colTint}>xxlg</div></Col>
							<Col width="even"><div className={style.colTint}>xxlg</div></Col>
						</Row>
						<Row paddingBottom="jumbo">
							<Col width="even"><div className={style.colTint}>jumbo</div></Col>
							<Col width="even"><div className={style.colTint}>jumbo</div></Col>
							<Col width="even"><div className={style.colTint}>jumbo</div></Col>
						</Row>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Row paddingTop="zero"></Row>`}</div>
						<div>{`<Row paddingTop="one"></Row>`}</div>
						<div>{`<Row paddingTop="two"></Row>`}</div>
						<div>{`<Row paddingTop="tiny"></Row>`}</div>
						<div>{`<Row paddingTop="xxsm"></Row>`}</div>
						<div>{`<Row paddingTop="xsm"></Row>`}</div>
						<div>{`<Row paddingTop="sm"></Row>`}</div>
						<div>{`<Row paddingTop="md"></Row>`}</div>
						<div>{`<Row paddingTop="lg"></Row>`}</div>
						<div>{`<Row paddingTop="xlg"></Row>`}</div>
						<div>{`<Row paddingTop="xxlg"></Row>`}</div>
						<div>{`<Row paddingTop="jumbo"></Row>`}</div>
						<div>{`<Row paddingBottom="zero"></Row>`}</div>
						<div>{`<Row paddingBottom="one"></Row>`}</div>
						<div>{`<Row paddingBottom="two"></Row>`}</div>
						<div>{`<Row paddingBottom="tiny"></Row>`}</div>
						<div>{`<Row paddingBottom="xxsm"></Row>`}</div>
						<div>{`<Row paddingBottom="xsm"></Row>`}</div>
						<div>{`<Row paddingBottom="sm"></Row>`}</div>
						<div>{`<Row paddingBottom="md"></Row>`}</div>
						<div>{`<Row paddingBottom="lg"></Row>`}</div>
						<div>{`<Row paddingBottom="xlg"></Row>`}</div>
						<div>{`<Row paddingBottom="xxlg"></Row>`}</div>
						<div>{`<Row paddingBottom="jumbo"></Row>`}</div>
					</div>
				</div>

				<h2 className={style.docHeading2}>Row Grow</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<h3 className={` ${style.docHeading3}`}>default "0"</h3>
						<h3 className={` ${style.docHeading3}`}>grow 0</h3>
						<Container height="200px">
							<Row grow="0">
								<Col width="even"><div className={style.colTint}>grow</div></Col>
								<Col width="even"><div className={style.colTint}>grow</div></Col>
								<Col width="even"><div className={style.colTint}>grow</div></Col>
							</Row>
							<Row grow="0" marginTop="xsm">
								<Col width="even"><div className={style.colTint}>grow</div></Col>
								<Col width="even"><div className={style.colTint}>grow</div></Col>
								<Col width="even"><div className={style.colTint}>grow</div></Col>
							</Row>
						</Container>

						<h3 className={` ${style.docHeading3}`}>grow 1</h3>
						<Container height="200px">
							<Row grow="1">
								<Col width="even"><div className={style.colTint}>grow</div></Col>
								<Col width="even"><div className={style.colTint}>grow</div></Col>
								<Col width="even"><div className={style.colTint}>grow</div></Col>
							</Row>
							<Row grow="1" marginTop="xsm">
								<Col width="even"><div className={style.colTint}>grow</div></Col>
								<Col width="even"><div className={style.colTint}>grow</div></Col>
								<Col width="even"><div className={style.colTint}>grow</div></Col>
							</Row>
						</Container>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Row grow="0"></Row>`}</div>
						<div>{`<Row grow=""></Row>`}</div>
					</div>
				</div>

				<h2 className={style.docHeading2}>Row & Col Display</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<h3 className={` ${style.docHeading3}`}>default "flex"</h3>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Row display="flex"></Row>`}</div>
						<div>{`<Row display="none"></Row>`}</div>
						<div>{`<Col display="flex"></Col>`}</div>
						<div>{`<Col display="none"></Col>`}</div>
					</div>
				</div>

				<h2 className={style.docHeading2}>Col Width</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<h3 className={` ${style.docHeading3}`}>default "auto"</h3>
						<h3 className={` ${style.docHeading3} ${protoStyle.paddingTopSm}`}>auto</h3>
						<Row marginBottom="sm">
							<Col width="auto"><div className={style.colTint}>Auto: A Column</div></Col>
							<Col width="auto"><div className={style.colTint}>Auto: Just Another Larger Column</div></Col>
						</Row>
						<h3 className={` ${style.docHeading3} ${protoStyle.paddingTopSm}`}>Grow</h3>
						<Row marginBottom="sm">
							<Col width="grow"><div className={style.colTint}>A Column</div></Col>
							<Col width="grow"><div className={style.colTint}>Auto: Just Another Larger Column</div></Col>
						</Row>
						<h3 className={` ${style.docHeading3} `}>Even</h3>
						<Row marginBottom="sm">
							<Col width="even"><div className={style.colTint}>A Column</div></Col>
							<Col width="even"><div className={style.colTint}>Auto: Just Another Larger Column</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col width="even"><div className={style.colTint}>even</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col width="even"><div className={style.colTint}>even</div></Col>
							<Col width="even"><div className={style.colTint}>even</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col width="even"><div className={style.colTint}>even</div></Col>
							<Col width="even"><div className={style.colTint}>even</div></Col>
							<Col width="even"><div className={style.colTint}>even</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col width="even"><div className={style.colTint}>even</div></Col>
							<Col width="even"><div className={style.colTint}>even</div></Col>
							<Col width="even"><div className={style.colTint}>even</div></Col>
							<Col width="even"><div className={style.colTint}>even</div></Col>
						</Row>
						<h3 className={` ${style.docHeading3} ${protoStyle.paddingTopSm}`}>px and per (%)</h3>
						<Row marginBottom="sm">
							<Col width="200px"><div className={style.colTint}>200px</div></Col>
							<Col width="grow"><div className={style.colTint}>grow 1</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col width="400px"><div className={style.colTint}>400px</div></Col>
							<Col width="grow"><div className={style.colTint}>grow 1</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col width="150px"><div className={style.colTint}>150px</div></Col>
							<Col width="250px"><div className={style.colTint}>250px</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col width="25per"><div className={style.colTint}>25per</div></Col>
							<Col width="25per"><div className={style.colTint}>25per</div></Col>
							<Col width="50per"><div className={style.colTint}>50per</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col width="33per"><div className={style.colTint}>33per</div></Col>
							<Col width="33per"><div className={style.colTint}>33per</div></Col>
							<Col width="33per"><div className={style.colTint}>33per</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col width="25per"><div className={style.colTint}>25per</div></Col>
							<Col width="75per"><div className={style.colTint}>75per</div></Col>
						</Row>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Col width="200px"></Col>`}</div>
						<div>{`<Col width="400px"></Col>`}</div>
						<div>{`<Col width="250px"></Col>`}</div>
						<div>{`<Col width="25per"></Col>`}</div>
						<div>{`<Col width="33per"></Col>`}</div>
						<div>{`<Col width="75per"></Col>`}</div>
					</div>
				</div> 

			</div>
		)
	}
}

export default PageLayout;