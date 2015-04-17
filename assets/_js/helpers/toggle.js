function toggle(id, klass) {
  var element = document.getElementById(id),
      classes = element.className.match(/\S+/g) || [],
      index = classes.indexOf(klass);

  index >= 0 ? classes.splice(index, 1) : classes.push(klass);
  element.className = classes.join(' ');
}

module.exports = toggle;
