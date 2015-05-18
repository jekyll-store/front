var React = require('react');
var Reflux = require('reflux');
var JSE = require('jekyll-store-engine');

var Errors = React.createClass({
  mixins: [Reflux.connect(JSE.Stores.Order)],
  render: function() {
    return this.state.order.errors.length === 0 ? null :
      <div className='flash flash-error'>
        {
          this.state.order.errors.asMutable().map(function(error, i) {
            return <span key={i}>{error}</span>
          })
        }
      </div>;
  }
});

module.exports = Errors;
