var JSE = require('jekyll-store-engine');

if(document.getElementById('basket-page')) {
  JSE.Actions.checkoutStep({ step: 1 });
}
