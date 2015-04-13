Receipt = React.createClass({

  render: function() {
  	var order = {
      totals: { price: '34.35', total: '45.23' },
      adjustments: [{ label: 'Royal Mail 48', amount: '12.10' }]
    };
    var basket = [
      { name: 'bag', quantity: 2, cost: '24.35' },
      { name: 'hat', quantity: 3, cost: '5.73' }
    ];
    var address = {
      name: 'George Labuff',
      email: 'grgglbf@example.com',
      address1: '23 Houndow Grove',
      address2: '',
      city: 'Grenwich',
      county: 'London',
      postcode: 'PO34 8DU'
    }
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

