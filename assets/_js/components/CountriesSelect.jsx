CountriesSelect = React.createClass({
  mixins: [
    Reflux.connect(JSE.Stores.Countries),
    Reflux.connect(JSE.Stores.Address)
  ],

  change: function(e) {
    JSE.Actions.setAddress({ country: e.target.value });
  },

  sortedCountries: function() {
    return this.state.countries.toList().sortBy(function(country) {
      return country.get('name');
    });
  },

  render: function() {
    return (
      <select name='address.country'
              value={this.state.country.get('iso')}
              onChange={this.change}>
        {
          this.sortedCountries().map(function(country, i) {
            return (
              <option value={country.get('iso')} key={i}>
                {country.get('name')}
              </option>
            );
          }, this)
        }
      </select>
    );
  }
});
