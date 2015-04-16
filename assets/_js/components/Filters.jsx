Filters = React.createClass({
  render: function() {
    return (
      <aside id='filters'>
        <h1>Filters</h1>
        <SearchBox field='name' />
        <SortButtonGroup
          fields={['price', 'weight']}
          labels={['Price', 'Weight']} />
        <TagButtonGroup field='type' tags={['Wood', 'Metal', 'Metallic']} />
        <TagButtonGroup field='condition' tags={['Mint', 'Worn', 'Rough']} />
        <RangesButtonGroup
          field='price'
          ranges={[[0, 300], [300, 400], [400, 500], [500, 800]]}
          labels={['< £300', '£300 - £400', '£400 - £500', '> £500']} />
        <RangesButtonGroup
          field='weight'
          ranges={[[0, 3], [3, 3.5], [3.5, 4], [4, 6]]}
          labels={['< 3kg', '3kg - 3.5kg', '3.5kg - 4kg', '> 4kg']} />
      </aside>
    );
  }
});
