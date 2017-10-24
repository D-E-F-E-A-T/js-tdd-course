const webpack = require('webpack');
const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
	//eval-sourcemap
	//cheap-eval-sourcemap
	devtool: 'source-map',
	entry: {
		filename: './app.js'
	},
	output: {

		filename: './build.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: [
						['env', { modules: false }]
					]
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compresst: { warnings: false },
			output: { comments: false },
			sourceMap: true
		}),
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify(nodeENV) }
		})
	]
};