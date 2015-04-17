var React = require('react');

function renderComponent(id, component, props) {
  React.render(
    React.createElement(component, props),
    document.getElementById(id)
  );
};

module.exports = renderComponent;
