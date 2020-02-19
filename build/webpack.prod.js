/*
 * @Author: starkwang
 * @Contact me: https://shudong.wang/about
 * @Date: 2020-02-11 17:33:50
 * @LastEditors: starkwang
 * @LastEditTime: 2020-02-17 14:29:33
 * @Description: file content
 */
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const prodConfig = {
	mode: 'production'
}

module.exports = merge(commonConfig, prodConfig);
