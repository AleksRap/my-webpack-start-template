const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const plugins = [
  new HTMLWebpackPlugin({
    template: './index.html',
    minify: {
      collapseWhitespace: isProd,
      removeComments: isProd,
      removeRedundantAttributes: isProd,
      useShortDoctype: isProd,
    },
  }),
  new CleanWebpackPlugin(),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, 'src/favicon.ico'),
        to: path.resolve(__dirname, 'dist'),
      },
    ],
  }),
  new webpack.EnvironmentPlugin(['TEST']),
];

if (isDev) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './index.ts',
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    port: 4200,
    compress: isProd,
    open: true,
    client: {
      overlay: true,
    },
    hot: isDev,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  },
  target: isDev ? 'web' : 'browserslist',
  devtool: false,
  plugins,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
      },
      {
        test: /\.ts|js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
