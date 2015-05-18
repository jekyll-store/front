var React = require('react');
var Reflux = require('reflux');
var JSE = require('jekyll-store-engine');

var CountriesSelect = React.createClass({
  mixins: [
    Reflux.connect(JSE.Stores.Countries),
    Reflux.connect(JSE.Stores.Address)
  ],
  change: function(e) { JSE.Actions.setAddress({ country: e.target.value }); },
  values: function(obj) { return Object.keys(obj).map(function(k){ return obj[k]; }); },

  sortedCountries: function() {
    return this.values(this.state.countries).sort(function(a, b) {
      return a.name > b.name ? 1 : -1
    });
  },

  render: function() {
    return (
      <select name='address.country'
              value={this.state.country.iso}
              onChange={this.change}>
        {
          this.sortedCountries().map(function(country, i) {
            return <option value={country.iso} key={i}>{country.name}</option>;
          })
        }
      </select>
    );
  }
});

module.exports = CountriesSelect;
