const HtmlWebPackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html',
});

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
		],
	},
	plugins: [
		htmlPlugin,
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
