const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties');
const customMedia = require('postcss-custom-media');
const atImport = require("postcss-import");

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: [/node_modules/, /styles/],
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', '!css?importLoaders=1!postcss!sass')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', '!css?importLoaders=1!postcss')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[name]_[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  plugins: [
  /**
   * This plugin assigns the module and chunk ids by occurence count. What this
   * means is that frequently used IDs will get lower/shorter IDs - so they become
   * more predictable.
   */
    new webpack.optimize.OccurenceOrderPlugin(),
  /**
   * See description in 'webpack.config.dev' for more info.
   */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development2')
    }),
  /**
   * Some of you might recognize this! It minimizes all your JS output of chunks.
   * Loaders are switched into a minmizing mode. Obviously, you'd only want to run
   * your production code through this!
   */
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("[name].css")
  ],
  postcss: function () {
    return [
      autoprefixer,
      atImport(),
      customMedia(),
      customProperties()
    ];
  }
};
