import React from 'react';

import protoStyle from '../../styles/global.css';
import style from '../Docs.css';

const PageColor = () => (
	<div>

		<h1 className={style.docHeading1}>Color</h1>

		<h2 className={style.docHeading2}>Primary</h2>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={`${protoStyle.displayFlex} ${protoStyle.flexWrap}`}>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorPrimary}`}></div>
						<div className={style.swatchText}>Primary</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorPrimaryLight}`}></div>
						<div className={style.swatchText}>Primary Light</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorPrimaryDark}`}></div>
						<div className={style.swatchText}>Primary Dark</div>
					</div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>primary</div>
				<div>primaryLight</div>
				<div>primaryDark</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Secondary</h2>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={`${protoStyle.displayFlex} ${protoStyle.flexWrap}`}>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorSecondary}`}></div>
						<div className={style.swatchText}>Secondary</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorSecondaryLight}`}></div>
						<div className={style.swatchText}>Secondary Light</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorSecondaryDark}`}></div>
						<div className={style.swatchText}>Secondary Dark</div>
					</div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>secondary</div>
				<div>secondaryLight</div>
				<div>secondaryDark</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Tertiary</h2>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={`${protoStyle.displayFlex} ${protoStyle.flexWrap}`}>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorTertiary}`}></div>
						<div className={style.swatchText}>Tertiary</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorTertiaryLight}`}></div>
						<div className={style.swatchText}>Tertiary Light</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorTertiaryDark}`}></div>
						<div className={style.swatchText}>Tertiary Dark</div>
					</div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>tertiary</div>
				<div>tertiaryLight</div>
				<div>tertiaryDark</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Greys</h2>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={`${protoStyle.displayFlex} ${protoStyle.flexWrap}`}>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorGrey100}`}></div>
						<div className={style.swatchText}>Grey 100</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorGrey200}`}></div>
						<div className={style.swatchText}>Grey 200</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorGrey300}`}></div>
						<div className={style.swatchText}>Grey 300</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorGrey400}`}></div>
						<div className={style.swatchText}>Grey 400</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorGrey500}`}></div>
						<div className={style.swatchText}>Grey 500</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorGrey600}`}></div>
						<div className={style.swatchText}>Grey 600</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorGrey700}`}></div>
						<div className={style.swatchText}>Grey 700</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorGrey800}`}></div>
						<div className={style.swatchText}>Grey 800</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorGrey900}`}></div>
						<div className={style.swatchText}>Grey 900</div>
					</div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>grey100</div>
				<div>grey200</div>
				<div>grey300</div>
				<div>grey400</div>
				<div>grey500</div>
				<div>grey600</div>
				<div>grey700</div>
				<div>grey800</div>
				<div>grey900</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Black &amp; White</h2>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={`${protoStyle.displayFlex} ${protoStyle.flexWrap}`}>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorWhite}`}></div>
						<div className={style.swatchText}>White</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorBlack}`}></div>
						<div className={style.swatchText}>Black</div>
					</div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>white</div>
				<div>black</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>Others</h2>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={`${protoStyle.displayFlex} ${protoStyle.flexWrap}`}>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorRed}`}></div>
						<div className={style.swatchText}>Red</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorGreen}`}></div>
						<div className={style.swatchText}>Green</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorBlue}`}></div>
						<div className={style.swatchText}>Blue</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorYellow}`}></div>
						<div className={style.swatchText}>Yellow</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorCyan}`}></div>
						<div className={style.swatchText}>Cyan</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorMagenta}`}></div>
						<div className={style.swatchText}>Magenta</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorOrange}`}></div>
						<div className={style.swatchText}>Orange</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorPink}`}></div>
						<div className={style.swatchText}>Pink</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorPurple}`}></div>
						<div className={style.swatchText}>Purple</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorAzure}`}></div>
						<div className={style.swatchText}>Azure</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorTeal}`}></div>
						<div className={style.swatchText}>Teal</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorLime}`}></div>
						<div className={style.swatchText}>Lime</div>
					</div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>red</div>
				<div>green</div>
				<div>blue</div>
				<div>yellow</div>
				<div>cyan</div>
				<div>magenta</div>
				<div>orange</div>
				<div>pink</div>
				<div>purple</div>
				<div>azure</div>
				<div>teal</div>
				<div>lime</div>
			</div>
		</div>

		<h2 className={style.docHeading2}>UI</h2>

		<div className={style.docbox}>
			<div className={style.docboxContent}>
				<div className={`${protoStyle.displayFlex} ${protoStyle.flexWrap}`}>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorInfo}`}></div>
						<div className={style.swatchText}>Info</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorSuccess}`}></div>
						<div className={style.swatchText}>Success</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorWarning}`}></div>
						<div className={style.swatchText}>Warning</div>
					</div>
					<div className={style.swatch}>
						<div className={`${style.swatchColor} ${protoStyle.backgroundColorError}`}></div>
						<div className={style.swatchText}>Error</div>
					</div>
				</div>
			</div>
			<div className={style.docboxCode}>
				<div>info</div>
				<div>success</div>
				<div>warning</div>
				<div>error</div>
			</div>
		</div>

	</div>
);

export default PageColor;
