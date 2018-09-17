import React, { Component } from 'react';
import { Sidebar, SidebarMenu, SidebarItem } from '../../components/Sidebar';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <Sidebar>
        <SidebarMenu>
          <SidebarItem isTitle='true'>Core</SidebarItem>
          <SidebarItem><Link className="Link" to="/">Reset</Link></SidebarItem>
          <SidebarItem><Link className="Link" to="/">Mobile</Link></SidebarItem>
          <SidebarItem><Link className="Link" to="/">Functions</Link></SidebarItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarItem isTitle='true'>Style</SidebarItem>
          <SidebarItem><Link className="Link" to="/">Colors</Link></SidebarItem>
          <SidebarItem><Link className="Link" to="typography">Typography</Link></SidebarItem>
          <SidebarItem><Link className="Link" to="/">Icons</Link></SidebarItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarItem isTitle='true'>Layout</SidebarItem>
          <SidebarItem><Link className="Link" to="/">Grid</Link></SidebarItem>
          <SidebarItem><Link className="Link" to="/">Paper</Link></SidebarItem>
          <SidebarItem><Link className="Link" to="/">Card</Link></SidebarItem>
          <SidebarItem><Link className="Link" to="/">Well</Link></SidebarItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarItem isTitle='true'>Components</SidebarItem>
          <SidebarItem><Link className="Link" to="/">Navbar</Link></SidebarItem>
          <SidebarItem><Link className="Link" to="/">Sidebar</Link></SidebarItem>
          <SidebarItem><Link className="Link" to="buttons">Buttons</Link></SidebarItem>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarItem isTitle='true'>TEMP PAGE(S)</SidebarItem>
          <SidebarItem><Link className="Link" to="checkout">Checkout</Link></SidebarItem>
        </SidebarMenu>
      </Sidebar>
    );
  }
}

export default Header;