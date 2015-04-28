var React = require('react');

function renderComponent(id, component) {
  var element = document.getElementById(id);
  if(element) {
    React.render(
      React.createElement(component, getProps(element)),
      element
    );
  }
};

function getProps(element) {
  return getDataAttributes(element).reduce(function(obj, attribute) {
    obj[attribute.name.substr(5)] = eval(attribute.value);
    return obj;
  }, {});
}

function getDataAttributes(element) {
  return [].filter.call(element.attributes, function(attribute) {
    return /^data-/.test(attribute.name);
  });
}

module.exports = renderComponent;
