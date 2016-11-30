var webpack = require('webpack');
module.exports = {
  entry: [
    './src/index.jsx',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/
        }]
      },
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: '/public',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
