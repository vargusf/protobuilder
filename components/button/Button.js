// import React from 'react';
// import { Link } from 'react-router-dom';

// const Button = ({
//   type = 'button',   // (link|button|submit|reset)
//   fill = 'true',     // (true|false)
//   color = 'primary',  // (primary|secondary|grey|white)
//   size = 'md',       // (sm|md|lg|xlg)
//   to = null,
//   children
// }) => {
//   const classes = `
//     Button Button--fill-${fill}
//     Button--color-${color}
//     Button--size-${size}
//   `;

//   if (type == "link") {
//     return (
//       <Link to={to} className={classes}>{children}</Link>
//     )
//   } else {
//     return (
//       <button className={classes} type={type}>{children}</button>
//     )
//   }
// }

// export default Button;




import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <button>a button</button>
  )
}

export default Button;