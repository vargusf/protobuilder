import React from 'react';
import { Link } from 'react-router-dom'

const Button = (
  {
    btnType = "button", // (link|button|submit|reset)
    to = null,
    type = "fill", // (fill|outline)
    color = "primary", // (primary|secondary|grey|white)
    size = "md", // (sm|md|lg|xlg)
    children
  }
) => {
  const classes = "Button Button--type-" + type + "  Button--color-" + color + " Button--size-" + size;

  if (btnType == "link") {
    return (
      <Link to={to} className={classes}>{children}</Link>
    )
  } else {
    return (
      <button className={classes} type={btnType}>{children}</button>
    )
  }
}

export default Button;