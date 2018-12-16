import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  type = 'button',           // (link|button|submit|reset|href)
  display = 'inline-block',  // (inline|inline-block|flex)
  fill = 'true',             // (true|false)
  color = 'primary',         // (primary|secondary|grey|white)
  size = 'md',               // (sm|md|lg|xlg)
  to = null,
  target = '_self',
	onClick = () => {},
  children
}) => {
  const classes = `
    Button
    Button--display-${display}
    Button--fill-${fill}
    Button--color-${color}
    Button--size-${size}
  `;

  if (type == "link") {
    return <Link to={to} onClick={onClick} className={classes}>{children}</Link>
  } else if (type == "href") {
    return <a href={to} onClick={onClick} className={classes} target={target}>{children}</a>
  } else {
    return <button onClick={onClick} className={classes} type={type}>{children}</button>
  }
}

export default Button;