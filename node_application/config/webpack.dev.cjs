const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.cjs');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({ inject: true, template: './index.html' }),
  ],
  devtool: 'inline-cheap-source-map',
  /* module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              outputStyle: 'compressed',
              webpackImporter: false,
            },
          },
        ],
      },
    ],
  },*/
  /* devServer: {
    contentBase: path.join(__dirname, '../public'), // path to static files
    compress: true,
    port: 9000,
  },*/
});
