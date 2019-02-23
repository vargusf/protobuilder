import React from 'react';

import { Spinner } from '../../index';

import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

const PageSpinner = () => (
	<div>

		<h1 className={style.docHeading1}>Spinner</h1>

		<h2 className={style.docHeading2}>Colors</h2>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterXsm} `}>
					<div><Spinner /></div>
					<div className={protoStyle.backgroundColorPrimary}><Spinner color="white" /></div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>{`<div><Spinner /></div>`}</div>
				<div>{`<Spinner color="white" /></div>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Sizes</h2>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterXsm} `}>
					<div><Spinner size="xsm" /></div>
					<div><Spinner size="sm" /></div>
					<div><Spinner size="md" /></div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Spinner size="xsm" />`}</div>
				<div>{`<Spinner size="sm" />`}</div>
				<div>{`<Spinner size="md" />`}</div>
			</div>
		</div>

	</div>
);

export default PageSpinner;
