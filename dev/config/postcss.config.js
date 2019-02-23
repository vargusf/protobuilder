module.exports = {
	plugins: [
		require('autoprefixer'),
		require('cssnano'),
		require('postcss-mixins'),
		require('postcss-nested'),
		require('postcss-preset-env')
	]
}

// module.exports = {
// 	parser: 'sugarss',
// 	plugins: {
// 		'postcss-import': {},
// 		'postcss-preset-env': {},
// 		'cssnano': {}
// 	}
// }