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
        </SidebarMenu>
        <SidebarMenu>
          <SidebarItem isTitle='true'>Components</SidebarItem>
          <SidebarItem><Link className="Link" to="/">Navbar</Link></SidebarItem>
          <SidebarItem><Link className="Link" to="/">Sidebar</Link></SidebarItem>
          <SidebarItem><Link className="Link" to="buttons">Buttons</Link></SidebarItem>
        </SidebarMenu>
      </Sidebar>
    );
  }
}

export default Header;



// const Sidebar = () => {
//   return (
//     <div className="Sidebar">
//       <ul className="Sidebar__Menu">
//         <li className="Sidebar__item Sidebar__item--title">Core</li>
//         <li className="Sidebar__item"><a className="Link">Reset</a></li>
//         <li className="Sidebar__item"><a className="Link">Mobile</a></li>
//         <li className="Sidebar__item"><a className="Link">Functions</a></li>
//       </ul>
//       <ul className="Sidebar__Menu">
//         <li className="Sidebar__item Sidebar__item--title">Style</li>
//         <li className="Sidebar__item"><a className="Link">Colors</a></li>
//         <li className="Sidebar__item"><Link className="Link" to="typography">Typography</Link></li>
//         <li className="Sidebar__item"><a className="Link">Icons</a></li>
//       </ul>
//       <ul className="Sidebar__Menu">
//         <li className="Sidebar__item Sidebar__item--title">Layout</li>
//         <li className="Sidebar__item"><a className="Link">Grid</a></li>
//         <li className="Sidebar__item"><a className="Link">Paper</a></li>
//         <li className="Sidebar__item"><a className="Link">Card</a></li>
//       </ul>
//       <ul className="Sidebar__Menu">
//         <li className="Sidebar__item Sidebar__item--title">Components</li>
//         <li className="Sidebar__item"><a className="Link">Navbar</a></li>
//         <li className="Sidebar__item"><a className="Link">Sidebar</a></li>
//         <li className="Sidebar__item"><Link className="Link" to="buttons">Buttons</Link></li>
//       </ul>
//     </div>
//   );
// }