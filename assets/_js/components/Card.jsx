var React = require('react');
var JSE = require('jekyll-store-engine');

var Card = React.createClass({
  getInitialState: function() {
    return { number: '', expiry: '', cvc: '' };
  },

  number: function(e){
    var number = e.target.value.replace(/ /g, '');
    number = (number.match(/\d{1,4}/g) || []).join(' ');
    this.setState({ number: number.substring(0, 23) });
  },

  expiry: function(e){
    var expiry = e.target.value;
    expiry = expiry.match(/\/$/) ? expiry.substring(0, 1) : expiry;
    var expiry = expiry.match(/\d/g) || [];
    if(expiry.length > 1) { expiry.splice(2, 0, ' / ') };
    this.setState({ expiry: expiry.join('').substring(0, 9) });
  },

  cvc: function(e){
    this.setState({ cvc: e.target.value.match(/\d{0,5}/)[0] });
  },

  render: function() {
    return (
      <div>
        <input type='text'
               name='card.number'
               placeholder='Card Number'
               onChange={this.number}
               value={this.state.number} required />
        <input type='text' name='card.name' placeholder='Cardholder Name' required />
        <input type='text'
               name='card.expiry'
               placeholder='Expiry Date ( mm / yyyy )'
               onChange={this.expiry}
               value={this.state.expiry}
               pattern='(0[1-9]|1[012]) / [0-9]{4}' required />
        <input type='text'
               name='card.cvc'
               placeholder='Security Code'
               onChange={this.cvc}
               value={this.state.cvc} required />
      </div>
    );
  }
});

module.exports = Card;
