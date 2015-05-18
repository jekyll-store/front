var React = require('react');
var Reflux = require('reflux');
var JSE = require('jekyll-store-engine');
var money = require('../helpers/money');

var OrderSummary = React.createClass({
  mixins: [Reflux.connect(JSE.Stores.Order)],
  render: function() {
    return (
      <table>
        <tbody>
          <tr><th>Item Total</th><th>{money(this.state.order.totals.price)}</th></tr>
          {
            this.state.order.adjustments.asMutable().map(function(adjustment, i) {
              return(
                <tr key={i}>
                  <td>{adjustment.label}</td>
                  <td>{money(adjustment.amount)}</td>
                </tr>
              );
            })
          }
          <tr><th>Total</th><th>{money(this.state.order.totals.order)}</th></tr>
        </tbody>
      </table>
    );
  }
});

module.exports = OrderSummary;
