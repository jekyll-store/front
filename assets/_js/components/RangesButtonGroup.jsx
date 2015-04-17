var React = require('react');
var JSE = require('jekyll-store-engine');

var RangesButtonGroup = React.createClass({
  getInitialState: function() { return { selected: [] }; },

  select: function(i) {
    var selected = this.toggle(i, this.state.selected);
    var ranges = this.selectedRanges(selected);
    var field = this.props.field;
    if(ranges.length > 0) {
      JSE.Actions.setDisplayFilter({
        name: field,
        filter: JSE.Filters.Ranges(field, ranges)
      });
    } else {
      JSE.Actions.removeDisplayFilter({ name: field });
    }
  },

  toggle: function(i, selected) {
    selected[i] = !selected[i];
    this.setState({ selected: selected });
    return selected;
  },

  selectedRanges: function(selected) {
    var ranges = [];
    for(var i = 0; i < selected.length; i++) {
      if(selected[i]) { ranges.push(this.props.ranges[i]); }
    }
    return ranges;
  },

  render: function() {
    return (
      <div className='button-group'>
        {
          this.props.ranges.map(function(tag, i) {
            return (
              <button
                key={i}
                onClick={this.select.bind(this, i)}
                className={this.state.selected[i] ? 'selected' : ''}>
                {this.props.labels[i]}
              </button>
            );
          }, this)
        }
      </div>
    );
  }
});

module.exports = RangesButtonGroup;
