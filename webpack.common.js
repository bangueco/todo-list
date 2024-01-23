const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    bootstrap: 'bootstrap/dist/css/bootstrap.min.css',
    modal: 'bootstrap/js/dist/modal.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
}