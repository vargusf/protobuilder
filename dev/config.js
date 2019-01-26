const path = require('path');

module.exports = {
	mode: 'development',
	entry: [path.join(__dirname, './index.js')],
	output: {
		path: path.join(__dirname, "./dist"),
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
				test: /\.scss$/,
				use: [
					'style-loader', 'css-loader', 'sass-loader'
				]
			},
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		{
			// 			loader: require.resolve('css-loader'),
			// 			options: {
			// 				importLoaders: 1,
			// 			}
			// 		}
			// 	]
			// },
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(eot|woff|woff2|svg|ttf|gif|jpg|png)([\?]?.*)$/,
				loader: 'file-loader'
			}
		]
	},
	devServer: {
		inline: true,
		contentBase: path.join(__dirname, "./"),
		historyApiFallback: true,
	}
};