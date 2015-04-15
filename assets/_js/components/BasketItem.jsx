BasketItem = React.createClass({
  set: function(e) {
    JSE.Actions.setItem({
      name: this.name(),
      quantity: e.target.value
    });
  },
  remove: function(e) {
    JSE.Actions.removeItem({ name: this.name() });
  },
  name: function() { return this.props.item.get('name'); },
  render: function() {
    var item = this.props.item.toJS();
    return (
      <tr className='product'>
        <td>
          <a href={item.url}>
          <h1>{item.name}</h1>
          <img src={item.image1} alt={item.name} />
          </a>
        </td>
        <td>{money(item.price)}</td>
        <td><input type='number' value={item.quantity} onChange={this.set} /></td>
        <td>{money(item.price.times(item.quantity))}</td>
        <td><a href='javascript:void(0)' onClick={this.remove}>x</a></td>
      </tr>
    );
  }
});
