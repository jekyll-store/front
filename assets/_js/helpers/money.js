var accounting = require('accounting');

function money(amount) {
  return amount && accounting.formatMoney(amount.toString());
}

module.exports = money;
