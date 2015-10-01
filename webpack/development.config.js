var path = require('path')
var webpack = require('webpack')

var babelSettings = {
  'stage': 0,
  'plugins': ['react-transform'],
  'extra': {
    'react-transform': {
      'transforms': [{
        'transform': 'react-transform-hmr',
        'imports': ['react'],
        'locals': ['module']
      }, {
        'transform': 'react-transform-catch-errors',
        'imports': ['react', 'redbox-react']
      }]
    }
  }
}

module.exports = {
  name: 'client',
  devtool: 'eval',
  context: path.join(__dirname, '..'),
  entry: [
    'webpack-hot-middleware/client',
    './react'
  ],
  output: {
    path: path.join(__dirname, '..', 'meteor', 'react-build-generated', 'client'),
    filename: 'main.js',
    publicPath: '/assets/'
  },
  externals: {
    'react': 'React',
    'react-router': 'ReactRouter',
    'underscore': '_'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: path.resolve(__dirname, '../react/'),
    extensions: ['', '.jsx', '.js', '.json', '.css', '.scss']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', query: babelSettings, exclude: /(node_modules|bower_components)/ },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=8192' },
      { test: /\.(svg|ttf|woff)(\?.*)?$/, loader: 'file' }
    ]
  }
}
