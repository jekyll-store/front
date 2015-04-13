Display = React.createClass({
  mixins: [Reflux.connect(JSE.Stores.Display)],
  render: function() {
    var products = this.state.display.get('products');
    return (
      <article className='display'>
        { products.isEmpty() ?
          <h1 className='no-products'>No Products Found</h1> :
          <ul>
            {
              products.map(function(product, i) {
                return <DisplayItem product={product} key={i}/>
              })
            }
          </ul>
        }
      </article>
    );
  }
});
