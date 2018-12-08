const HtmlWebPackPlugin = require('html-webpack-plugin');
const deepmerge = require('deepmerge');
const isPlainObject = require('is-plain-object');
const webpackLocalConfig = (function (filename) {
	try {
		return require(filename);
	}
	catch (error) {
		if (error.message.indexOf("Cannot find module '" + filename + "'") === -1) {
			throw error;
		}
		return {};
	}
})('./webpack.local.config.js');

const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html',
});

module.exports = deepmerge({
	entry: './src/js/main.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	plugins: [
		htmlPlugin,
	],
	devServer: {
		historyApiFallback: true,
		host: 'localhost',
	},
}, webpackLocalConfig, { isMergeableObject: isPlainObject });
