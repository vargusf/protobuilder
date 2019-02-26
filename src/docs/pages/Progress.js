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
					<div className={protoStyle.colWidth1of2}><Progress value={45} color="info" /></div>
				</div>
				<h3 className={style.docHeading3}>Warning</h3>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterXsm} ${protoStyle.marginTopXsm} ${protoStyle.marginBottomLg}`}>
					<div className={protoStyle.colWidth1of2}><Progress value={60} color="warning" /></div>
				</div>
				<h3 className={style.docHeading3}>Success</h3>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterXsm} ${protoStyle.marginTopXsm} ${protoStyle.marginBottomLg}`}>
					<div className={protoStyle.colWidth1of2}><Progress value={15} color="success" /></div>
				</div>
				<h3 className={style.docHeading3}>Error</h3>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterXsm} ${protoStyle.marginTopXsm} ${protoStyle.marginBottomLg}`}>
					<div className={protoStyle.colWidth1of2}><Progress value={70} color="error" /></div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Progress />`}</div>
			</div>
		</div>
	</div>
);

export default PageProgress;
