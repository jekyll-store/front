var React = require('react');
var JSE = require('jekyll-store-engine');

var SortButtonGroup = React.createClass({
  getInitialState: function() { return { selected: null, direction: null }; },

  handleClick: function(field) {
    if(this.state.selected !== field) { this.select(field); return; }
    if(this.state.direction === JSE.Filters.Sort.ASC){
      this.switchDirection(field);
    } else {
      this.deselect();
    }
  },

  filter: function(field, direction) {
    JSE.Actions.setDisplayFilter({
      name: 'sort',
      filter: JSE.Filters.Sort(field, direction)
    });
  },

  select: function(field) {
    this.setState({ selected: field, direction: JSE.Filters.Sort.ASC });
    this.filter(field, JSE.Filters.Sort.ASC);
  },

  switchDirection: function(field) {
    this.setState({ direction: JSE.Filters.Sort.DESC });
    this.filter(field, JSE.Filters.Sort.DESC);
  },

  deselect: function() {
    this.setState({ selected: null, direction: null });
    JSE.Actions.removeDisplayFilter({ name: 'sort' });
  },

  render: function() {
    return (
      <div className='button-group'>
        {
          this.props.fields.map(function(field, i) {
            var selected = this.state.selected === field ? 'selected' : '';
            var direction = selected && this.state.direction;
            return (
              <button
                key={i}
                onClick={this.handleClick.bind(this, field)}
                className={selected + ' ' + direction}>
                {this.props.labels[i]}
              </button>
            );
          }, this)
        }
      </div>
    );
  }
});

module.exports = SortButtonGroup;
