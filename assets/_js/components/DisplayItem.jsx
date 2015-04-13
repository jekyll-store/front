DisplayItem = React.createClass({
  render: function() {
    var product = this.props.product.toJS();
    return (
      <li>
        <a href={product.url}>
          <img src={product.images[0]} alt={product.name} />
          <span className='name'>{product.name}</span>
          <span className='price'>{money(product.price)}</span>
        </a>
      </li>
    );
  }
});
