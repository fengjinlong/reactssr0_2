module.exports = {
  mode: 'development',
  entry: '../src/client/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve('./dist/public')
  }
}