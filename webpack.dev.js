const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const postcssPresetEnv = require('postcss-preset-env')
const cssMQPacker = require('css-mqpacker')
const CopyWebpackPlugin = require('copy-webpack-plugin')

require('dotenv').config()

module.exports = {
  mode: 'development',
  entry: {
    index: [
      'webpack-hot-middleware/client',
      path.join(__dirname, 'src', 'client')
    ],
    ie11: path.join(__dirname, 'src', 'shared', 'css', 'ie11.css'),
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true
            }
          },
          {
            loader: 'css-loader',
            options: { url: false }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                postcssPresetEnv({ stage: 0 }),
                cssMQPacker({ sort: true })
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.WEBPACK': true,
      'process.env.GA_ID': JSON.stringify(process.env.GA_ID)
    }),
    new MiniCssExtractPlugin({
      filename: path.join('css', '[name].min.css')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join('src', 'server', 'data'),
        to: 'data'
      },
      {
        from: path.join('src', 'shared', 'font'),
        to: 'font'
      },
      {
        from: path.join('src', 'shared', 'downloads'),
        to: 'downloads'
      },
      {
        from: path.join('src', 'shared', 'icons'),
        to: ''
      }
    ])
  ]
}
