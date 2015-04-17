var Spinner = require('spin.js');

var mySpinner;

exports.show = function (id) {
  mySpinner = new Spinner().spin(document.getElementById(id));
}

exports.hide = function() {
  mySpinner && mySpinner.stop();
}