import React from 'react';

const Sidebar = ({children}) => {
  return (
    <div className="Sidebar">
      {children}
    </div>
  );
}

const SidebarMenu = ({children}) => {
  return (
    <ul className="Sidebar__Menu">
      {children}
    </ul>
  );
}

const SidebarItem = ({
  isTitle = false,
  children
}) => {
  return (
    <li className={"Sidebar__item " + (isTitle ? 'Sidebar__item--title': '')}>
      {children}
    </li>
  );
}

export {
  Sidebar,
  SidebarMenu,
  SidebarItem
}