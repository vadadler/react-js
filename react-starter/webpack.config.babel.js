import path from 'path';
//import webpack from 'webpack';

let config = {
  entry: {
    app: path.resolve('./src/app.js')
  },
  output: {
    path: path.resolve('./public'),
    filename: '[name].js',
    publicPath: 'http://localhost:2222/'
  },
  module: {
    loaders: [
      {test: /\.js(x)?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/}
    ]
  }
};

export default config;
