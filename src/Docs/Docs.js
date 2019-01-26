import React, { Component } from 'react';
import Header from '../Modules/Header/Header';
import Sidebar from '../Modules/Sidebar/Sidebar';

class Docs extends Component {
  render() {
    return (
      <div className="ProtoDemo">
        <Header />
        <Sidebar />
        <div className="Layout--row">
          <div className="Layout--width-20">stuff</div>
          <div className="Layout--width-80">more stuff</div>
        </div>

        <h1>Config</h1>
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
        </div>
        
      </div>
    );
  }
}

export default Docs;
