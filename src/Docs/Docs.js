import React, { Component } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import styleGlobal from '../Styles/global.css';
import style from './Docs.css';

class Docs extends Component {
	render() {
		return (
			<div>
				<Header />
				
				<div className={styleGlobal.row}>
					<div className={styleGlobal.width20}><Sidebar /></div>
					<div className={styleGlobal.width80}>

						<h2>Colour Palette</h2>

						<h3>Primary</h3>

						<div className={`${styleGlobal.row} ${styleGlobal.wrap}`}>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorPrimary}`}></div>
								<div className={style.swatchText}>primary</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorPrimaryLight}`}></div>
								<div className={style.swatchText}>primaryLight</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorPrimaryDark}`}></div>
								<div className={style.swatchText}>primaryDark</div>
							</div>
						</div>

						<h3>Secondary</h3>

						<div className={`${styleGlobal.row} ${styleGlobal.wrap}`}>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorSecondary}`}></div>
								<div className={style.swatchText}>secondary</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorSecondaryLight}`}></div>
								<div className={style.swatchText}>secondaryLight</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorSecondaryDark}`}></div>
								<div className={style.swatchText}>secondaryDark</div>
							</div>
						</div>

						<h3>Tertiary</h3>

						<div className={`${styleGlobal.row} ${styleGlobal.wrap}`}>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorTertiary}`}></div>
								<div className={style.swatchText}>tertiary</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorTertiaryLight}`}></div>
								<div className={style.swatchText}>tertiaryLight</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorTertiaryDark}`}></div>
								<div className={style.swatchText}>tertiaryDark</div>
							</div>
						</div>

						<h3>Others</h3>

						<div className={`${styleGlobal.row} ${styleGlobal.wrap}`}>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorRed}`}></div>
								<div className={style.swatchText}>red</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorGreen}`}></div>
								<div className={style.swatchText}>green</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorBlue}`}></div>
								<div className={style.swatchText}>blue</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorYellow}`}></div>
								<div className={style.swatchText}>yellow</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorCyan}`}></div>
								<div className={style.swatchText}>cyan</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorMagenta}`}></div>
								<div className={style.swatchText}>magenta</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorOrange}`}></div>
								<div className={style.swatchText}>orange</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorPink}`}></div>
								<div className={style.swatchText}>pink</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorPurple}`}></div>
								<div className={style.swatchText}>purple</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorAzure}`}></div>
								<div className={style.swatchText}>azure</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorTeal}`}></div>
								<div className={style.swatchText}>teal</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorLime}`}></div>
								<div className={style.swatchText}>lime</div>
							</div>
						</div>

						<h3>Black &amp; White</h3>

						<div className={`${styleGlobal.row} ${styleGlobal.wrap}`}>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorWhite}`}></div>
								<div className={style.swatchText}>white</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorBlack}`}></div>
								<div className={style.swatchText}>black</div>
							</div>
						</div>

						<h3>Greys</h3>

						<div className={`${styleGlobal.row} ${styleGlobal.wrap}`}>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorGrey100}`}></div>
								<div className={style.swatchText}>grey100</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorGrey200}`}></div>
								<div className={style.swatchText}>grey200</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorGrey300}`}></div>
								<div className={style.swatchText}>grey300</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorGrey400}`}></div>
								<div className={style.swatchText}>grey400</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorGrey500}`}></div>
								<div className={style.swatchText}>grey500</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorGrey600}`}></div>
								<div className={style.swatchText}>grey600</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorGrey700}`}></div>
								<div className={style.swatchText}>grey700</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorGrey800}`}></div>
								<div className={style.swatchText}>grey800</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorGrey900}`}></div>
								<div className={style.swatchText}>grey900</div>
							</div>
						</div>

						<h3>UI</h3>

						<div className={`${styleGlobal.row} ${styleGlobal.wrap}`}>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorInfo}`}></div>
								<div className={style.swatchText}>info</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorSuccess}`}></div>
								<div className={style.swatchText}>success</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorWarning}`}></div>
								<div className={style.swatchText}>warning</div>
							</div>
							<div className={style.swatch}>
								<div className={`${style.swatchColor} ${styleGlobal.backgroundColorError}`}></div>
								<div className={style.swatchText}>error</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default Docs;
