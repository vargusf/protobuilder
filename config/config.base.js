const path = require('path');

module.exports = {
  entry: [path.join(__dirname, '../src/index.js')],
  output: {
    path: path.join(__dirname, "../public/dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf|gif|svg|jpg|png)([\?]?.*)$/,
        loader: 'file-loader'
      }
    ]
  }
};