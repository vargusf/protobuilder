import React from 'react';

import { Row, Col, Input, Textarea, Checkbox, CheckboxGroup, Switch, SwitchGroup } from '../../index';

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
				<Row marginBottom="lg">
					<Col width="50per"><Input append="%" label="Append" size="xsm" /></Col>
					<Col width="50per"><Input prepend="$" label="Prepend" size="xsm" /></Col>
				</Row>
				<Row marginBottom="lg">
					<Col width="50per"><Input append="%" label="Append" size="sm" /></Col>
					<Col width="50per"><Input prepend="$" label="Prepend" size="sm" /></Col>
				</Row>
				<Row marginBottom="lg">
					<Col width="50per"><Input append="%" label="Append" size="md" /></Col>
					<Col width="50per"><Input prepend="$" label="Prepend" size="md" /></Col>
				</Row>
				<Row>
					<Col width="50per"><Input append="%" label="Append" size="lg" /></Col>
					<Col width="50per"><Input prepend="$" label="Prepend" size="lg" /></Col>
				</Row>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Form>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Text Area</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<Row marginBottom="lg">
					<Col width="grow">
						<Textarea
							label = "This is a label"
							helper = "This is some helper text"
							placeholder = "This is the placeholder"
						/>
					</Col>
				</Row>
				<Row marginBottom="lg">
					<Col width="grow">
						<Textarea
							state="error"
							label = "This is a label"
							helper = "This is some helper text"
							placeholder = "This is the placeholder"
						/>
					</Col>
				</Row>
				<Row marginBottom="lg">
					<Col width="grow">
						<Textarea
							state="warning"
							label = "This is a label"
							helper = "This is some helper text"
							placeholder = "This is the placeholder"
						/>
					</Col>
				</Row>
				<Row>
					<Col width="grow">
						<Textarea
							state="success"
							label = "This is a label"
							helper = "This is some helper text"
							placeholder = "This is the placeholder"
						/>
					</Col>
				</Row>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Form>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Checkbox</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<Row marginBottom="lg">
					<Col width="grow">
						<Checkbox
							label="just some label"
							helper="this is some helper text"
						/>
					</Col>
				</Row>
				<Row marginBottom="lg">
					<Col width="grow">
						<Checkbox
							label="just some label"
							size="xsm"
							state="error"
						/>
					</Col>
				</Row>
				<Row marginBottom="lg">
					<Col width="grow">
						<Checkbox
							label="just some label"
							size="sm"
							state="success"
						/>
					</Col>
				</Row>
				<Row marginBottom="lg">
					<Col width="grow">
						<Checkbox
							label="just some label"
							size="md"
							state="warning"
						/>
					</Col>
				</Row>
				<Row>
					<Col width="grow">
						<Checkbox
							label="just some label"
							size="lg"
						/>
					</Col>
				</Row>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Checkbox>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>CheckboxGroup</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<Row>
					<Col width="grow">
						<CheckboxGroup />
					</Col>
				</Row>
			</div>
			<div className={style.docboxCode}>
				<div>{`<CheckboxGroup>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Switch</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<Row>
					<Col width="grow">
						<Switch />
					</Col>
				</Row>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Switch>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Switch Group</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<Row>
					<Col width="grow">
						<SwitchGroup />
					</Col>
				</Row>
			</div>
			<div className={style.docboxCode}>
				<div>{`<SwitchGroup>`}</div>
			</div>
		</div>

	</div>
);

export default PageForm;
