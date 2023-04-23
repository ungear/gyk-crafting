const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
    
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'style.css'), to: path.resolve(__dirname, './dist/style.css') },
        { from: path.resolve(__dirname, 'itemSprite-6.png'), to: path.resolve(__dirname, './dist/itemSprite-6.png') },
        { from: path.resolve(__dirname, 'favicon.png'), to: path.resolve(__dirname, './dist/favicon.png') },
      ],
    }),
  ]
};