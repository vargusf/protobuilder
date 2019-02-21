import React, { Component } from 'react';

import { Button } from '../../index';

import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

const PageButton = () => (
	<div>

		<h1 className={style.docHeading1}>Buttonnnn</h1>

		<h2 className={style.docHeading2}>Default</h2>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterXsm} `}>
					<div><Button>Button</Button></div>
					<div><Button fill="false">Button</Button></div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>{`	<Button>Button</Button>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Sizes</h2>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterXsm} `}>
					<Button size="sm">Button</Button>
					<Button size="md">Button</Button>
					<Button size="lg">Button</Button>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>{`	<Button>Button</Button>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Types</h2>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterXsm} `}>
					<div>
						<h3 className={style.docHeading3}>Button</h3>
						<Button>Button</Button>
					</div>
					<div>
						<h3 className={style.docHeading3}>Link</h3>
						<Button type="link" to="">Button</Button>
					</div>
					<div>
						<h3 className={style.docHeading3}>Href</h3>
						<Button type="href">Button</Button>
					</div>
					<div>
						<h3 className={style.docHeading3}>Submit</h3>
						<Button type="submit">Button</Button>
					</div>
					<div>
						<h3 className={style.docHeading3}>Reset</h3>
						<Button type="reset">Button</Button>
					</div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>{`	<Button>Button</Button>`}</div>
			</div>
		</div>

	</div>
);

export default PageButton;
