import React from 'react';

import { Row, Col, TextInput, Textarea, Checkbox, Switch, Radio, Select, Option, FormItemGroup } from '../../index';

import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

const PageForm = () => (
	<div>
		<h1 className={style.docHeading1}>Form</h1>

		<h2 className={style.docHeading2}>TextInput</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<h3 className={style.docHeading3}>Basic</h3>
				<TextInput label="Label" placeholder="Please input something" helper="Optional helper text"/>
				<h3 className={`${style.docHeading3} ${protoStyle.marginEndsLg}`}>Append / Prepend</h3>
				<Row marginBottom="lg">
					<Col width="50per"><TextInput append="%" label="Append" /></Col>
					<Col width="50per"><TextInput prepend="$" label="Prepend" /></Col>
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
			</div>
			<div className={style.docboxCode}>
				<div>{`<Form>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Checkbox</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<Checkbox label="just some label" />
			</div>
			<div className={style.docboxCode}>
				<div>{`<Checkbox>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Switch</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<Switch label="just some label" helper="this is some helper text this is some helper text this is some helper text" />
			</div>
			<div className={style.docboxCode}>
				<div>{`<Checkbox>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Radio</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<Row marginBottom="lg">
					<Col width="grow">
						<Radio
							label="just some label"
							name="demo"
						/>
						<Radio
							label="just some label"
							name="demo"
						/>
						<Radio
							label="just some label"
							name="demo"
							checked={true}
						/>
					</Col>
				</Row>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Checkbox>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Select</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<Row marginBottom="lg">
					<Col width="grow">
						<Select
							label="just some label"
							helper="this is some helper text"
							value="3"
							onChange={()=>{console.log("select changed!")}}
						>
							<Option value="1">option1</Option>
							<Option value="2">option2</Option>
							<Option value="3">option3</Option>
							<Option value="4">option4</Option>
						</Select>
					</Col>
				</Row>
				<Row>
					<Col>
						<Select
							value="3"
							onChange={()=>{console.log("select changed!")}}
						>
							<Option value="1">thisisatest</Option>
						</Select>
					</Col>
				</Row>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Checkbox>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Form Item Group</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<Row marginBottom="lg">
					<Col width="grow">
						<FormItemGroup
							label="this is some group label"
							helper="this is some helper text"
						>
							<Checkbox inline="false" label="just some label" />
							<Checkbox inline="false" label="just some label1" checked={true} />
							<Checkbox inline="false" label="just some label2" />
						</FormItemGroup>
					</Col>
				</Row>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Checkbox>`}</div>
			</div>
		</div>

	</div>
);

export default PageForm;
