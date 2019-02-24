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
    return <div className={style.buttonContainer}><Link to={to} onClick={onClick} className={classes}>{children}</Link></div>
  } else if (type == "href") {
    return <div className={style.buttonContainer}><a href={to} onClick={onClick} className={classes} target={target}>{children}</a></div>
  } else {
    return <div className={style.buttonContainer}><button onClick={onClick} className={classes} type={type}>{children}</button></div>
  }
}

export default Button;