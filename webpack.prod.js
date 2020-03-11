const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const postcssPresetEnv = require('postcss-preset-env')
const cssMQPacker = require('css-mqpacker')
const cssnano = require('cssnano')

require('dotenv').config()

const jsloader = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: [
    'webpack-strip-block',
    'babel-loader'
  ]
}

const serverConfig = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'server'),
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      jsloader,
      {
        test: /\.(css)$/,
        use: [{
          loader: 'file-loader',
          options: {
            emitFile: false
          }
        }]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.join('src', 'server', 'data'), to: 'data' },
      { from: path.join('src', 'server', 'images'), to: 'images' }
    ])
  ]
}

const browserConfig = {
  mode: 'production',
  entry: [
    'intersection-observer',
    path.join(__dirname, 'src', 'client')
  ],
  output: {
    path: path.join(__dirname, 'build', 'client'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      jsloader,
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
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
                cssMQPacker({ sort: true }),
                cssnano({
                  preset: ['default', { calc: false }]
                })
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
      filename: path.join('css', 'main.min.css')
    }),
    new CopyWebpackPlugin([
      { from: path.join('src', 'client', 'images'), to: 'images' },
      { from: path.join('src', 'shared', 'font'), to: 'font' },
      { from: path.join('src', 'shared', 'downloads'), to: 'downloads' },
      { from: path.join('src', 'shared', 'icons'), to: '' }
    ])
  ]
}

module.exports = [
  serverConfig,
  browserConfig
]
