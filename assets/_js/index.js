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

// Components
window.BasketSummary     = require('./components/BasketSummary.jsx');
window.SearchBox         = require('./components/SearchBox.jsx');
window.SortButtonGroup   = require('./components/SortButtonGroup.jsx');
window.TagButtonGroup    = require('./components/TagButtonGroup.jsx');
window.RangesButtonGroup = require('./components/RangesButtonGroup.jsx');
window.Display           = require('./components/Display.jsx');
window.Pagination        = require('./components/Pagination.jsx');
window.AddToBasket       = require('./components/AddToBasket.jsx');
window.Basket            = require('./components/Basket.jsx');
window.Errors            = require('./components/Errors.jsx');
window.CountriesSelect   = require('./components/CountriesSelect.jsx');
window.DeliverySelect    = require('./components/DeliverySelect.jsx');
window.Card              = require('./components/Card.jsx');
window.OrderSummary      = require('./components/OrderSummary.jsx');

// Helpers
window.renderComponent = require('./helpers/renderComponent');
window.toggle = require('./helpers/toggle');
window.serializeAndPurchase = require('./helpers/serializeAndPurchase');
window.spinner = require('./helpers/spinner');
window.loadJSON = require('./helpers/loadJSON');