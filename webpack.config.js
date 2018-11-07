module.exports = {
	mode: 'development',
	entry: './jsx/app.jsx',
	output: {
		path: __dirname + '/js/',
		filename: 'bundle.js'
	},
	devtool: '#sourcemap',
	stats: {
		colors: true,
		reasons: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
