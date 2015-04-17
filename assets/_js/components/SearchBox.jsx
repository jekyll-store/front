var React = require('react');
var JSE = require('jekyll-store-engine');

var SearchBox = React.createClass({
  update: function(e) {
    var txt = e.target.value;
    if(txt) {
      var filter = JSE.Filters.Search(this.props.field, txt);
      JSE.Actions.setDisplayFilter({ name: 'search', filter: filter });
    } else {
      JSE.Actions.removeDisplayFilter({ name: 'search' });
    }
  },
  render: function() {
    return (
      <input type='text' placeholder='Search' onChange={this.update}></input>
    );
  }
});

module.exports = SearchBox;
