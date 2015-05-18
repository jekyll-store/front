var React = require('react');
var Reflux = require('reflux');
var JSE = require('jekyll-store-engine');
var BasketItem = require('./BasketItem.jsx');
var money = require('../helpers/money');

var Basket = React.createClass({
  mixins: [Reflux.connect(JSE.Stores.Order), Reflux.connect(JSE.Stores.Basket)],
  render: function() {
    return (
      <div>
        <h1 className='title'>Basket</h1>
        <table>
          <tbody>
            <tr>
              <th>Product</th><th>Price</th><th>Quatity</th><th>Cost</th><th></th>
            </tr>
            {
              Object.keys(this.state.basket).map(function(name, i) {
                return <BasketItem key={i} item={this.state.basket[name]} />;
              }, this)
            }
            <tr>
              <th></th><th></th><th></th><th>Item Total</th><th></th>
            </tr>
            <tr>
              <td></td><td></td><td></td>
              <td>{money(this.state.order.totals.price)}</td>
              <td></td>
            </tr>
            <tr>
              <td></td><td></td><td></td>
              <td><a href={this.props.checkout} className='continue'>Checkout</a></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Basket;
