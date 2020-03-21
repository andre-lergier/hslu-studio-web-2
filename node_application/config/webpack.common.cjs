const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const webpack = require('webpack'); // to access built-in plugins

module.exports = {
  entry: {
    main: './src/js/index.js',
    style: './src/scss/style.scss',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'), // legt Ordner fest --> __dirname ist aktueller Ordner(config)
    publicPath: '/',
  },

  // babel config
  module: {
    rules: [
      {
        test: /\.m?js$/, // test property identifies which file or files should be transformed
        exclude: /(node_modules|bower_components)/,

        // use property indicates which loader should be used to do the transforming
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // sourceMap: true,
              sassOptions: {
                outputStyle: 'compressed',
              },
              webpackImporter: false,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    // copy files into dist folder
    new CopyPlugin([ {
        from: 'static/**/*', 
        to: '.',
       },
    ], { copyUnmodified: true }),
  ],
};
