const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: '[name].css'
})


module.exports = {
  entry: './src/app/app.jsx',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    crossOriginLoading: "anonymous"
  },
  devServer: {
    inline: true,
    contentBase: './build',
    port: 8100
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]!extract-loader!html-loader'
      },
      {
        test: /\.s[ac]ss$/,
        use: extractSass.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }]
        })
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      },
      // {
      //   test: /^(?!.*components)^.*views.*\.jsx$/,
      //   loaders: ['bundle-loader?lazy', 'babel-loader']
      // },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        return isExternal(module)
      },
      filename: 'vendor.bundle.js'
    }),
    extractSass
  ]
}

function isExternal (module) {
  const userRequest = module.userRequest

  if (typeof userRequest !== 'string') {
    return false
  }

  return userRequest.indexOf('bower_components') >= 0 ||
    userRequest.indexOf('node_modules') >= 0 ||
    userRequest.indexOf('libraries') >= 0
}