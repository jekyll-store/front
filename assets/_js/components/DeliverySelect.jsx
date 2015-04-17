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
    var delivery = this.state.delivery;
    var selectedName = delivery && delivery.get('name');
    return (
      <div>
        <div className='button-group'>
          {
            this.state.methods.toList().map(function(method, i) {
              var methodName = method.get('name');
              return (
                <button type='button' key={i}
                  onClick={this.select.bind(this, methodName)}
                  className={selectedName == methodName ? 'selected' : ''}>
                  {method.get('name')}
                </button>
              );
            }, this)
          }
        </div>
        <h2>{money(delivery && delivery.get('amount'))}</h2>
      </div>
    );
  }
});

module.exports = DeliverySelect;