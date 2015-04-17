var React = require('react');
var money = require('../helpers/money');

var DisplayItem = React.createClass({
  render: function() {
    var product = this.props.product.toJS();
    return (
      <li>
        <a href={product.url}>
          <img src={'{{ site.image_prefix }}' + product.image} alt={product.name} />
          <span className='name'>{product.name}</span>
          <span className='price'>{money(product.price)}</span>
        </a>
      </li>
    );
  }
});

module.exports = DisplayItem;
