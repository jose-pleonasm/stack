/*eslint-env node */
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const deepmerge = require('deepmerge');
const isPlainObject = require('is-plain-object');
const webpackLocalConfig = (function (filename) {
	try {
		return require(filename);
	}
	catch (error) {
		if (error.code !== 'MODULE_NOT_FOUND') {
			throw error;
		}
		return {};
	}
})('./webpack.local.config.js');


const pluginHtml = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html',
});
const pluginHmr = new webpack.HotModuleReplacementPlugin();
const pluginDotenv = new Dotenv({
	path: './.env',
	safe: true,
});


module.exports = deepmerge({
	entry: './src/js/main.js',
	output: {
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		pluginHtml,
		pluginHmr,
		pluginDotenv,
	],
	devServer: {
		historyApiFallback: true,
		host: 'localhost',
		hot: true,
	},
}, webpackLocalConfig, { isMergeableObject: isPlainObject });
