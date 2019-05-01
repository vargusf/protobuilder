import React from 'react';

import { Row, Col, Input } from '../../index';

import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

const PageForm = () => (
	<div>
		<h1 className={style.docHeading1}>Form</h1>

		<h2 className={style.docHeading2}>Input</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<Input label="Label" placeholder="Please input something" helper="Optional helper text"/>
				<h3 className={`${style.docHeading3} ${protoStyle.marginEndsLg}`}>Error</h3>
				<Input label="Label" placeholder="Please input something" state="error" helper="This is wrong" />
				<h3 className={`${style.docHeading3} ${protoStyle.marginEndsLg}`}>Success</h3>
				<Input label="Label" placeholder="Please input something" state="success" helper="Looks good!"/>
				<h3 className={`${style.docHeading3} ${protoStyle.marginEndsLg}`}>Warning</h3>
				<Input label="Label" placeholder="Please input something" state="warning" />
			</div>
			<div className={style.docboxCode}>
				<div>{`<Form>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Sizes</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<Row direction="column">
					<Col><Input label="Extra Small" size="xsm" /></Col>
					<Col marginTop="md"><Input label="Small" size="sm" /></Col>
					<Col marginTop="md"><Input label="Medium" size="md" /></Col>
					<Col marginTop="md"><Input label="Large" size="lg" /></Col>
				</Row>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Form>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Append / Prepend</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<Row>
					<Col width="240px"><Input append="%" label="Append" /></Col>
					<Col width="240px"><Input prepend="$" label="Prepend" /></Col>
				</Row>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Form>`}</div>
			</div>
		</div>

	</div>
);

export default PageForm;
