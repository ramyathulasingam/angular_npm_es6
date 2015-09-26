module.exports = {
	entry: './client/app/app.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		loaders:[
			{test: /\.js$/, loader: 'babel', exclude: [/node_modules/]},
			{ test: /\.html$/, loader: 'raw' },
      		{ test: /\.styl$/, loader: 'style!css!stylus' },
      		{ test: /\.css$/, loader: 'css' }
		]
	},

	stylus: {
    	use: [require('jeet')()]
  	}

}