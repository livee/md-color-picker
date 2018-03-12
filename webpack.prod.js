const merge = require('webpack-merge')
const common = require('./webpack.common')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
module.exports = merge(common, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
})