// 公共库
var path = require('path');
// var webpack = require('webpack');
// var fs = require('fs');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var TerserPlugin = require('terser-webpack-plugin');
var HtmlWebPackPlugin = require('html-webpack-plugin');
// var InjectHtmlPlugin = require('@tbj/webpack-injecthtml-plugin');
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
var GetLibUrl = require('./commonfile.config.js');

// 配置项
var vpsPath = path.resolve(__dirname, '../');
// var packageIfm = require(vpsPath + '/package.json');

var paths = {
  src: vpsPath + '/src/',
  dist: vpsPath + '/dist/'
};

var publicPath = '/dist/';

module.exports = {
  mode: 'production', // 正式环境
  entry: {
    'index': paths.src + 'app.js'
  },
  output: {
    path: paths.dist,
    publicPath: publicPath,
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.styl'],
    modules: [
      path.join(__dirname, '../src'),
      'node_modules'
    ],
    alias: {
      'components': paths.src + 'components',
      'base': paths.src + 'base',
      'images': paths.src + 'images',
      'views': paths.src + 'views',
      'routes': paths.src + 'routes'
    }
  },
  performance: {
    hints: false
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: true,
          sourceMap: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendor',
          chunks: 'initial',
          test: /react|loadsh|@tbj\/track\/libs\/xd/,
          maxAsyncRequests: 5,
          reuseExistingChunk: true,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [{
      test: /\.(jsx|js)?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(png|jpg|gif)$/,
      loader: 'url-loader',
      options: {
        limit: 100,
        name: 'images/[name].[ext]?[hash]'
      }
    }, {
      test: /\.(woff|ttf)$/,
      loader: 'url-loader',
      options: {
        limit: 1500,
        name: 'fonts/[name].[ext]?[hash]'
      }
    }, {
      test: /\.css?$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    }, {
      test: /\.styl(us)?$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'stylus-loader'
      ]
    }]
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new HtmlWebPackPlugin({
      title: 'app',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      hash: true,
      template: paths.src + 'index.html',
      filename: paths.dist + 'index.html',
      inject: true
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [{
        path: GetLibUrl(['react', 'reactDom', 'fastclick'], true),
        type: 'js'
      }],
      append: false,
      publicPath: false
    })
  ]
}