const path = require('path')

let mode = 'production'
if (process.env.NODE_ENV === 'development') {
  mode = 'development'
}

module.exports = {
  mode,
  module: {
    rules: [
      {
        enforce: 'pre',
        test:  /\.tsx?$/,
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ]
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  }
}
