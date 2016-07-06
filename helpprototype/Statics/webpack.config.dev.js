const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties');
const customMedia = require('postcss-custom-media');
const atImport = require("postcss-import");

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
  'eventsource-polyfill', // necessary for hot reloading with IE
  'webpack-hot-middleware/client',
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
   * This is where the magic happens! You need this to enable Hot Module Replacement!
   */
    new webpack.HotModuleReplacementPlugin(),
  /**
   * NoErrorsPlugin prevents your webpack CLI from exiting with an error code if
   * there are errors during compiling - essentially, assets that include errors
   * will not be emitted. If you want your webpack to 'fail', you need to check out
   * the bail option.
   */
    new webpack.NoErrorsPlugin(),
  /**
   * DefinePlugin allows us to define free variables, in any webpack build, you can
   * use it to create separate builds with debug logging or adding global constants!
   * Here, we use it to specify a development build.
   */
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
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
