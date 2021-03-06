const common = require('./webpack.config.common')
const { resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const InterpolateHtmlPlugin = require('./InterpolateHtmlPlugin');
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

require('dotenv').config()

const {page, country, service, noReact} = process.env
const html = !!process.env.html
const publicPath = process.env.publicPath || ''

module.exports = {
  mode: 'production',
  entry: {
    main: resolve('src/index') 
      // !!page && page != "default"  
      // ? resolve(__dirname, `../src/landing-pages/${page}/index`) 
      // : resolve(__dirname, '../src'),
    // main: resolve(__dirname, '../src'),
    // vendor: [
    //   'react-redux',
    //   'react-router-dom',
    //   'redux',
    //   'redux-thunk',
    //   'styled-components',
    // ],
  },
  externals: common.externals,
  output: {
    filename: `static/${page}/js/[name].[chunkhash].js`,
    path: resolve('dist'),
    publicPath: publicPath + '/',
  },
  resolve: common.resolve,
  devtool: 'source-map',
  module: {
    rules: [
      common.modules.purs,
      common.modules.ts,
      {
        test: /\.styl$/,
        oneOf: [{
          resourceQuery: /^\?raw$/,
          loaders: [
            MiniCssExtractPlugin.loader,
            // {
            // loader: require.resolve('css-loader'),
            // options: {
            //   modules: true,
            //   localIdentName: '[path][name]__[local]--[hash:base64:5]'
            // }
            // },
            'css-loader',
            common.loaders.postcss,
            common.loaders.stylus,
          ]
        },
        {
          loaders: [
            MiniCssExtractPlugin.loader,
            common.loaders["typings-for-css-camelCase"],
            common.loaders.postcss,
            common.loaders.stylus,
          ]
        }]
      },
      {
        test: /\.(scss|sass)$/,
        oneOf: [{
          resourceQuery: /^\?raw$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            common.loaders.postcss,
            common.loaders.sass,
          ]
        }, {
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            common.loaders.postcss,
            common.loaders.sass,
          ]
        }]
      },
      {
        test: /\.(css|less)$/,
        // exclude: /node_modules/,
        oneOf: [{
          resourceQuery: /^\?raw$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            common.loaders.postcss,
            common.loaders.less,
          ]
        }, {
          resourceQuery: /^\?dash-case$/,
          use: [
            MiniCssExtractPlugin.loader,
            common.loaders["typings-for-css"],
            common.loaders.postcss,
            common.loaders.less,
          ]
        }, {
          use: [
            MiniCssExtractPlugin.loader,
            common.loaders["typings-for-css-camelCase"],
            common.loaders.postcss,
            common.loaders.less,
          ]
        }]
      },
      common.modules.url,
    ],
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  plugins: [
    new webpack.WatchIgnorePlugin([
      /styl\.d\.ts$/,
      /css\.d\.ts$/
    ]),
    common.plugins.define,
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: `static/${page}/css/[name].[contenthash:8].css`,
      chunkFilename: `static/${page}/css/[name].[contenthash:8].chunk.css`,
    }),
    new HtmlWebpackPlugin({
      title: process.env.title,
      inject: true,
      template: !!html ? resolve(`src/index.ssr.html`) : resolve(__dirname, 'template.ssr.html'),
      filename: `static/${page}/html/index.html`,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "defer",
      // inline: [/js/ig]
    }),
    new InterpolateHtmlPlugin({
      'PUBLIC_URL': publicPath
    })
  ],
}
