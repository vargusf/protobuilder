module.exports = {
	plugins: [
		require('autoprefixer'),
		require('cssnano'),
		require('postcss-mixins'),
		require('postcss-nested'),
		require('postcss-preset-env'),
		require('postcss-custom-media'),
		require('postcss-hexrgba'),
	]
}