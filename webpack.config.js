const path = require('path');


module.exports = {
  devtools: 'eval-source-map',
  resolve: {
    root: [],
    extensions: ['', '.js', '.jsx']
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
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      include: [
        path.join(__dirname, 'app'),
        path.join(__dirname, 'vendor')
      ],
      loaders: [
        'eslint'
      ]
    }],
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.join(__dirname, 'app'),
        path.join(__dirname, 'vendor')
      ],
      loaders: [
        'react-hot',
        'babel'
      ]
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
};
