/**
 * ************************************
 *
 * @module  webpack.config.js
 * @author Team Quail
 * @description Webpack Configuration
 *
 * ************************************
 */

// Load html-webpack-plugin and path modules, returns constructor function
const HTMLWebpack = require('html-webpack-plugin');
const path = require('path');

// Create instance / Store plugin settings into variable to be assigned in plugins
const HTMLWebPackPlugin = new HTMLWebpack({
  // filepath to current index file
  template: './src/index.html',

  // name of new html file to be created
  filename: './index.html',

  // designate location to attach <script> element within index.html
  inject: 'body'
});

module.exports = {
  // assign entry point for webpack 
  entry: './src/index.tsx',
  // designate where to deliver bundled JS package
  output: {
    path: path.join(`${__dirname}/dist`),
    filename: 'bundle.js',
    publicPath: '/',
  },
  // options applied to webpack-dev-server
  devServer: {
    // tells server where to serve contents from
    contentBase: './dist',
    // used to 'go back' through history
    historyApiFallback: true,
  },
  // source mapping implemented for debugging purposes
  devtool: 'source-map',
  // directions for webpack to use with specific file types
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'awesome-typescript-loader',
        },
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'source-map-loader',
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  plugins: [HTMLWebPackPlugin],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
  },
};
