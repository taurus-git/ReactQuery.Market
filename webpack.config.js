const path = require('path');
const { MODE } = require('./src/config/types');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === MODE.PROD;

  return {
    mode: argv.mode,
    entry: './src/index.tsx',
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    output: {
      clean: true,
      path: path.resolve(__dirname, 'src/dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      publicPath: isProduction ? './' : '/',
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
          test: /\.(png|jpg|jpeg|gif)$/i,
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
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [
                    path.resolve(__dirname, 'src/shared/styles'), // ✅ КРИТИЧНО!
                  ],
                },
              },
            },
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
        {
          test: /\.svg$/,
          include: path.resolve(__dirname, 'src/assets/icons'),
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                extract: true,
                spriteFilename: isProduction
                  ? 'icons/sprite.[contenthash:8].svg'
                  : 'icons/sprite.svg',
                symbolId: '[name]',
                esModule: false,
              },
            },
            {
              loader: 'svgo-loader',
              options: {
                configFile: path.resolve(__dirname, 'svgo.config.js'),
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
        '@app': path.resolve(__dirname, 'src/app'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@features': path.resolve(__dirname, 'src/features'),
        '@shared': path.resolve(__dirname, 'src/shared'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@store': path.resolve(__dirname, 'src/app/store'),
        '@api': path.resolve(__dirname, 'src/services/api/'),
        '@types': path.resolve(__dirname, 'src/shared/types/'),
        '@styles': path.resolve(__dirname, 'src/shared/styles/'),
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
      }),
      new HtmlWebpackPlugin({
        template: './src/public/index.html',
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
      new SpriteLoaderPlugin({
        plainSprite: true, // ✅ Создает обычный SVG спрайт
      }),
    ],
    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.resolve(__dirname, 'scr/dist'),
      },
      port: 3000,
      hot: true,
    },
  };
};
