var React = require('react');
var Reflux = require('reflux');
var JSE = require('jekyll-store-engine');
var Product = require('../components/Product.jsx');

var Products = {
  mixins: [
    Reflux.connect(JSE.Stores.Basket),
    Reflux.connect(JSE.Stores.Favourites)
  ],
  inBasket: function(product) {
    return this.state.basket.has(product.get('name'));
  },
  inFavourites: function(product) {
    return this.state.favourites.contains(product);
  },
  products: function(products) {
    return products.map(function(product, i) {
      return (
        <Product product={product}
                 inBasket={this.inBasket(product)}
                 inFavourites={this.inFavourites(product)}
                 key={i} />
      );
    }, this);
  }
};

module.exports = Products;
