var React = require('react');
var Reflux = require('reflux');
var JSE = require('jekyll-store-engine');

var Display = React.createClass({
  mixins: [
    Reflux.connect(JSE.Stores.Display),
    require('../mixins/Products')
  ],
  render: function() {
    return (
      <div>
        { this.state.display.products.length > 0 ?
          <ul>{this.products(this.state.display.products)}</ul> :
          <h1 className='no-products'>No Products Found</h1>
        }
      </div>
    );
  }
});

module.exports = Display;
