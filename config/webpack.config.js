const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

const paths = require('./paths');

const fs  = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(paths.antdTheme, 'utf8'));

module.exports = {
  entry: {
    // Set the single-spa config as the project entry point
    // 'single-spa.config': 'single-spa.config.js',
    'single-spa.config': paths.appSingleSpaJs,
    // 'single-spa.config': paths.appSideMenu,
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
        // use: [MiniCssExtractPlugin.loader, "css-loader"]
        use: [MiniCssExtractPlugin.loader,
          // MiniCSSExtractPlugin extracts CSS into separate files and adds the assets to webpack's asset map.
          // Style-Loader, on the other hand, embeds the CSS as a string into the JS bundle itself and then, at runtime, injects it into the DOM with a style tag.
          // These methods conflict.
          // { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } },
          { loader: "less-loader" },
        ]
      },
      {
        test: /\.less$/,
        exclude: /antd.*\.less$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader", options: { modules: true } },
          {loader: "less-loader"},
        ]
      },
      {
        test: /antd.*\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader",
            options: {
              javascriptEnabled: true,
              modifyVars: themeVariables,
              root: path.resolve(__dirname, './')
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
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
    extensions: ['.js', '.jsx', '.less']
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
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      cacheId: 'dmiPwa'
    })
  ],
  devtool: 'source-map',
  externals: [],
  devServer: {
    contentBase: 'public',
    historyApiFallback: true
  }
};