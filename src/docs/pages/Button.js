import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '../../index';

import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

const PageButton = () => (
	<div>

		<h1 className={style.docHeading1}>Button</h1>

		<h2 className={style.docHeading2}>Colors</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.gutterXsm} `}>
					<div><Button>Primary</Button></div>
					<div><Button color="secondary">Secondary</Button></div>
					<div><Button color="tertiary">Tertiary</Button></div>
					<div><Button color="grey">Grey</Button></div>
					<div><Button color="white">White</Button></div>
					<div><Button color="info">Info</Button></div>
					<div><Button color="success">Success</Button></div>
					<div><Button color="warning">Warning</Button></div>
					<div><Button color="error">Error</Button></div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Button>Primary</Button>`}</div>
				<div>{`<Button color="secondary">Secondary</Button>`}</div>
				<div>{`<Button color="tertiary">Tertiary</Button>`}</div>
				<div>{`<Button color="grey">Grey</Button>`}</div>
				<div>{`<Button color="white">White</Button>`}</div>
				<div>{`<Button color="info">Info</Button>`}</div>
				<div>{`<Button color="success">Success</Button>`}</div>
				<div>{`<Button color="warning">Warning</Button>`}</div>
				<div>{`<Button color="error">Error</Button>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>No Fill</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.gutterXsm} `}>
					<div><Button fill="false">Primary</Button></div>
					<div><Button fill="false" color="secondary">Secondary</Button></div>
					<div><Button fill="false" color="tertiary">Tertiary</Button></div>
					<div><Button fill="false" color="grey">Grey</Button></div>
					<div><Button fill="false" color="info">Info</Button></div>
					<div><Button fill="false" color="success">Success</Button></div>
					<div><Button fill="false" color="warning">Warning</Button></div>
					<div><Button fill="false" color="error">Error</Button></div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Button fill="false">Primary</Button>`}</div>
				<div>{`<Button fill="false" color="secondary">Secondary</Button>`}</div>
				<div>{`<Button fill="false" color="tertiary">Tertiary</Button>`}</div>
				<div>{`<Button fill="false" color="grey">Grey</Button>`}</div>
				<div>{`<Button fill="false" color="info">Info</Button>`}</div>
				<div>{`<Button fill="false" color="success">Success</Button>`}</div>
				<div>{`<Button fill="false" color="warning">Warning</Button>`}</div>
				<div>{`<Button fill="false" color="error">Error</Button>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>No Border</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.gutterXsm} `}>
					<div><Button fill="false" border="false">Primary</Button></div>
					<div><Button fill="false" border="false" color="secondary">Secondary</Button></div>
					<div><Button fill="false" border="false" color="tertiary">Tertiary</Button></div>
					<div><Button fill="false" border="false" color="grey">Grey</Button></div>
					<div><Button fill="false" border="false" color="info">Info</Button></div>
					<div><Button fill="false" border="false" color="success">Success</Button></div>
					<div><Button fill="false" border="false" color="warning">Warning</Button></div>
					<div><Button fill="false" border="false" color="error">Error</Button></div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Button fill="false" border="false">Primary</Button>`}</div>
				<div>{`<Button fill="false" border="false" color="secondary">Secondary</Button>`}</div>
				<div>{`<Button fill="false" border="false" color="tertiary">Tertiary</Button>`}</div>
				<div>{`<Button fill="false" border="false" color="grey">Grey</Button>`}</div>
				<div>{`<Button fill="false" border="false" color="info">Info</Button>`}</div>
				<div>{`<Button fill="false" border="false" color="success">Success</Button>`}</div>
				<div>{`<Button fill="false" border="false" color="warning">Warning</Button>`}</div>
				<div>{`<Button fill="false" border="false" color="error">Error</Button>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Icons</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.gutterXsm} `}>
					<div><Button circle="true"><FontAwesomeIcon icon={['fas', 'external-link-alt']} /></Button></div>
					<div><Button circle="true" color="secondary"><FontAwesomeIcon icon={['fas', 'external-link-alt']} /></Button></div>
					<div><Button circle="true" fill="false" color="grey"><FontAwesomeIcon icon={['fas', 'external-link-alt']} /></Button></div>
					<div><Button circle="true" color="grey" size="sm"><FontAwesomeIcon icon={['fas', 'external-link-alt']} transform='shrink-3' /></Button></div>
					<div><Button circle="true" color="grey"><FontAwesomeIcon icon={['fas', 'external-link-alt']} /></Button></div>
					<div><Button circle="true" color="grey"size="lg"><FontAwesomeIcon icon={['fas', 'external-link-alt']} transform='grow-3' /></Button></div>
					<div><Button circle="true" color="info" size="sm"><FontAwesomeIcon icon={['fas', 'external-link-alt']} transform='shrink-3' /></Button></div>
					<div><Button circle="true" color="info"><FontAwesomeIcon icon={['fas', 'external-link-alt']} /></Button></div>
					<div><Button circle="true" color="info"size="lg"><FontAwesomeIcon icon={['fas', 'external-link-alt']} transform='grow-3' /></Button></div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Button circle="true"><FontAwesomeIcon icon={['fas', 'external-link-alt']} /></Button>`}</div>
				<div>{`<Button circle="true" color="secondary"><FontAwesomeIcon icon={['fas', 'external-link-alt']} /></Button>`}</div>
				<div>{`<Button circle="true" fill="false" color="grey"><FontAwesomeIcon icon={['fas', 'external-link-alt']} /></Button>`}</div>
				<div>{`<Button circle="true" color="grey" size="sm"><FontAwesomeIcon icon={['fas', 'external-link-alt']} transform='shrink-3' /></Button>`}</div>
				<div>{`<Button circle="true" color="grey"><FontAwesomeIcon icon={['fas', 'external-link-alt']} /></Button>`}</div>
				<div>{`<Button circle="true" color="grey"size="lg"><FontAwesomeIcon icon={['fas', 'external-link-alt']} transform='grow-3' /></Button>`}</div>
				<div>{`<Button circle="true" color="info" size="sm"><FontAwesomeIcon icon={['fas', 'external-link-alt']} transform='shrink-3' /></Button>`}</div>
				<div>{`<Button circle="true" color="info"><FontAwesomeIcon icon={['fas', 'external-link-alt']} /></Button>`}</div>
				<div>{`<Button circle="true" color="info"size="lg"><FontAwesomeIcon icon={['fas', 'external-link-alt']} transform='grow-3' /></Button>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Rounded</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.gutterXsm} `}>
					<div><Button rounded="true" >Primary</Button></div>
					<div><Button rounded="true" color="secondary">Secondary</Button></div>
					<div><Button rounded="true" color="tertiary">Tertiary</Button></div>
					<div><Button rounded="true" color="grey">Grey</Button></div>
					<div><Button rounded="true" color="info">Info</Button></div>
					<div><Button rounded="true" color="success">Success</Button></div>
					<div><Button rounded="true" color="warning">Warning</Button></div>
					<div><Button rounded="true" color="error">Error</Button></div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Button rounded="true" >Primary</Button>`}</div>
				<div>{`<Button rounded="true" color="secondary">Secondary</Button>`}</div>
				<div>{`<Button rounded="true" color="tertiary">Tertiary</Button>`}</div>
				<div>{`<Button rounded="true" color="grey">Grey</Button>`}</div>
				<div>{`<Button rounded="true" color="info">Info</Button>`}</div>
				<div>{`<Button rounded="true" color="success">Success</Button>`}</div>
				<div>{`<Button rounded="true" color="warning">Warning</Button>`}</div>
				<div>{`<Button rounded="true" color="error">Error</Button>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Sizes</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.gutterXsm} `}>
					<div><Button size="xsm">Extra Small</Button></div>
					<div><Button size="sm">Small</Button></div>
					<div><Button size="md">Medium</Button></div>
					<div><Button size="lg">Large</Button></div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Button size="xsm">Extra Small</Button>`}</div>
				<div>{`<Button size="sm">Small</Button>`}</div>
				<div>{`<Button size="md">Medium</Button>`}</div>
				<div>{`<Button size="lg">Large</Button>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Full Width</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div><Button fullwidth="true">Button</Button></div>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Button fullwidth="true">Button</Button>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Disabled</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.gutterXsm} `}>
					<div><Button disabled="true">Button</Button></div>
					<div><Button disabled="true" fill="false">Button</Button></div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>{`<Button disabled="true">Button</Button>`}</div>
				<div>{`<Button disabled="true" fill="false">Button</Button>`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Types</h2>
		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<h3 className={style.docHeading3}>Horizontal</h3>
				<div className={` ${protoStyle.displayFlex} ${protoStyle.gutterXsm} `}>
					<div><Button>Button</Button></div>
					<div><Button type="link" to="">Link</Button></div>
					<div><Button type="href">Href</Button></div>
					<div><Button type="submit">Submit</Button></div>
					<div><Button type="reset">Reset</Button></div>
				</div>
				<h3 className={`${style.docHeading3} ${protoStyle.marginTopXsm}`}>Vertical</h3>
				<div><Button>Button</Button></div>
				<div className={protoStyle.marginTopXsm}><Button type="link" to="">Link</Button></div>
				<div className={protoStyle.marginTopXsm}><Button type="href">Href</Button></div>
				<div className={protoStyle.marginTopXsm}><Button type="submit">Submit</Button></div>
				<div className={protoStyle.marginTopXsm}><Button type="reset">Reset</Button></div>

			</div>
			<div className={style.docboxCode}>
				<div>{`<Button onClick={}>Button</Button>`}</div>
				<div>{`<Button type="link" to="">Link</Button>`}</div>
				<div>{`<Button type="href" to="" target="_self">Href</Button>`}</div>
				<div>{`<Button type="submit">Submit</Button>`}</div>
				<div>{`<Button type="reset">Reset</Button>`}</div>
			</div>
		</div>

	</div>
);

export default PageButton;
