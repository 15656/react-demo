const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js',
    publicPath: '/build',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: ['babel-loader?presets[]=react&presets[]=es2015'],
      exclude: /node_modules/,
    }]
  }
}
