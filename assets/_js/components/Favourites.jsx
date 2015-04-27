var React = require('react');

var Favourites = React.createClass({
  mixins: [require('../mixins/Products')],
  render: function() {
    return (
      <div>
        <h1 className='title'>Your Favourites</h1>
        {
          this.state.favourites.isEmpty() ?
            <h1 className='no-products'>No Products Found</h1> :
            <ul>{this.products(this.state.favourites)}</ul>
        }
      </div>
    );
  }
});

module.exports = Favourites;