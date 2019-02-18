import React, { Component } from 'react';

import { Button } from '../../index';

import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

const PageButton = () => (
	<div>
		<h1 className={style.docHeading1}>Alert</h1>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<h3 className={style.docHeading3}>Info</h3>
				<h3 className={` ${style.docHeading3} ${protoStyle.marginTopMd} `}>Success</h3>
				<h3 className={` ${style.docHeading3} ${protoStyle.marginTopMd} `}>Warning</h3>
				<h3 className={` ${style.docHeading3} ${protoStyle.marginTopMd} `}>Error</h3>
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

export default PageButton;
