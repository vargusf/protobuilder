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

				{/* <h1>Config</h1>
				<h2>Colors</h2>
				<div className="Layout--row Layout--cols-4">
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-white">white</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-black Text--color-white">black</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-offwhite">offwhite</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-midnight Text--color-white">midnight</div>
				</div>
				<div className="Layout--row Layout--cols-9">
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-grey100">grey100</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-grey200">grey200</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-grey300">grey300</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-grey400">grey400</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-grey500">grey500</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-grey600">grey600</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-grey700">grey700</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-grey800">grey800</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-grey900">grey900</div>
				</div>
				<div className="Layout--row Layout--cols-3">
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-primary">primary</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-secondary">secondary</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-tertiary">tertiary</div>
				</div>
				<div className="Layout--row Layout--cols-6">
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-primaryLight">primaryLight</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-primaryDark">primaryDark</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-secondaryLight">secondaryLight</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-secondaryDark">secondaryDark</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-tertiaryLight">tertiaryLight</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-tertiaryDark">tertiaryDark</div>
				</div>
				<div className="Layout--row Layout--cols-12">
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-red">red</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-green">green</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-blue">blue</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-yellow">yellow</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-cyan">cyan</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-magenta">magenta</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-orange">orange</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-pink">pink</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-purple">purple</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-azure">azure</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-teal">teal</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-lime">lime</div>
				</div>
				<div className="Layout--row Layout--cols-4">
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-info">info</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-success">success</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-warning">warning</div>
					<div className="ProtoDemo__box Layout--col-1 Utils--background-color-error">error</div>
				</div>
				<h1>Base</h1>
				<h2>Display</h2>
				<div className="Layout--fixed-width">
					<div className="Text--display-1">Text--display-1</div>
					<div className="Text--display-2">Text--display-2</div>
					<div className="Text--display-3">Text--display-3</div>
					<div className="Text--display-4">Text--display-4</div>
				</div>
				<h2>Headings</h2>
				<div className="Layout--fixed-width">
					<div className="Text--heading-1">Text--heading-1</div>
					<div className="Text--heading-2">Text--heading-2</div>
					<div className="Text--heading-3">Text--heading-3</div>
					<div className="Text--heading-4">Text--heading-4</div>
					<div className="Text--heading-5">Text--heading-5</div>
					<div className="Text--heading-6">Text--heading-6</div>
				</div>
				<h1>Components</h1>

				<h2>Alert</h2>
				<div className="Layout--fixed-width">
					{`<Alert />`}
					<h3>Options</h3>
					<ul>
						<li>color: (info|success|warning|error), default: info</li>
					</ul>
				</div>

				<h2>Button</h2>
				<div className="Layout--fixed-width">
					{`<Button />`}
					<h3>Options</h3>
					<ul>
						<li>type: (button|link|submit|reset|href), default: button</li>
						<li>display: (inline|inline-block|flex), default: inline-block</li>
						<li>fill: (true|false), default: true</li>
						<li>color: (primary|secondary|grey|white), default: primary</li>
						<li>size: (sm|md|lg|xlg), default: md</li>
						<li>to: [string] default: null, applicable if type=link</li>
						<li>target: default: _self</li>
						<li>onClick = () => {}</li>
					</ul>
				</div>

				<h2>Spinner</h2>
				<div className="Layout--fixed-width">
					{`<Spinner />`}
					<h3>Options</h3>
					<ul>
						<li>size: (xsm|sm|md), default: md</li>
						<li>color: (primary|white), default: primary</li>
						<li>display: (inline|centered), default: inline</li>
					</ul>
				</div>
				
				<h2>Nag</h2>
				<div className="Layout--fixed-width">
					{`<Nag />`}
					<h3>Options</h3>
					<ul>
						<li>color: (primary|primaryLight|primaryDark), default: primary</li>
						<li>isDismissable: (true|false), default: true</li>
					</ul>
				</div>

				<h2>Modal</h2>
				<div className="Layout--fixed-width">
					{`<Modal />`}
					<h3>Options</h3>
					<ul>
						<li>type: (default|custom), default: default</li>
					</ul>
				</div> */}
				
			</div>
		);
	}
}

export default Docs;
