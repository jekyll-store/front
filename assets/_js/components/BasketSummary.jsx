BasketSummary = React.createClass({
  mixins: [Reflux.connect(JSE.Stores.Order)],
  render: function() {
  	var total = this.state.order.getIn(['totals', 'price']);
  	return total.gt(0) ?
      <a href={this.props.link}>
        <img src={this.props.img} alt='Cart' id='cart' />
        <span>{money(total)}</span>
      </a> :
      null
  }
});

