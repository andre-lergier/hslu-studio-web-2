const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// relative imports danach
const common = require('./webpack.common.cjs'); // (relativer Pfad)

module.exports = merge(common, {
  mode: 'production',
  
  /* module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/css',
            },
          },
          'sass-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  }, */

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      inject: true,
      template: './index.html',
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
    // new MiniCssExtractPlugin({
    //   filename: '[name].bundle.css',
    // })
  ],
});
