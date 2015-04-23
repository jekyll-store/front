var React = require('react');
var money = require('../helpers/money');

var Product = React.createClass({
  render: function() {
    var product = this.props.product.toJS();
    return (
      <li className='product'>
        <a href={'{{ site.baseurl }}' + product.url}>
          <img src={'{{ site.image_prefix }}' + product.image} alt={product.name} />
          <span className='name'>{product.name}</span>
          <span className='price'>{money(product.price)}</span>
        </a>
      </li>
    );
  }
});

module.exports = Product;
