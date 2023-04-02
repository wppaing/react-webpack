const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  console.log(env, argv);
  return {
    entry: () => {
      return path.resolve(__dirname, 'src', 'index.jsx');
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'static/js/[name].[contenthash].js',
      chunkFilename: 'static/js/[name].[contenthash].chunk.js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      port: 3000,
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
        filename: 'index.html',
      }),
      new webpack.DefinePlugin({
        process: {
          env: {
            APPLICATION_CONFIG_ID: 1,
          },
        },
      }),
    ],
  };
};
