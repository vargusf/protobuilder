'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button() {
  return _react2.default.createElement(
    'button',
    null,
    'a button from the comp what what'
  );
}; // import React from 'react';
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

exports.default = Button;