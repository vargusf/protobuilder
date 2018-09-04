import React, { Component } from 'react';
import { Navbar, NavbarMenu, NavbarLogo, NavbarItem } from '../../components/Navbar';
import Button from '../../components/Button';
import logo from '../../imgs/logo.png';

class Header extends Component {
  render() {
    return (
      <Navbar paddingEnds="sm">
        <NavbarMenu>
          <NavbarLogo
            logo={logo}
            maxWidth="160"
          />
          <NavbarItem>
            <Button
              btnType="link"
              to=""
            >
              Documentation
            </Button>
            <Button
              btnType="link"
              to=""
            >
              Preview
            </Button>
          </NavbarItem>
        </NavbarMenu>
        <NavbarMenu
          gutter='none'
        >
          <NavbarItem>
            <Button
              to="buttons"
              color="white"
            >
              Support
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              to="buttons"
              btnType="link"
            >
              <i className="fab fa-github Icon--size-x2"></i>
            </Button>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
    );
  }
}

export default Header;



