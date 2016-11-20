var path = require('path')
var webpack = require('webpack')

module.exports = {
  // fast sourcemap, refs compiled code
  //devtool: 'eval',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    sourceMapFilename: '[name]-map.js'
  },
  // no plugins right now
  plugins: [],
  // use babel-loader es6 => es5, with caching for speed
  module: {
    preloaders: [{
      test: /\.js$/,
      exclude: /node-modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'stage-1'],
        plugins: ['transform-decorators-legacy'],
        cacheDirectory: true
      }
    }],
    eslint: {
      failOnWarning: false,
      failOnError: true
    }
  }
}
