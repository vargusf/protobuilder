import React, { Component } from 'react';

import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

const PageColor = () => (
	<div>

		<h1 className={style.docHeading1}>Text</h1>

		<h2 className={style.docHeading2}>Font Sizes</h2>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={protoStyle.fontsizeHeading1}>Heading Size 1</div>
				<div className={protoStyle.fontsizeHeading2}>Heading Size 2</div>
				<div className={protoStyle.fontsizeHeading3}>Heading Size 3</div>
				<div className={protoStyle.fontsizeHeading4}>Heading Size 4</div>
				<div className={protoStyle.fontsizeHeading5}>Heading Size 5</div>
				<div className={protoStyle.fontsizeText1}>Text Size 1</div>
				<div className={protoStyle.fontsizeText2}>Text Size 2</div>
				<div className={protoStyle.fontsizeText3}>Text Size 3</div>
				<div className={protoStyle.fontsizeText4}>Text Size 4</div>
				<div className={protoStyle.fontsizeText5}>Text Size 5</div>
			</div>
			<div className={style.docboxCode}>
				<div>.fontsizeHeading1</div>
				<div>.fontsizeHeading2</div>
				<div>.fontsizeHeading3</div>
				<div>.fontsizeHeading4</div>
				<div>.fontsizeHeading5</div>
				<div>.fontsizeHeading6</div>
				<div>.fontsizeText1</div>
				<div>.fontsizeText2</div>
				<div>.fontsizeText3</div>
				<div>.fontsizeText4</div>
				<div>.fontsizeText5</div>
				<div>.fontsizeText6</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Font Family</h2>

		<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterMd} `}>
			<div className={protoStyle.colWidth1of2}>
				<h3 className={style.docHeading3}>Primary</h3>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<p className={` ${protoStyle.fontPrimary} ${protoStyle.marginBottomXsm} `}>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
						<p className={` ${protoStyle.fontPrimary} ${protoStyle.uppercase} `}>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
					</div>
					<div className={style.docboxCode}>
						<div>.fontPrimary</div>
					</div>
				</div>
			</div>
			<div className={protoStyle.colWidth1of2}>
				<h3 className={style.docHeading3}>Secondary</h3>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<p className={` ${protoStyle.fontSecondary} ${protoStyle.marginBottomXsm} `}>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
						<p className={` ${protoStyle.fontSecondary} ${protoStyle.uppercase} `}>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</p>
					</div>
					<div className={style.docboxCode}>
						<div>.fontSecondary</div>
					</div>
				</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Weights</h2>

		<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterMd} `}>
			<div className={protoStyle.colWidth1of2}>
				<h3 className={style.docHeading3}>Primary</h3>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<div className={` ${protoStyle.fontPrimary} ${protoStyle.fontWeight100} `}>Font Weight 100</div>
						<div className={` ${protoStyle.fontPrimary} ${protoStyle.fontWeight200} `}>Font Weight 200</div>
						<div className={` ${protoStyle.fontPrimary} ${protoStyle.fontWeight300} `}>Font Weight 300</div>
						<div className={` ${protoStyle.fontPrimary} ${protoStyle.fontWeight400} `}>Font Weight 400</div>
						<div className={` ${protoStyle.fontPrimary} ${protoStyle.fontWeight400} `}>Font Weight 500</div>
						<div className={` ${protoStyle.fontPrimary} ${protoStyle.fontWeight600} `}>Font Weight 600</div>
						<div className={` ${protoStyle.fontPrimary} ${protoStyle.fontWeight700} `}>Font Weight 700</div>
						<div className={` ${protoStyle.fontPrimary} ${protoStyle.fontWeight800} `}>Font Weight 800</div>
						<div className={` ${protoStyle.fontPrimary} ${protoStyle.fontWeight900} `}>Font Weight 900</div>
					</div>
					<div className={style.docboxCode}>
						<div>.fontWeight100</div>
						<div>.fontWeight200</div>
						<div>.fontWeight300</div>
						<div>.fontWeight400</div>
						<div>.fontWeight400</div>
						<div>.fontWeight600</div>
						<div>.fontWeight700</div>
						<div>.fontWeight800</div>
						<div>.fontWeight900</div>
					</div>
				</div>
			</div>
			<div className={protoStyle.colWidth1of2}>
				<h3 className={style.docHeading3}>Secondary</h3>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<div className={` ${protoStyle.fontSecondary} ${protoStyle.fontWeight100} `}>Font Weight 100</div>
						<div className={` ${protoStyle.fontSecondary} ${protoStyle.fontWeight200} `}>Font Weight 200</div>
						<div className={` ${protoStyle.fontSecondary} ${protoStyle.fontWeight300} `}>Font Weight 300</div>
						<div className={` ${protoStyle.fontSecondary} ${protoStyle.fontWeight400} `}>Font Weight 400</div>
						<div className={` ${protoStyle.fontSecondary} ${protoStyle.fontWeight400} `}>Font Weight 500</div>
						<div className={` ${protoStyle.fontSecondary} ${protoStyle.fontWeight600} `}>Font Weight 600</div>
						<div className={` ${protoStyle.fontSecondary} ${protoStyle.fontWeight700} `}>Font Weight 700</div>
						<div className={` ${protoStyle.fontSecondary} ${protoStyle.fontWeight800} `}>Font Weight 800</div>
						<div className={` ${protoStyle.fontSecondary} ${protoStyle.fontWeight900} `}>Font Weight 900</div>
					</div>
					<div className={style.docboxCode}>
						<div>.fontWeight100</div>
						<div>.fontWeight200</div>
						<div>.fontWeight300</div>
						<div>.fontWeight400</div>
						<div>.fontWeight400</div>
						<div>.fontWeight600</div>
						<div>.fontWeight700</div>
						<div>.fontWeight800</div>
						<div>.fontWeight900</div>
					</div>
				</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Styles</h2>

		<div className={` ${protoStyle.displayFlex} ${protoStyle.colsGutterMd} `}>
			<div className={protoStyle.colWidth1of2}>
				<h3 className={style.docHeading3}>Primary</h3>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<div className={` ${protoStyle.fontPrimary} ${protoStyle.italic} `}>Italic</div>
						<div className={` ${protoStyle.fontPrimary} ${protoStyle.underline} `}>Underline</div>
						<div className={` ${protoStyle.fontPrimary} ${protoStyle.uppercase} `}>Uppercase</div>
						<div className={` ${protoStyle.fontPrimary} ${protoStyle.capitalize} `}>Capitalize</div>
						<div className={` ${protoStyle.fontPrimary} ${protoStyle.lineThrough} `}>Line Through</div>
					</div>
					<div className={style.docboxCode}>
						<div>.italic</div>
						<div>.underline</div>
						<div>.uppercase</div>
						<div>.capitalize</div>
						<div>.lineThrough</div>
					</div>
				</div>
			</div>
			<div className={protoStyle.colWidth1of2}>
				<h3 className={style.docHeading3}>Secondary</h3>
				<div className={style.docbox}>
					<div className={style.docboxContent}>
						<div className={` ${protoStyle.fontSecondary} ${protoStyle.italic} `}>Italic</div>
						<div className={` ${protoStyle.fontSecondary} ${protoStyle.underline} `}>Underline</div>
						<div className={` ${protoStyle.fontSecondary} ${protoStyle.uppercase} `}>Uppercase</div>
						<div className={` ${protoStyle.fontSecondary} ${protoStyle.capitalize} `}>Capitalize</div>
						<div className={` ${protoStyle.fontSecondary} ${protoStyle.lineThrough} `}>Line Through</div>
					</div>
					<div className={style.docboxCode}>
						<div>.italic</div>
						<div>.underline</div>
						<div>.uppercase</div>
						<div>.capitalize</div>
						<div>.lineThrough</div>
					</div>
				</div>
			</div>
		</div>

	</div>
);

export default PageColor;
