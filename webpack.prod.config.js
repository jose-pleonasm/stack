/*eslint-env node */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const pluginHtml = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html',
});
const pluginVisualizer = new Visualizer({ filename: './statistics.html' });
const pluginDotenv = new Dotenv({
	path: './.env',
	safe: true,
});

module.exports = {
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
		pluginVisualizer,
		pluginDotenv,
	],
	optimization: {
		// splitChunks: {
		// 	cacheGroups: {
		// 		commons: {
		// 			test: /[\\/]node_modules[\\/]/,
		// 			name: 'vendors',
		// 			chunks: 'all',
		// 		},
		// 	},
		// },
		// minimizer: [new UglifyJsPlugin()], // TODO: Unexpected token operator «*», expected punc «(» [main.js:10421,57]
	},
};
