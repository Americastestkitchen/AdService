const path = require('path');

module.exports = {
  entry: './main.js',
  devtool: 'inline-source-map',
  mode: 'development',
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};