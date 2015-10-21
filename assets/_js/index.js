// Vendor
window.accounting = require('accounting');
window.SuperAgent = require('superagent');
require('./vendor/es5-shim.min');
require('./vendor/es5-sham.min');
require('./vendor/html5shiv');
require('./vendor/placeholders.min');

// Engine
window.JSE = require('jekyll-store-engine');
require('jekyll-store-display');
require('jekyll-store-visited');
require('jekyll-store-favourites');
require('jekyll-store-google-analytics');

// Helpers
window.toggle = require('./helpers/toggle');
window.loadJSON = require('./helpers/loadJSON');

// After Load
var afterLoad = require('reflux').joinLeading(
  JSE.Stores.Products,
  JSE.Stores.Countries,
  JSE.Stores.DeliveryMethods
);

afterLoad.listen(function() {
  require('./renderComponents');
  require('./pages/product');
  require('./pages/basket');
  window.submitPurchase = require('./pages/checkout').submitPurchase;
  JSE.Actions.pageLoaded();
});
