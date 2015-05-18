var React = require('react');
var Reflux = require('reflux');
var JSE = require('jekyll-store-engine');
var Product = require('../components/Product.jsx');

var Products = {
  mixins: [
    Reflux.connect(JSE.Stores.Basket),
    Reflux.connect(JSE.Stores.Favourites)
  ],
  products: function(products) {
    products = products.asMutable ? products.asMutable() : products;
    return products.map(function(product, i) {
      return (
        <Product product={product}
                 inBasket={product.name in this.state.basket}
                 inFavourites={product.name in this.state.favourites}
                 key={i} />
      );
    }, this);
  }
};

module.exports = Products;
