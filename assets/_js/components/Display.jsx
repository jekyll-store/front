var React = require('react');
var Reflux = require('reflux');
var JSE = require('jekyll-store-engine');

var Display = React.createClass({
  mixins: [
    Reflux.connect(JSE.Stores.Display),
    require('../mixins/Products')
  ],
  render: function() {
    var products = this.state.display.get('products');
    return (
      <div>
        { products.isEmpty() ?
          <h1 className='no-products'>No Products Found</h1> :
          <ul>{this.products(products)}</ul>
        }
      </div>
    );
  }
});

module.exports = Display;
