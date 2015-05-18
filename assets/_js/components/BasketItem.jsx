var React = require('react');
var JSE = require('jekyll-store-engine');
var money = require('../helpers/money');

var BasketItem = React.createClass({
  set: function(e) {
    JSE.Actions.setItem({
      name: this.props.item.name,
      quantity: e.target.value
    });
  },
  remove: function(e) {
    JSE.Actions.removeItem({ name: this.props.item.name });
  },
  render: function() {
    var item = this.props.item;
    return (
      <tr className='product'>
        <td>
          <a href={'{{ site.baseurl }}' + item.url}>
          <h1>{item.name}</h1>
          <img src={'{{ site.image_prefix }}' + item.image} alt={item.name} />
          </a>
        </td>
        <td>{money(item.price)}</td>
        <td><input type='number' value={item.quantity} onChange={this.set} /></td>
        <td>{money(item.subtotal)}</td>
        <td onClick={this.remove}>x</td>
      </tr>
    );
  }
});

module.exports = BasketItem;
