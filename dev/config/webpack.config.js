const path = require('path');

module.exports = {
	mode: 'development',
	entry: [path.join(__dirname, '../index.js')],
	output: {
		path: path.join(__dirname, "../dist"),
		filename: "main.js",
		publicPath: '/dist/'
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
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader', 
						options: { 
							importLoaders: 1,
							modules: true,
							localIdentName: "[name]__[local]___[hash:base64:5]"
						}
					},
					// { loader: 'postcss-loader' }
				]
			},
			{
				test: /\.(eot|woff|woff2|svg|ttf|gif|jpg|png)([\?]?.*)$/,
				loader: 'file-loader'
			}
		]
	},
	devServer: {
		inline: true,
		contentBase: path.join(__dirname, "../"),
		historyApiFallback: true,
	}
};