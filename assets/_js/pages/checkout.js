var JSE = require('jekyll-store-engine');
var spinner = require('../helpers/spinner');
var form2js = require('../vendor/form2js').form2js;
var B = require('big.js');
require('../vendor/paymill-dss3');

if(document.getElementById('checkout-page')) {
  var order = JSE.Stores.Order.getInitialState().order;
  SuperAgent.get('{{ site.wake_up }}').end();
  JSE.Actions.checkoutStep({ step: 2 });
  paymill.embedFrame('card');

  JSE.Stores.Order.listen(function(payload) {
    order = payload.order;
    spinner.hide();
    document.getElementById('checkoutForm').className = '';
  });

  JSE.Actions.completed.listen(function() {
    window.location.href = '{{ site.baseurl }}/thankyou';
  });
}

exports.submitPurchase = function(event, checkoutForm) {
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  spinner.show('checkout-page');
  checkoutForm.className = 'hide';

  paymill.createTokenViaFrame({
    amount_int: B(order.totals.order).times(100).toFixed(),
    currency: '{{ site.payment.currency }}',
  }, function(err, res) {
    if(err) {
      var message = paymillExceptions[err.apierror];
      JSE.Actions.setErrors({ errors: [message] });
    } else {
      var payload = form2js(checkoutForm);
      payload.token = res.token;
      JSE.Actions.purchase(payload);
    }
  });
}

var paymillExceptions = {
  'internal_server_error': 'Communication with PSP failed',
  'invalid_public_key': 'Invalid Public Key',
  'invalid_payment_data': 'Not permitted for this method of payment, credit card type, currency or country',
  'unknown_error': 'Unknown Error',
  '3ds_cancelled': 'Password Entry of 3-D Secure password was cancelled by the user',
  'field_invalid_card_number': 'Missing or invalid credit card number',
  'field_invalid_card_exp_year': 'Missing or invalid expiry year',
  'field_invalid_card_exp_month': 'Missing or invalid expiry month',
  'field_invalid_card_exp': 'Card is no longer valid or has expired',
  'field_invalid_card_cvc': 'Invalid checking number',
  'field_invalid_card_holder': 'Invalid cardholder',
  'field_invalid_amount_int': 'Invalid or missing amount for 3-D Secure',
  'field_invalid_currency': 'Invalid or missing currency code for 3-D Secure'
};
