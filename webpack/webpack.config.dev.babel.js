const common = require('./webpack.config.common')
const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

require('dotenv').config()
const devMode = true

const page = process.env.page
const noReact = "true" == process.env.noReact

module.exports = {
  mode: 'development',
  entry: {
    main: (noReact ? [] : ['react-hot-loader/patch']).concat([
      'webpack-dev-server/client',
      'webpack/hot/only-dev-server',
      // resolve(__dirname, 'hotReload'),
      resolve('src/hotReload')
      // !!page && page != "default"
      //   ? resolve(__dirname, `../src/landing-pages/${page}/hotReload`)
      //   : resolve(__dirname, 'hotReload'),
    ])
  },
  externals: common.externals,
  output: {
    filename: 'bundle.js',
    path: resolve('.'),
    publicPath: '/',
  },
  context: resolve('src'),
  resolve: common.resolve,
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    host: '127.0.0.1',
    disableHostCheck: true,
    contentBase: resolve('assets'),
    publicPath: '/',
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://127.0.0.1:3081/', // 'https://api.ipify.org/',
        changeOrigin: true,
        ws: true,
      }
    },
    historyApiFallback: {
      disableDotRule: true
    }
  },
  module: {
    rules: [
      common.modules.purs,
      common.modules.ts,
      {
        test: /\.(scss|sass)$/,
        oneOf: [{
          resourceQuery: /^\?raw$/,
          use: [
            'css-hot-loader',
            'style-loader',
            'css-loader',
            common.loaders.postcss,
            common.loaders.sass,
          ]
        }, {
          use: [
            'css-hot-loader',
            'style-loader',
            'css-loader',
            common.loaders.postcss,
            common.loaders.sass,
          ]
        }]
      },
      {
        test: /\.styl$/,
        oneOf: [{
          resourceQuery: /^\?raw$/,
          use: [
            'css-hot-loader',
            'style-loader',
            'css-loader',
            common.loaders.postcss,
            common.loaders.stylus,
          ]
        }, {
          use: [
            'css-hot-loader',
            'style-loader',
            common.loaders["typings-for-css-camelCase"],
            common.loaders.postcss,
            common.loaders.stylus
          ]
        }]
      },
      {
        test: /\.(css|less)$/,
        oneOf: [{
          resourceQuery: /^\?raw$/,
          use: [
            'css-hot-loader',
            'style-loader',
            'css-loader',
            common.loaders.postcss,
            common.loaders.less,
          ]
        },
        {
          resourceQuery: /^\?dash-case$/,
          use: [
            'css-hot-loader',
            'style-loader',
            common.loaders["typings-for-css"],
            common.loaders.postcss,
            common.loaders.less,
          ]
        }, {
          use: [
            'css-hot-loader',
            'style-loader',
            common.loaders["typings-for-css-camelCase"],
            common.loaders.postcss,
            common.loaders.less,
          ]
        }]
      },
      common.modules.url,
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    // new MiniCssExtractPlugin('style.css'),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      title: process.env.title,
      template: "true" == process.env.html ? resolve(`src/index.html`) : resolve(__dirname, 'template.html'),
    }),
    common.plugins.define,
    common.plugins.dotEnv
  ],
  performance: { hints: false },
}
