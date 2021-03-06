var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'none',
	mode: 'development',
	entry: './src/ShaderToyMaterial.js',
	externals: {
		three: {
			commonjs: 'three',
			commonjs2: 'three',
			amd: 'three',
			root: '_'
		},
	},

	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'ShaderToyMaterial.js',
		libraryTarget: 'umd',
		library: 'ShaderToyMaterial',
		globalObject: 'this',
		libraryExport: "default"
	},
	module: {
		rules: [
			/*{
						test: /\.js$/,
						exclude: /(node_modules|bower_components)/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['env']
							}
						}
					}, */
			{
				test: /\.(glsl|frag|vert)$/,
				loader: 'raw-loader',
				exclude: /node_modules/
			}, {
				test: /\.(glsl|frag|vert)$/,
				loader: 'glslify-loader',
				exclude: /node_modules/
			}
		]
	}
};