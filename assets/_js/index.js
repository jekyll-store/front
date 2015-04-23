// Vendor
window.accounting = require('accounting');
window.SuperAgent = require('superagent');
require('./vendor/es5-shim.min');
require('./vendor/es5-sham.min');
require('./vendor/html5shiv');
require('./vendor/paymill');
require('./vendor/placeholders.min');
require('./vendor/yotpo');

// Engine
window.JSE = require('jekyll-store-engine');
require('jekyll-store-display');

// Helpers
window.renderComponents = require('./helpers/renderComponents');
window.toggle = require('./helpers/toggle');
window.loadJSON = require('./helpers/loadJSON');

// Pages
require('./pages/product');
window.submitPurchase = require('./pages/checkout').submitPurchase;
