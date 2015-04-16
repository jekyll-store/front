Errors = React.createClass({
  mixins: [Reflux.connect(JSE.Stores.Order)],
  render: function() {
  	var errors = this.state.order.get('errors');
  	return errors.isEmpty() ? null :
      <div className='flash flash-error'>
        {
          errors.map(function(error, i) {
            return <span key={i}>{error}</span>
          })
        }
      </div>;
  }
});
