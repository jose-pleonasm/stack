const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const pluginHtml = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html',
});
const pluginVisualizer = new Visualizer({ filename: './statistics.html' });

module.exports = {
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
		minimizer: [new UglifyJsPlugin()],
	},
};
