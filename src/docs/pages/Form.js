import React from 'react';

import { Input } from '../../index';

import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

const PageForm = () => (
	<div>
		<h1 className={style.docHeading1}>Form</h1>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<h3 className={style.docHeading3}>Input</h3>
				<Input />
			</div>
			<div className={style.docboxCode}>
				<div>{`<Form>`}</div>
			</div>
		</div>
	</div>
);

export default PageForm;
