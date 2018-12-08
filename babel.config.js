module.exports = {
	presets: [
		['@babel/preset-env', {
			'exclude': ['transform-regenerator'],
		}],
		'@babel/preset-react',
	],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-export-namespace-from',
		'@babel/plugin-syntax-dynamic-import',
		'module:fast-async',
	],
};