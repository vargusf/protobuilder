const merge = require('webpack-merge')
const path = require('path');

module.exports = merge(require('./config.base.js'), {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, "../public/"),
    historyApiFallback: true,
  }
})