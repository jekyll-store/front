var React = require('react');
var JSE = require('jekyll-store-engine');

var AddToBasket = React.createClass({
  getInitialState: function() { return { quantity: 1 }; },
  setQuantity: function(e) { this.setState({ quantity: e.target.value }); },
  add: function() {
    JSE.Actions.setItem({
      name: this.props.name,
      quantity: +this.state.quantity
    })
  },
  render: function() {
    return (
      <form>
        <input type='number'
               value={this.state.quantity}
               onChange={this.setQuantity} />
        <button type='button' onClick={this.add}>Add to Basket</button>
      </form>
    );
  }
});

module.exports = AddToBasket;