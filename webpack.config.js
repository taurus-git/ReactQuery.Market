const path = require('path');
const { MODE } = require('./config/types');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === MODE.PROD;

  return {
    mode: argv.mode,
    entry: './src/index.tsx',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    output: {
      clean: true,
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: 'tsconfig.json',
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[hash][ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[hash][ext]',
          },
        },
        {
          test: /\.module\.scss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: isProduction
                    ? '[hash:base64:8]'
                    : '[name]__[local]__[hash:base64:5]',
                  namedExport: false,
                },
                // important for imports inside the scss
                importLoaders: 2,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
        // for global SCSS
        {
          test: /\.scss$/,
          exclude: /\.module\.scss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
        '@app': path.resolve(__dirname, 'app'),
        '@pages': path.resolve(__dirname, 'pages'),
        '@features': path.resolve(__dirname, 'features'),
        '@shared': path.resolve(__dirname, 'shared'),
        '@services': path.resolve(__dirname, 'services'),
        '@assets': path.resolve(__dirname, 'assets'),
        '@config': path.resolve(__dirname, 'config'),
        '@store': path.resolve(__dirname, 'app/store'),
        '@api': path.resolve(__dirname, 'services/api/'),
        '@types': path.resolve(__dirname, 'shared/types/'),
        '@styles': path.resolve(__dirname, 'shared/styles/'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new ESLintPlugin({
        extensions: ['ts', 'tsx'],
        context: './src',
        emitWarning: false,
        failOnError: true,
        fix: true,
      }),
      ...(isProduction
        ? [
            new MiniCssExtractPlugin({
              filename: '[name].[contenthash].css',
            }),
          ]
        : []),
    ],
    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      port: 3000,
      hot: true,
    },
  };
};
