var React = require('react');
var Reflux = require('reflux');
var JSE = require('jekyll-store-engine');
var money = require('../helpers/money');

var DeliverySelect = React.createClass({
  mixins: [
    Reflux.connect(JSE.Stores.DeliveryMethods),
    Reflux.connect(JSE.Stores.Delivery)
  ],

  select: function(name) {
    JSE.Actions.setDelivery({ delivery: name });
  },

  render: function() {
    return (
      <div>
        <div className='button-group'>
          {
            Object.keys(this.state.methods).map(function(name, i) {
              return (
                <button type='button' key={i}
                  onClick={this.select.bind(this, name)}
                  className={this.state.delivery.name == name ? 'selected' : ''}>
                  {name}
                </button>
              );
            }, this)
          }
        </div>
        <h2>{money(this.state.delivery.amount)}</h2>
      </div>
    );
  }
});

module.exports = DeliverySelect;