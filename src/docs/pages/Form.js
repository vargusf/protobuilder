import React from 'react';

import { Input } from '../../index';

import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

const PageForm = () => (
	<div>
		<h1 className={style.docHeading1}>Form</h1>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<h3 className={`${style.docHeading3}`}>Input</h3>
				<Input label="Label" />
				<h3 className={`${style.docHeading3} ${protoStyle.marginEndsLg}`}>Error</h3>
				<Input label="Label" state="error" />
				<h3 className={`${style.docHeading3} ${protoStyle.marginEndsLg}`}>Success</h3>
				<Input label="Label" state="success" />
				<h3 className={`${style.docHeading3} ${protoStyle.marginEndsLg}`}>Warning</h3>
				<Input label="Label" state="warning" />
			</div>
			<div className={style.docboxCode}>
				<div>{`<Form>`}</div>
			</div>
		</div>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<h3 className={`${style.docHeading3}`}>sizes</h3>
				<div className={protoStyle.marginEndsLg}><Input label="xsm" size="xsm" /></div>
				<div className={protoStyle.marginEndsLg}><Input label="sm" size="sm" /></div>
				<div className={protoStyle.marginEndsLg}><Input label="md" size="md" /></div>
				<div className={protoStyle.marginEndsLg}><Input label="lg" size="lg" /></div>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Form>`}</div>
			</div>
		</div>
	</div>
);

export default PageForm;
