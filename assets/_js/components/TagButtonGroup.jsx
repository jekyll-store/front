var React = require('react');
var JSE = require('jekyll-store-engine');

var TagButtonGroup = React.createClass({
  getInitialState: function() { return { selected: [] }; },

  select: function(tag) {
    var selected = this.toggle(tag, this.state.selected);
    this.setState({ selected: selected });
    this.createAction(selected);
  },

  toggle: function(tag, selected) {
    var index = selected.indexOf(tag);
    index >= 0 ? selected.splice(index, 1) : selected.push(tag);
    return selected;
  },

  createAction: function(selected) {
    var field = this.props.field;
    if(selected.length > 0) {
      JSE.Actions.setDisplayFilter({
        name: field,
        filter: JSE.Filters.Tags(field, selected)
      });
    } else {
      JSE.Actions.removeDisplayFilter({ name: field });
    }
  },

  render: function() {
    return (
      <div className='button-group'>
        {
          this.props.tags.map(function(tag, i) {
            return (
              <button
                key={i}
                onClick={this.select.bind(this, tag)}
                className={this.state.selected.indexOf(tag) >= 0 ? 'selected' : ''}>
                {tag}
              </button>
            );
          }, this)
        }
      </div>
    );
  }
});

module.exports = TagButtonGroup;
