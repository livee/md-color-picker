
let path = require('path');
let BUILD_DIR = path.resolve(__dirname, './');
let APP_DIR = path.resolve(__dirname, './');

module.exports = {
  entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    stats: {
        warning: false,
},
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      }, {
         test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                   includePaths: ['node_modules','src']
                }
            }]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    }
    ],
  }
}