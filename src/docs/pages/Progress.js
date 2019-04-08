import React from 'react';

import { Progress } from '../../index';

import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

const PageProgress = () => (
	<div>
		<h1 className={style.docHeading1}>Progress</h1>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<h3 className={style.docHeading3}>Info</h3>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterXsm} ${protoStyle.marginTopXsm} ${protoStyle.marginBottomLg}`}>
					<div className={protoStyle.flexWidth50per}><Progress value={45} type="info" /></div>
				</div>
				<h3 className={style.docHeading3}>Warning</h3>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterXsm} ${protoStyle.marginTopXsm} ${protoStyle.marginBottomLg}`}>
					<div className={protoStyle.flexWidth50per}><Progress value={60} type="warning" /></div>
				</div>
				<h3 className={style.docHeading3}>Success</h3>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterXsm} ${protoStyle.marginTopXsm} ${protoStyle.marginBottomLg}`}>
					<div className={protoStyle.flexWidth50per}><Progress value={15} type="success" message="File uploaded" /></div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Progress value={45} type="info" />`}</div>
				<div>{`<Progress value={60} type="warning" />`}</div>
				<div>{`<Progress value={15} type="success" message="File uploaded" />`}</div>
			</div>
		</div>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<h3 className={style.docHeading3}>Error</h3>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterXsm} ${protoStyle.marginTopXsm} ${protoStyle.marginBottomLg}`}>
					<div className={protoStyle.flexWidth50per}><Progress value={50} type="error" message="There was an error" /></div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Progress value={50} type="error" message="There was an error" />`}</div>
			</div>
		</div>
	</div>
);

export default PageProgress;
