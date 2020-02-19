/*
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2020-02-11 16:15:33
 * @LastEditors  : starkwang
 * @LastEditTime : 2020-02-19 16:09:34
 * @Description: file content
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.styl$/,
      use: ['style-loader', 'css-loader', 'stylus-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../')
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
      // minSize: 30000,
      minSize: 0,
      // maxSize: 30000,
      automaticNameDelimiter: '-',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -9,
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          }
        },
        defaultVendors: {
          // filename:'vendors.js',
          test: /[\\/]node_modules[\\/]/,

          priority: -10,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            console.log('packageName', packageName);
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
        default: false
      }
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  }
}
