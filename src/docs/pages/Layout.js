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

				{/* <h2 className={style.docHeading2}>Container</h2>
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

				<h2 className={style.docHeading2}>Row Gutter</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<Row gutter="zero" marginBottom="lg">
							<Col grow="1"><div className={style.colTint}>zero</div></Col>
							<Col grow="1"><div className={style.colTint}>zero</div></Col>
							<Col grow="1"><div className={style.colTint}>zero</div></Col>
						</Row>
						<Row gutter="xsm" marginBottom="lg">
							<Col grow="1"><div className={style.colTint}>xsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xsm</div></Col>
						</Row>
						<Row gutter="sm" marginBottom="lg">
							<Col grow="1"><div className={style.colTint}>sm</div></Col>
							<Col grow="1"><div className={style.colTint}>sm</div></Col>
							<Col grow="1"><div className={style.colTint}>sm</div></Col>
						</Row>
						<Row gutter="md" marginBottom="lg">
							<Col grow="1"><div className={style.colTint}>md</div></Col>
							<Col grow="1"><div className={style.colTint}>md</div></Col>
							<Col grow="1"><div className={style.colTint}>md</div></Col>
						</Row>
						<Row gutter="lg" marginBottom="lg">
							<Col grow="1"><div className={style.colTint}>lg</div></Col>
							<Col grow="1"><div className={style.colTint}>lg</div></Col>
							<Col grow="1"><div className={style.colTint}>lg</div></Col>
						</Row>
						<Row gutter="xlg" marginBottom="lg">
							<Col grow="1"><div className={style.colTint}>xlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xlg</div></Col>
						</Row>
						<Row gutter="xxlg">
							<Col grow="1"><div className={style.colTint}>xxlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xxlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xxlg</div></Col>
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
						<Row align="start" marginBottom="lg">
							<Col grow="1"><div className={style.colTint}>start</div></Col>
							<Col grow="1"><div className={style.colTint}>start - Deserunt proident tempor et velit nostrud ullamco enim ipsum excepteur laboris officia amet cillum aute. Aute quis elit cillum sit. </div></Col>
							<Col grow="1"><div className={style.colTint}>start</div></Col>
						</Row>
						<Row align="center" marginBottom="lg">
							<Col grow="1"><div className={style.colTint}>center</div></Col>
							<Col grow="1"><div className={style.colTint}>center - Deserunt proident tempor et velit nostrud ullamco enim ipsum excepteur laboris officia amet cillum aute. Aute quis elit cillum sit. </div></Col>
							<Col grow="1"><div className={style.colTint}>center</div></Col>
						</Row>
						<Row align="end" marginBottom="lg">
							<Col grow="1"><div className={style.colTint}>end</div></Col>
							<Col grow="1"><div className={style.colTint}>end - Deserunt proident tempor et velit nostrud ullamco enim ipsum excepteur laboris officia amet cillum aute. Aute quis elit cillum sit. </div></Col>
							<Col grow="1"><div className={style.colTint}>end</div></Col>
						</Row>
						<Row align="stretch" marginBottom="lg">
							<Col grow="1"><div className={style.colTint}>stretch</div></Col>
							<Col grow="1"><div className={style.colTint}>stretch - Deserunt proident tempor et velit nostrud ullamco enim ipsum excepteur laboris officia amet cillum aute. Aute quis elit cillum sit. </div></Col>
							<Col grow="1"><div className={style.colTint}>stretch</div></Col>
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
						<Row wrap="true" gutter="zero" marginBottom="lg">
							<Col percent="33.33"><div className={style.colTint}>1 true</div></Col>
							<Col percent="33.33"><div className={style.colTint}>2 true</div></Col>
							<Col percent="33.33"><div className={style.colTint}>3 true</div></Col>
							<Col percent="33.33"><div className={style.colTint}>4 true</div></Col>
						</Row>
						<Row wrap="false" gutter="zero" marginBottom="lg">
							<Col percent="33.33"><div className={style.colTint}>1 false</div></Col>
							<Col percent="33.33"><div className={style.colTint}>2 false</div></Col>
							<Col percent="33.33"><div className={style.colTint}>3 false</div></Col>
							<Col percent="33.33"><div className={style.colTint}>4 false</div></Col>
						</Row>
						<Row wrap="reverse" gutter="zero" marginBottom="lg">
							<Col percent="33.33"><div className={style.colTint}>1 reverse</div></Col>
							<Col percent="33.33"><div className={style.colTint}>2 reverse</div></Col>
							<Col percent="33.33"><div className={style.colTint}>3 reverse</div></Col>
							<Col percent="33.33"><div className={style.colTint}>4 reverse</div></Col>
							<Col percent="33.33"><div className={style.colTint}>5 reverse</div></Col>
							<Col percent="33.33"><div className={style.colTint}>6 reverse</div></Col>
						</Row>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Row wrap="true"></Row>`}</div>
						<div>{`<Row wrap="false"></Row>`}</div>
						<div>{`<Row wrap="reverse"></Row>`}</div>
					</div>
				</div>

				<h2 className={style.docHeading2}>Row Margin</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<h3 className={style.docHeading3}>Margin Top</h3>
						<Row marginTop="zero">
							<Col grow="1"><div className={style.colTint}>zero</div></Col>
							<Col grow="1"><div className={style.colTint}>zero</div></Col>
							<Col grow="1"><div className={style.colTint}>zero</div></Col>
						</Row>
						<Row marginTop="one">
							<Col grow="1"><div className={style.colTint}>one</div></Col>
							<Col grow="1"><div className={style.colTint}>one</div></Col>
							<Col grow="1"><div className={style.colTint}>one</div></Col>
						</Row>
						<Row marginTop="two">
							<Col grow="1"><div className={style.colTint}>two</div></Col>
							<Col grow="1"><div className={style.colTint}>two</div></Col>
							<Col grow="1"><div className={style.colTint}>two</div></Col>
						</Row>
						<Row marginTop="tiny">
							<Col grow="1"><div className={style.colTint}>tiny</div></Col>
							<Col grow="1"><div className={style.colTint}>tiny</div></Col>
							<Col grow="1"><div className={style.colTint}>tiny</div></Col>
						</Row>
						<Row marginTop="xxsm">
							<Col grow="1"><div className={style.colTint}>xxsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xxsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xxsm</div></Col>
						</Row>
						<Row marginTop="xsm">
							<Col grow="1"><div className={style.colTint}>xsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xsm</div></Col>
						</Row>
						<Row marginTop="sm">
							<Col grow="1"><div className={style.colTint}>sm</div></Col>
							<Col grow="1"><div className={style.colTint}>sm</div></Col>
							<Col grow="1"><div className={style.colTint}>sm</div></Col>
						</Row>
						<Row marginTop="md">
							<Col grow="1"><div className={style.colTint}>md</div></Col>
							<Col grow="1"><div className={style.colTint}>md</div></Col>
							<Col grow="1"><div className={style.colTint}>md</div></Col>
						</Row>
						<Row marginTop="lg">
							<Col grow="1"><div className={style.colTint}>lg</div></Col>
							<Col grow="1"><div className={style.colTint}>lg</div></Col>
							<Col grow="1"><div className={style.colTint}>lg</div></Col>
						</Row>
						<Row marginTop="xlg">
							<Col grow="1"><div className={style.colTint}>xlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xlg</div></Col>
						</Row>
						<Row marginTop="xxlg">
							<Col grow="1"><div className={style.colTint}>xxlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xxlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xxlg</div></Col>
						</Row>
						<Row marginTop="jumbo">
							<Col grow="1"><div className={style.colTint}>jumbo</div></Col>
							<Col grow="1"><div className={style.colTint}>jumbo</div></Col>
							<Col grow="1"><div className={style.colTint}>jumbo</div></Col>
						</Row>
						<h3 className={` ${style.docHeading3} ${protoStyle.marginTopSm}`}>Margin Bottom</h3>
						<Row marginBottom="zero">
							<Col grow="1"><div className={style.colTint}>zero</div></Col>
							<Col grow="1"><div className={style.colTint}>zero</div></Col>
							<Col grow="1"><div className={style.colTint}>zero</div></Col>
						</Row>
						<Row marginBottom="one">
							<Col grow="1"><div className={style.colTint}>one</div></Col>
							<Col grow="1"><div className={style.colTint}>one</div></Col>
							<Col grow="1"><div className={style.colTint}>one</div></Col>
						</Row>
						<Row marginBottom="two">
							<Col grow="1"><div className={style.colTint}>two</div></Col>
							<Col grow="1"><div className={style.colTint}>two</div></Col>
							<Col grow="1"><div className={style.colTint}>two</div></Col>
						</Row>
						<Row marginBottom="tiny">
							<Col grow="1"><div className={style.colTint}>tiny</div></Col>
							<Col grow="1"><div className={style.colTint}>tiny</div></Col>
							<Col grow="1"><div className={style.colTint}>tiny</div></Col>
						</Row>
						<Row marginBottom="xxsm">
							<Col grow="1"><div className={style.colTint}>xxsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xxsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xxsm</div></Col>
						</Row>
						<Row marginBottom="xsm">
							<Col grow="1"><div className={style.colTint}>xsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xsm</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col grow="1"><div className={style.colTint}>sm</div></Col>
							<Col grow="1"><div className={style.colTint}>sm</div></Col>
							<Col grow="1"><div className={style.colTint}>sm</div></Col>
						</Row>
						<Row marginBottom="md">
							<Col grow="1"><div className={style.colTint}>md</div></Col>
							<Col grow="1"><div className={style.colTint}>md</div></Col>
							<Col grow="1"><div className={style.colTint}>md</div></Col>
						</Row>
						<Row marginBottom="lg">
							<Col grow="1"><div className={style.colTint}>lg</div></Col>
							<Col grow="1"><div className={style.colTint}>lg</div></Col>
							<Col grow="1"><div className={style.colTint}>lg</div></Col>
						</Row>
						<Row marginBottom="xlg">
							<Col grow="1"><div className={style.colTint}>xlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xlg</div></Col>
						</Row>
						<Row marginBottom="xxlg">
							<Col grow="1"><div className={style.colTint}>xxlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xxlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xxlg</div></Col>
						</Row>
						<Row marginBottom="jumbo">
							<Col grow="1"><div className={style.colTint}>jumbo</div></Col>
							<Col grow="1"><div className={style.colTint}>jumbo</div></Col>
							<Col grow="1"><div className={style.colTint}>jumbo</div></Col>
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

				<h2 className={style.docHeading2}>Row Padding</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<h3 className={style.docHeading3}>Padding Top</h3>
						<Row paddingTop="zero">
							<Col grow="1"><div className={style.colTint}>zero</div></Col>
							<Col grow="1"><div className={style.colTint}>zero</div></Col>
							<Col grow="1"><div className={style.colTint}>zero</div></Col>
						</Row>
						<Row paddingTop="one">
							<Col grow="1"><div className={style.colTint}>one</div></Col>
							<Col grow="1"><div className={style.colTint}>one</div></Col>
							<Col grow="1"><div className={style.colTint}>one</div></Col>
						</Row>
						<Row paddingTop="two">
							<Col grow="1"><div className={style.colTint}>two</div></Col>
							<Col grow="1"><div className={style.colTint}>two</div></Col>
							<Col grow="1"><div className={style.colTint}>two</div></Col>
						</Row>
						<Row paddingTop="tiny">
							<Col grow="1"><div className={style.colTint}>tiny</div></Col>
							<Col grow="1"><div className={style.colTint}>tiny</div></Col>
							<Col grow="1"><div className={style.colTint}>tiny</div></Col>
						</Row>
						<Row paddingTop="xxsm">
							<Col grow="1"><div className={style.colTint}>xxsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xxsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xxsm</div></Col>
						</Row>
						<Row paddingTop="xsm">
							<Col grow="1"><div className={style.colTint}>xsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xsm</div></Col>
						</Row>
						<Row paddingTop="sm">
							<Col grow="1"><div className={style.colTint}>sm</div></Col>
							<Col grow="1"><div className={style.colTint}>sm</div></Col>
							<Col grow="1"><div className={style.colTint}>sm</div></Col>
						</Row>
						<Row paddingTop="md">
							<Col grow="1"><div className={style.colTint}>md</div></Col>
							<Col grow="1"><div className={style.colTint}>md</div></Col>
							<Col grow="1"><div className={style.colTint}>md</div></Col>
						</Row>
						<Row paddingTop="lg">
							<Col grow="1"><div className={style.colTint}>lg</div></Col>
							<Col grow="1"><div className={style.colTint}>lg</div></Col>
							<Col grow="1"><div className={style.colTint}>lg</div></Col>
						</Row>
						<Row paddingTop="xlg">
							<Col grow="1"><div className={style.colTint}>xlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xlg</div></Col>
						</Row>
						<Row paddingTop="xxlg">
							<Col grow="1"><div className={style.colTint}>xxlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xxlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xxlg</div></Col>
						</Row>
						<Row paddingTop="jumbo">
							<Col grow="1"><div className={style.colTint}>jumbo</div></Col>
							<Col grow="1"><div className={style.colTint}>jumbo</div></Col>
							<Col grow="1"><div className={style.colTint}>jumbo</div></Col>
						</Row>
						<h3 className={` ${style.docHeading3} ${protoStyle.paddingTopSm}`}>Padding Bottom</h3>
						<Row paddingBottom="zero">
							<Col grow="1"><div className={style.colTint}>zero</div></Col>
							<Col grow="1"><div className={style.colTint}>zero</div></Col>
							<Col grow="1"><div className={style.colTint}>zero</div></Col>
						</Row>
						<Row paddingBottom="one">
							<Col grow="1"><div className={style.colTint}>one</div></Col>
							<Col grow="1"><div className={style.colTint}>one</div></Col>
							<Col grow="1"><div className={style.colTint}>one</div></Col>
						</Row>
						<Row paddingBottom="two">
							<Col grow="1"><div className={style.colTint}>two</div></Col>
							<Col grow="1"><div className={style.colTint}>two</div></Col>
							<Col grow="1"><div className={style.colTint}>two</div></Col>
						</Row>
						<Row paddingBottom="tiny">
							<Col grow="1"><div className={style.colTint}>tiny</div></Col>
							<Col grow="1"><div className={style.colTint}>tiny</div></Col>
							<Col grow="1"><div className={style.colTint}>tiny</div></Col>
						</Row>
						<Row paddingBottom="xxsm">
							<Col grow="1"><div className={style.colTint}>xxsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xxsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xxsm</div></Col>
						</Row>
						<Row paddingBottom="xsm">
							<Col grow="1"><div className={style.colTint}>xsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xsm</div></Col>
							<Col grow="1"><div className={style.colTint}>xsm</div></Col>
						</Row>
						<Row paddingBottom="sm">
							<Col grow="1"><div className={style.colTint}>sm</div></Col>
							<Col grow="1"><div className={style.colTint}>sm</div></Col>
							<Col grow="1"><div className={style.colTint}>sm</div></Col>
						</Row>
						<Row paddingBottom="md">
							<Col grow="1"><div className={style.colTint}>md</div></Col>
							<Col grow="1"><div className={style.colTint}>md</div></Col>
							<Col grow="1"><div className={style.colTint}>md</div></Col>
						</Row>
						<Row paddingBottom="lg">
							<Col grow="1"><div className={style.colTint}>lg</div></Col>
							<Col grow="1"><div className={style.colTint}>lg</div></Col>
							<Col grow="1"><div className={style.colTint}>lg</div></Col>
						</Row>
						<Row paddingBottom="xlg">
							<Col grow="1"><div className={style.colTint}>xlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xlg</div></Col>
						</Row>
						<Row paddingBottom="xxlg">
							<Col grow="1"><div className={style.colTint}>xxlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xxlg</div></Col>
							<Col grow="1"><div className={style.colTint}>xxlg</div></Col>
						</Row>
						<Row paddingBottom="jumbo">
							<Col grow="1"><div className={style.colTint}>jumbo</div></Col>
							<Col grow="1"><div className={style.colTint}>jumbo</div></Col>
							<Col grow="1"><div className={style.colTint}>jumbo</div></Col>
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
						<Container height="200">
							<Row grow="true">
								<Col grow="1"><div className={style.colTint}>grow</div></Col>
								<Col grow="1"><div className={style.colTint}>grow</div></Col>
								<Col grow="1"><div className={style.colTint}>grow</div></Col>
							</Row>
							<Row grow="true" marginTop="xsm">
								<Col grow="1"><div className={style.colTint}>grow</div></Col>
								<Col grow="1"><div className={style.colTint}>grow</div></Col>
								<Col grow="1"><div className={style.colTint}>grow</div></Col>
							</Row>
						</Container>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Row grow="true"></Row>`}</div>
					</div>
				</div>

				<h2 className={style.docHeading2}>Col Grow</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<h3 className={` ${style.docHeading3} `}>1</h3>
						<Row marginBottom="sm">
							<Col grow="1"><div className={style.colTint}>1</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col grow="1"><div className={style.colTint}>1</div></Col>
							<Col grow="1"><div className={style.colTint}>1</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col grow="1"><div className={style.colTint}>1</div></Col>
							<Col grow="1"><div className={style.colTint}>1</div></Col>
							<Col grow="1"><div className={style.colTint}>1</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col grow="1"><div className={style.colTint}>1</div></Col>
							<Col grow="1"><div className={style.colTint}>1</div></Col>
							<Col grow="1"><div className={style.colTint}>1</div></Col>
							<Col grow="1"><div className={style.colTint}>1</div></Col>
						</Row>
						<h3 className={` ${style.docHeading3} ${protoStyle.paddingTopSm}`}>Auto</h3>
						<Row marginBottom="sm">
							<Col grow="auto"><div className={style.colTint}>A Column</div></Col>
							<Col grow="auto"><div className={style.colTint}>Just Another Larger Column</div></Col>
						</Row>
						<h3 className={` ${style.docHeading3} ${protoStyle.paddingTopSm}`}>Null</h3>
						<Row marginBottom="sm">
							<Col grow="null"><div className={style.colTint}>A Column</div></Col>
							<Col grow="null"><div className={style.colTint}>Just Another Larger Column</div></Col>
						</Row>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Col grow="1"></Col>`}</div>
						<div>{`<Col grow="auto"></Col>`}</div>
						<div>{`<Col grow="null"></Col>`}</div>
					</div>
				</div>

				<h2 className={style.docHeading2}>Col Width</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<Row marginBottom="sm">
							<Col width="200"><div className={style.colTint}>200px</div></Col>
							<Col grow="1"><div className={style.colTint}>grow 1</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col width="400"><div className={style.colTint}>400px</div></Col>
							<Col grow="1"><div className={style.colTint}>grow 1</div></Col>
						</Row>
						<Row>
							<Col width="250"><div className={style.colTint}>250px</div></Col>
							<Col width="250"><div className={style.colTint}>250px</div></Col>
						</Row>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Col width="200"></Col>`}</div>
						<div>{`<Col width="400"></Col>`}</div>
						<div>{`<Col width="250"></Col>`}</div>
					</div>
				</div>

				<h2 className={style.docHeading2}>Col Percent</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<Row marginBottom="sm">
							<Col percent="25"><div className={style.colTint}>25%</div></Col>
							<Col percent="25"><div className={style.colTint}>25%</div></Col>
							<Col percent="50"><div className={style.colTint}>50%</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col percent="33.33"><div className={style.colTint}>33.33%</div></Col>
							<Col percent="33.33"><div className={style.colTint}>33.33%</div></Col>
							<Col percent="33.33"><div className={style.colTint}>33.33%</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col percent="25"><div className={style.colTint}>25%</div></Col>
							<Col percent="75"><div className={style.colTint}>75%</div></Col>
						</Row>
					</div>
					<div className={style.docboxCode}>
						<div>{`<Col percent="25"></Col>`}</div>
						<div>{`<Col percent="33.33"></Col>`}</div>
						<div>{`<Col percent="75"></Col>`}</div>
					</div>
				</div> */}


				<h2 className={style.docHeading2}>Test Lab</h2>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						{/* <Row marginBottom="sm">
							<Col width="25%"><div className={style.colTint}>25%</div></Col>
							<Col width="25%"><div className={style.colTint}>25%</div></Col>
							<Col width="50%"><div className={style.colTint}>50%</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col width="100px"><div className={style.colTint}>100px</div></Col>
							<Col width="100px"><div className={style.colTint}>100px</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col grow="1"><div className={style.colTint}>grow 1</div></Col>
							<Col grow="1"><div className={style.colTint}>grow 1 - Minim eiusmod laboris sint temporasdfasdf sadfasdf asdf sad fasd fasd fsad fasdf .</div></Col>
						</Row>
						<Row marginBottom="sm">
							<Col width="100px"><div className={style.colTint}>100px</div></Col>
							<Col grow="1"><div className={style.colTint}>grow 1</div></Col>
						</Row> */}
						<Row marginBottom="sm">
							<Col width={{d: "50%", sm: "10%"}}><div className={style.colTint}>default: 50% / sm: 10%</div></Col>
							<Col grow="1"><div className={style.colTint}>grow 1</div></Col>
						</Row>
					</div>
				</div>

			</div>
		)
	}
}

export default PageLayout;