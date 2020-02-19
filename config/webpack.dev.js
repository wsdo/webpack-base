/*
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2020-02-11 17:33:50
 * @LastEditors  : starkwang
 * @LastEditTime : 2020-02-17 14:42:38
 * @Description: file content
 */
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
	mode: 'development',
	devServer: {
		contentBase: './dist',
		open: true,
		port: 6060,
		hot: true
	}
}

module.exports = merge(commonConfig, devConfig);
