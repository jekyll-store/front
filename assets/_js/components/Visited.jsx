var React = require('react');
var Reflux = require('reflux');
var JSE = require('jekyll-store-engine');
var Product = require('./Product.jsx');

var Visited = React.createClass({
  mixins: [Reflux.connect(JSE.Stores.Visited)],
  render: function() {
    var products = this.state.visited.shift();
    return products.isEmpty() ? null : (
      <div id='visited-products'>
        <h2>Recently Visited</h2>
        <ul>
          {
            products.map(function(product, i) {
              return <Product product={product} key={i}/>;
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = Visited;