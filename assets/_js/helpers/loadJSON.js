var SuperAgent = require('superagent');

function loadJSON(url, callback) {
  SuperAgent
    .get(url)
    .end(function(err, resource) {
      if(err) {
        console.warn('Warning: ' + url + ' failed to load.');
      } else {
        callback(resource.body);
      }
    });
}

module.exports = loadJSON;
