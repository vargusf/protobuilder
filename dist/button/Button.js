'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === undefined ? 'button' : _ref$type,
      _ref$display = _ref.display,
      display = _ref$display === undefined ? 'inline-block' : _ref$display,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'true' : _ref$fill,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? 'primary' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 'md' : _ref$size,
      _ref$to = _ref.to,
      to = _ref$to === undefined ? null : _ref$to,
      children = _ref.children;

  var classes = '\n    Button\n    Button--display-' + display + '\n    Button--fill-' + fill + '\n    Button--color-' + color + '\n    Button--size-' + size + '\n  ';

  if (type == "link") {
    return _react2.default.createElement(
      _reactRouterDom.Link,
      { to: to, className: classes },
      children
    );
  } else {
    return _react2.default.createElement(
      'button',
      { className: classes, type: type },
      children
    );
  }
};

exports.default = Button;