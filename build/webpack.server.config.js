const path = require('path')
const nodeExternals = require("webpack-node-externals");
module.exports = {
  mode: 'development',
  entry: './src/server/index.js',
  target: 'node',
  output: {
    filename: "app.js",
    path: path.resolve('./dist')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /.\jsx?$/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}