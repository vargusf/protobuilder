import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

const PageIcon = () => (
	<div>

		<h1 className={style.docHeading1}>Icon (Font Awesome)</h1>

		<h2 className={style.docHeading2}>Setup</h2>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<h3 className={style.docHeading3}>App</h3>
			</div>
			<div className={style.docboxCode}>
				<div>{`import { library } from '@fortawesome/fontawesome-svg-core';`}</div>
				<div>{`import { faPhone, faDoorOpen } from '@fortawesome/free-solid-svg-icons';`}</div>
				<div>{`import { } from '@fortawesome/free-regular-svg-icons';`}</div>
				<div>{`import { } from '@fortawesome/free-brands-svg-icons';`}</div>
				<div>{`library.add( faPhone, faDoorOpen );`}</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Usage</h2>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<h3 className={`${style.docHeading3}`}>Fixed Width</h3>
				<FontAwesomeIcon icon={['fas', 'door-open']} fixed-width='true' />
				<h3 className={` ${style.docHeading3} ${protoStyle.paddingTopSm}`}>Shrink</h3>
				<FontAwesomeIcon icon={['fas', 'door-open']} transform='shrink-5' />
				<h3 className={` ${style.docHeading3} ${protoStyle.paddingTopSm}`}>Grow</h3>
				<FontAwesomeIcon icon={['fas', 'door-open']} transform='grow-5' />
				<h3 className={` ${style.docHeading3} ${protoStyle.paddingTopSm}`}>Rotate</h3>
				<FontAwesomeIcon icon={['fas', 'door-open']} rotation={90} />
			</div>
			<div className={style.docboxCode}>
				<div>{`import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';`}</div>
				<div>{`<FontAwesomeIcon icon={['fas', 'door-open']} fixed-width />`}</div>
				<div>{`<FontAwesomeIcon icon={['fas', 'door-open']} transform='shrink-5' />`}</div>
				<div>{`<FontAwesomeIcon icon={['fas', 'door-open']} transform='grow-5' />`}</div>
				<div>{`<FontAwesomeIcon icon={['fas', 'door-open']} rotation={90} />`}</div>
			</div>
		</div>

	</div>
);

export default PageIcon;
