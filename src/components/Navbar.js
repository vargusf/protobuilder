import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = (
  {
    paddingEnds = "md",
    paddingSides = "lg",
    backgroundColor = "primary",
    color = "white",
    children
  }
) => {
  return (
    <div className={
      "Navbar Utils--padding-ends-" + paddingEnds + " " +
      "Utils--padding-sides-" + paddingSides + " " +
      "Text--color-" + color + " " +
      "Utils--background-color-" + backgroundColor
    }>
      {children}
    </div>
  );
}

const NavbarMenu = ({
  gutter = "sm",
  children
}) => {
  return (
    <ul
      className={"Navbar__menu Navbar__menu-gutter-" + gutter}
    >
     {children}
    </ul>
  );
}

const NavbarLogo = ({
  logo = "http://placehold.it/300x100",
  maxWidth = 100,
  marginRight = "sm",
  to = "/"
}) => {
  return (
    <Link
      to={to}
      className={"Navbar__logo Utils--margin-right-" + marginRight}
      style={{ maxWidth: maxWidth+'px' }}
    >
      <img src={logo} />
    </Link>
  );
}

const NavbarItem = ({
  children
}) => {
  return (
    <li>
      {children}
    </li>
  );
}

export {
  Navbar,
  NavbarMenu,
  NavbarLogo,
  NavbarItem
}