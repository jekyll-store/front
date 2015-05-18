var React = require('react');

var Favourites = React.createClass({
  mixins: [require('../mixins/Products')],
  values: function(obj) { return Object.keys(obj).map(function(k){ return obj[k]; }); },
  render: function() {
    return (
      <div>
        <h1 className='title'>Your Favourites</h1>
        {
          Object.keys(this.state.favourites).length > 0 ?
            <ul>{this.products(this.values(this.state.favourites))}</ul> :
            <h1 className='no-products'>No Products Found</h1>
        }
      </div>
    );
  }
});

module.exports = Favourites;