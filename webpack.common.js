let path = require('path');
let BUILD_DIR = path.resolve(__dirname, 'lib');
let APP_DIR = path.resolve(__dirname, 'src');
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
  entry: [
    APP_DIR + '/index.js'
  ],
  devtool: 'source-map',
  output: {
    path: BUILD_DIR,
    filename: 'MdColorPicker.js',
    library: 'MdColorPicker',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
      test: /\.js/,
      include: APP_DIR,
      loader: 'babel-loader',
      options: {
        presets: ["es2015", "flow", "stage-2"],
        plugins: ["babel-plugin-add-module-exports"]
      }
    }, {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader",
        options: {
          includePaths: ['node_modules', 'src']
        }
      }]
    },
    {
      test: /\.svg$/,
      loader: 'svg-inline-loader',
    }
    ],
  },
  plugins: [
    //new BabiliPlugin()
  ]
}