var TagButtonGroup = require('./components/TagButtonGroup.jsx');
var RangesButtonGroup = require('./components/RangesButtonGroup.jsx');
var renderComponent = require('./helpers/renderComponent');

// Layout
renderComponent('basket-summary', require('./components/BasketSummary.jsx'));

// Index
renderComponent('search', require('./components/SearchBox.jsx'));
renderComponent('sort', require('./components/SortButtonGroup.jsx'));
renderComponent('type', TagButtonGroup);
renderComponent('condition', TagButtonGroup);
renderComponent('price-range', RangesButtonGroup);
renderComponent('weight-range', RangesButtonGroup);
renderComponent('display', require('./components/Display.jsx'));
renderComponent('pagination', require('./components/Pagination.jsx'));

// Product
renderComponent('addToBasket', require('./components/AddToBasket.jsx'));
renderComponent('visited', require('./components/Visited.jsx'));

// Basket
renderComponent('basket-page', require('./components/Basket.jsx'));

// Checkout
renderComponent('errors', require('./components/Errors.jsx'));
renderComponent('countries', require('./components/CountriesSelect.jsx'));
renderComponent('delivery', require('./components/DeliverySelect.jsx'));
renderComponent('order-summary', require('./components/OrderSummary.jsx'));

// Favourites
renderComponent('favourites', require('./components/Favourites.jsx'));
