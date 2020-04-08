const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    app: path.join(__dirname, '../client/index.tsx')
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.join(__dirname, '../dist'),
    // publicPath: '/public'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HTMLPlugin()
  ]
}
