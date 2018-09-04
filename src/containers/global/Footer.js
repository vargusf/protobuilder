import React, { Component } from 'react';

class Header extends Component {
  render() {
    const date = new Date();
    const currentYear = date.getFullYear();

    return (
      <div className="Utils--background-color-200 Utils--padding-ends-xsm Utils--border-top-one-solid-grey300 Text--align-center Text--font-size-xxsm Text--color-grey600">
        &copy; {currentYear} Proto 
      </div>
    );
  }
}

export default Header;



