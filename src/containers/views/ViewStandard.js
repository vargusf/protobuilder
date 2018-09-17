import React, { Component } from 'react';
import Header from '../global/Header';
import Footer from '../global/Footer';
import MainNav from '../global/MainNav';

class ViewStandard extends Component {
  render() {
    return (
      <div className="Layout--min-height-100vh Layout--col ">
        <Header />
        <div className="Layout--row Layout--row-gutter-sm Layout--grow-1">
          <MainNav />
          <div className="Layout--grow-1">
            <div className="Utils--padding-ends-sm Utils--padding-right-md">
              <div className="Text--display-3 Utils--margin-bottom-lg Utils--padding-ends-sm Utils--border-bottom-one-solid-grey300">{this.props.title}</div>
              {this.props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ViewStandard;
