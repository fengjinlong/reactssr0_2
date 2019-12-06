const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve('./dist/public')
  },
  module: {
    rules: [
      {
        test: /.\jsx?$/,
        exclude: /node_modules/,
        use: {
          // loader:"awesome-typescript-loader"
          loader: 'babel-loader',
          options: {
            plugins: true ? ['dynamic-import-node'] : []
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/shared/tem.html'
    })
  ]
}