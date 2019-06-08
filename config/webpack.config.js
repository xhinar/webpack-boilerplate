const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

const paths = require('./paths');
console.log('zzz1', paths.servedPath)

module.exports = {
  entry: {
    // Set the single-spa config as the project entry point
    // 'single-spa.config': 'single-spa.config.js',
    'single-spa.config': paths.appSingleSpaJs,
  },
  output: {
    // publicPath: '/dist/',
    publicPath: paths.servedPath,
    filename: '[name].js',
    path: paths.appDist,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        // This plugin will allow us to use html templates when we get to the angularJS app
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        // Webpack style loader added so we can use materialize
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,
          { loader: "style-loader" },
          { loader: "css-loader" },
        ]
      },
    ],
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
    ],
  },
  plugins: [
    // A webpack plugin to remove/clean the build folder(s) before building
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['dist']
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    // new WorkboxPlugin.GenerateSW({
    //   // these options encourage the ServiceWorkers to get in there fast
    //   // and not allow any straggling "old" SWs to hang around
    //   clientsClaim: true,
    //   skipWaiting: true,
    //   cacheId: 'dmiPwa'
    // })
  ],
  devtool: 'source-map',
  externals: [],
  devServer: {
    contentBase: 'public',
    historyApiFallback: true
  }
};