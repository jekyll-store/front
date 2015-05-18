var React = require('react');
var Reflux = require('reflux');
var JSE = require('jekyll-store-engine');
var I = require('seamless-immutable');

var Pagination = React.createClass({
  mixins: [Reflux.listenTo(JSE.Stores.Display, 'onChange')],
  onChange: function(args) {
    if(args.display.page) { this.setState(args.display.page); }
  },

  getInitialState: function() {
    this.setPage(1);
    return { current: 1, numbers: I([1]), prev: null, next: null };
  },

  prev: function() { this.setPage(this.state.prev); },
  next: function() { this.setPage(this.state.next); },

  setPage: function(i) {
    JSE.Actions.setDisplayFilter({
      name: 'page',
      filter: JSE.Filters.Page(this.props.pagesize, i)
    });
  },

  render: function() {
    var nope = 'javascript:void(0)';
    return (
      <div>
        <ul>
          <li>
            {this.state.prev ? <a href={nope} onClick={this.prev}>Prev</a> : null}
          </li>
          <li>
            <ul>{
                this.state.numbers.asMutable().map(function(i) {
                  return (
                    <li key={i}>
                      {this.state.current == i ?
                        <a href={nope} className='selected'>{i}</a> :
                        <a href={nope} onClick={this.setPage.bind(this, i)}>{i}</a>}
                    </li>
                  );
                }, this)
              }
            </ul>
          </li>
          <li>
            {this.state.next ? <a href={nope} onClick={this.next}>Next</a> : null}
          </li>
        </ul>
      </div>
    );
  }
});

module.exports = Pagination;
