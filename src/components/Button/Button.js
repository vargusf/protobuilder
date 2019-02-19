import React from 'react';
import { Link } from 'react-router-dom';

import style from './Button.css';

const Button = ({
  type = 'button',           // (link|button|submit|reset|href)
  fill = 'true',             // (true|false)
  color = 'primary',         // (primary|secondary|grey|white)
  size = 'md',               // (sm|md|lg|xlg)
  sizeWidth = 'md',          // (sm|md|lg|xlg)
  sizeHeight = 'md',         // (sm|md|lg|xlg)
  display = 'inline-block',  // (inline|inline-block|flex)
  pill = false,
  to = null,
  target = '_self',
  disabled = 'false',
	onClick = () => {},
  children
}) => {

  // const classes = `
  //   Button
  //   Button--display-${display}
  //   Button--fill-${fill}
  //   Button--color-${color}
  //   Button--size-${size}
  //   Button--size-width-${sizeWidth}
  //   Button--size--height-${sizeHeight}
  //   Button--pill-${pill}
  //   Button--disabled-${disabled}
  // `;

  const classes = `
    ${style.button}
    ${style['button_color_' + color]}
    ${style['button_fill_' + fill]}
    ${style['button_size_' + size]}
    ${style['display_' + display]}
    button--size-width-${sizeWidth}
    button--size--height-${sizeHeight}
    button--pill-${pill}
    button--disabled-${disabled}
  `;

  if (disabled == "true") onClick = null;

  if (type == "link") {
    return <Link to={to} onClick={onClick} className={classes}>{children}</Link>
  } else if (type == "href") {
    return <a href={to} onClick={onClick} className={classes} target={target}>{children}</a>
  } else {
    return <button onClick={onClick} className={classes} type={type}>{children}</button>
  }
}

export default Button;