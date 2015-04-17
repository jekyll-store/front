var React = require('react');
var JSE = require('JekyllStoreEngine');
var money = require('../helpers/money');

var BasketItem = React.createClass({
  set: function(e) {
    JSE.Actions.setItem({
      name: this.name(),
      quantity: e.target.value
    });
  },
  remove: function(e) {
    JSE.Actions.removeItem({ name: this.name() });
  },
  name: function() { return this.props.item.get('name'); },
  render: function() {
    var item = this.props.item.toJS();
    return (
      <tr className='product'>
        <td>
          <a href={item.url}>
          <h1>{item.name}</h1>
          <img src={'{{ site.image_prefix }}' + item.image} alt={item.name} />
          </a>
        </td>
        <td>{money(item.price)}</td>
        <td><input type='number' value={item.quantity} onChange={this.set} /></td>
        <td>{money(item.price.times(item.quantity))}</td>
        <td onClick={this.remove}>x</td>
      </tr>
    );
  }
});

module.exports = BasketItem;
