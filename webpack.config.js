var webpack = require( 'webpack' );
var path = require( 'path' );

module.exports = {
	// Will give us line numbers when debugging
	devtool : 'inline-source-map',
	entry   : [
            'webpack-dev-server/client?http://127.0.0.1:8080/',
            'webpack/hot/only-dev-server',
            './src'
    ],
	output  : {
		path     : path.join( __dirname, 'public' ),
		filename : 'bundle.js'
	},
	// Where webpack will look for the files in order to bundle them together
	resolve: {
		modulesDirectories : [ 'node_modules', 'src' ],
		extensions         : [ '', '.js' ]
	},
	// Where we define our loaders
	module: {
		loaders: [ {
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: [ 'react-hot', 'babel?presets[]=react,presets[]=es2015' ]
		}
    	]
	},
	plugins: [
    	// Live reloading
    	new webpack.HotModuleReplacementPlugin(),
    	// Won't compile if there are errors
    	new webpack.NoErrorsPlugin()
	]
};
