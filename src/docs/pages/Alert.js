import React, { Component } from 'react';

import { Alert } from '../../index';

import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

const PageAlert = () => (
	<div>
		<h1 className={style.docHeading1}>Alert</h1>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<h3 className={style.docHeading3}>Info</h3>
				<Alert>This is an alert!</Alert>
				<h3 className={` ${style.docHeading3} ${protoStyle.marginTopMd} `}>Success</h3>
				<Alert color="success">This is an alert!</Alert>
				<h3 className={` ${style.docHeading3} ${protoStyle.marginTopMd} `}>Warning</h3>
				<Alert color="warning">This is an alert!</Alert>
				<h3 className={` ${style.docHeading3} ${protoStyle.marginTopMd} `}>Error</h3>
				<Alert color="error">This is an alert!</Alert>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Alert>This is an alert!</Alert>`}</div>
				<div>{`<Alert color="success">This is an alert!</Alert>`}</div>
				<div>{`<Alert color="warning">This is an alert!</Alert>`}</div>
				<div>{`<Alert color="error">This is an alert!</Alert>`}</div>
			</div>
		</div>
	</div>
);

export default PageAlert;
