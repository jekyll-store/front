var BasketSummary     = require('./components/BasketSummary.jsx');
var SearchBox         = require('./components/SearchBox.jsx');
var SortButtonGroup   = require('./components/SortButtonGroup.jsx');
var TagButtonGroup    = require('./components/TagButtonGroup.jsx');
var RangesButtonGroup = require('./components/RangesButtonGroup.jsx');
var Display           = require('./components/Display.jsx');
var Pagination        = require('./components/Pagination.jsx');
var AddToBasket       = require('./components/AddToBasket.jsx');
var Visited           = require('./components/Visited.jsx');
var Basket            = require('./components/Basket.jsx');
var Errors            = require('./components/Errors.jsx');
var CountriesSelect   = require('./components/CountriesSelect.jsx');
var DeliverySelect    = require('./components/DeliverySelect.jsx');
var Card              = require('./components/Card.jsx');
var OrderSummary      = require('./components/OrderSummary.jsx');

var renderComponent = require('./helpers/renderComponent');

// Layout
renderComponent('basket-summary', BasketSummary);

// Index
renderComponent('search', SearchBox);
renderComponent('sort', SortButtonGroup);
renderComponent('type', TagButtonGroup);
renderComponent('condition', TagButtonGroup);
renderComponent('price-range', RangesButtonGroup);
renderComponent('weight-range', RangesButtonGroup);
renderComponent('display', Display);
renderComponent('pagination', Pagination);

// Product
renderComponent('addToBasket', AddToBasket);
renderComponent('visited', Visited);

// Basket
renderComponent('basket-page', Basket);

// Checkout
renderComponent('errors', Errors);
renderComponent('countries', CountriesSelect);
renderComponent('delivery', DeliverySelect);
renderComponent('card', Card);
renderComponent('order-summary', OrderSummary);
