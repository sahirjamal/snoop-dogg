const webpack = require('webpack');

module.exports = {
	entry: './main.js',
	output: {
		path: __dirname + '/build',
		filename: 'main.bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react']
					}
				}
			}
		]
	},
	stats: {
		colors: true
	},
	devtool: 'source-map'
};