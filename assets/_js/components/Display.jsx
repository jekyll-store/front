var React = require('react');
var Reflux = require('reflux');
var JSE = require('jekyll-store-engine');
var DisplayItem = require('./DisplayItem.jsx');

var Display = React.createClass({
  mixins: [Reflux.connect(JSE.Stores.Display)],
  render: function() {
    var products = this.state.display.get('products');
    return (
      <div>
        { products.isEmpty() ?
          <h1 className='no-products'>No Products Found</h1> :
          <ul>
            {
              products.map(function(product, i) {
                return <DisplayItem product={product} key={i}/>
              })
            }
          </ul>
        }
      </div>
    );
  }
});

module.exports = Display;