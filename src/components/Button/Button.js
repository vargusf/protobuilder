import React from 'react';
import { Link } from 'react-router-dom';

import style from './Button.css';

const Button = ({
  type = 'button',
  fill = 'true',
  color = 'primary',
  border = 'true',
  size = 'md',
  fullwidth = 'false',
  rounded = 'false',
  disabled = 'false',
  circle = 'false',
  to = null,
  target = '_self',
  tabindex= "",
	onClick = () => {},
  children
}) => {
  const classes = `
    ${style.button}
    ${style['color_' + color]}
    ${style['border_' + border]}
    ${style['fill_' + fill]}
    ${style['size_' + size]}
    ${style['rounded_' + rounded]}
    ${style['fullwidth_' + fullwidth]}
    ${style['disabled_' + disabled]}
    ${style['circle_' + circle]}
  `;

  if (disabled == "true") onClick = null;

  if (type == "link") {
    return <Link to={to} onClick={onClick} className={classes} tabIndex={tabindex}>{children}</Link>
  } else if (type == "href") {
    return <a href={to} onClick={onClick} className={classes} target={target} tabIndex={tabindex}>{children}</a>
  } else {
    return <button onClick={onClick} className={classes} type={type} tabIndex={tabindex}>{children}</button>
  }
}

export default Button;