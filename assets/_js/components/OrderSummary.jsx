var React = require('react');
var Reflux = require('reflux');
var JSE = require('JekyllStoreEngine');
var money = require('../helpers/money');

var OrderSummary = React.createClass({
  mixins: [Reflux.connect(JSE.Stores.Order)],
  render: function() {
  	var order = this.state.order.toJS();
  	return (
      <table>
        <tbody>
          <tr><th>Item Total</th><th>{money(order.totals.price)}</th></tr>
          {
            order.adjustments.map(function(adjustment, i) {
              return(
                <tr key={i}>
                  <td>{adjustment.label}</td>
                  <td>{money(adjustment.amount)}</td>
                </tr>
              );
            })
          }
          <tr><th>Total</th><th>{money(order.totals.order)}</th></tr>
        </tbody>
      </table>
    );
  }
});

module.exports = OrderSummary;
