const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const glob = require('glob');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  reactDemo: path.join(__dirname, 'app', 'react'),
  build: path.join(__dirname, 'build'),
};

const commonConfig = merge([
  {
    output: {
      path: PATHS.build,
      filename: '[name].js',
    },
  },
  parts.lintCSS({ include: PATHS.app }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: '[hash:8].[ext]',
    },
  }),
  parts.loadFonts({
    options: {
      name: '[hash:8].[ext]',
    },
  }),
  parts.ignore({
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    include: /font-awesome/,
  }),
  parts.loadJavaScript({ include: PATHS.app }),
]);

const productionConfig = merge([
  {
    performance: {
      hints: 'warning', // 'error' or false are valid too
      maxEntrypointSize: 100000, // in bytes
      maxAssetSize: 200000, // in bytes
    },
    output: {
      chunkFilename: '[chunkhash].js',
      filename: '[chunkhash:8].js',
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
    ],
    recordsPath: 'records.json',
  },
  parts.clean(PATHS.build),
  parts.minifyJavaScript({ useSourceMap: true }),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
        // Run cssnano in safe mode to avoid
        // potentially unsafe ones.
        safe: true,
      },
    },
  }),
  parts.attachRevision(),
  parts.extractBundles([
    {
      name: 'vendor',
      minChunks: ({ userRequest }) => (
        userRequest &&
        userRequest.indexOf('node_modules') >= 0 &&
        userRequest.match(/\.js$/)
      ),
    },
    {
      name: 'manifest',
    },
  ]),
  parts.generateSourceMaps({ type: 'source-map' }),
  parts.lintJavaScript({ include: PATHS.app }),
  parts.extractCSS({
    use: ['css-loader', parts.autoprefix()],
  }),
  parts.purifyCSS({
    paths: glob.sync(path.join(PATHS.app, '**', '*')),
  }),
  parts.setFreeVariable(
    'process.env.NODE_ENV',
    'production'
  ),
]);

const developmentConfig = merge([
  {
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
    ],
  },
  parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.lintJavaScript({
    include: PATHS.app,
    options: {
      // Emit warnings over errors to avoid crashing
      // HMR on error.
      emitWarning: true,
    },
  }),
  parts.loadCSS(),
]);

module.exports = function(env) {
  const pages = [
    parts.page({
      title: 'Webpack demo',
      entry: {
        app: PATHS.app,
      },
      chunks: ['app', 'manifest', 'vendor'],
    }),
    parts.page({
      title: 'Another demo',
      path: 'another',
      entry: {
        another: path.join(PATHS.app, 'another.js'),
      },
      chunks: ['another', 'manifest', 'vendor'],
    }),
  ];
  const config = env === 'production' ?
    productionConfig :
    developmentConfig;

  return merge([commonConfig, config].concat(pages));
};
