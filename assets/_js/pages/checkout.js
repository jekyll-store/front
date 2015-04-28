var JSE = require('jekyll-store-engine');
var serializeForm = require('../helpers/serializeForm');
var spinner = require('../helpers/spinner');

if(document.getElementById('checkout-page')) {
  JSE.Stores.Order.listen(function() {
    /* Order has errors */
    spinner.hide();
    document.getElementById('checkoutForm').className = '';
  });

  JSE.Actions.completed.listen(function() {
    window.location.href = '{{ site.baseurl }}/thankyou';
  });

  /* Wake up server */
  SuperAgent.get('{{ site.wake_up }}').end();
  JSE.Actions.checkoutStep({ step: 2 });
}

exports.submitPurchase = function(event, form) {
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  spinner.show('checkout-page');
  form.className = 'hide';
  JSE.Actions.purchase(serializeForm(form));
}