var React = require('react');
var Reflux = require('reflux');
var JSE = require('jekyll-store-engine');

var Visited = React.createClass({
  mixins: [
    Reflux.connect(JSE.Stores.Visited),
    require('../mixins/Products')
  ],
  render: function() {
    var products = this.state.visited.slice(this.props.begin, this.props.end);
    return products.length == 0 ? null : (
      <div id='visited-products'>
        <h2>Recently Visited</h2>
        <ul>{this.products(products)}</ul>
      </div>
    );
  }
});

module.exports = Visited;