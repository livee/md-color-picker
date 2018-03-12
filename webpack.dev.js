const merge = require('webpack-merge')
const common = require('./webpack.common')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = merge(common, {
    devtool: 'inline-source-map',
    plugins: [
        new BundleAnalyzerPlugin()
    ]
})