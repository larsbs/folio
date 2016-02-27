const path = require('path');
const electronRenderer = require('webpack-target-electron-renderer');


const config = {
  devtools: 'eval-source-map',
  resolve: {
    root: [
      path.join(__dirname, 'vendor')
    ],
    modulesDirectories: [
      'app/styles',
      'web_modules',
      'node_modules'
    ],
    extensions: ['', '.js', '.jsx', '.less']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/app.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:8080/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    host: 'localhost',
    port: '8080'
  },
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      include: [
        path.join(__dirname, 'app'),
        path.join(__dirname, 'vendor'),
      ],
      exclude: /node_modules/,
      loaders: [
        'eslint'
      ]
    }],
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.join(__dirname, 'app'),
        path.join(__dirname, 'vendor'),
      ],
      exclude: /node_modules/,
      loaders: [
        'react-hot',
        'babel'
      ]
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    }, {
      test: /bootstrap\/js\//,
      loader: 'imports?jQuery=jquery'
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
    }]
  }
};

config.target = electronRenderer(config);
module.exports = config;
