var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/output');
var APP_DIR = path.resolve(__dirname, 'public/app');
var USER_DIR = path.resolve(__dirname, 'public/user');

var config = {
  entry: {
    home: APP_DIR + '/index.jsx',
    login: USER_DIR + '/login.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
  	loaders : [
  		{
  			test : /\.jsx?/,
  			include : [APP_DIR, USER_DIR],
  			loader : 'babel'
  		}
  	]
  }
};

module.exports = config;