---
---

// Vendor
{% include_relative _js/vendor/accounting.min.js %}
{% include_relative _js/vendor/form2js.js %}
{% include_relative _js/vendor/JSXTransformer-0.13.1.js %}
{% include_relative _js/vendor/paymillBridge.js %}
{% include_relative _js/vendor/react.min.js %}
{% include_relative _js/vendor/spin.min.js %}
{% include_relative _js/vendor/webforms2-p.js %}

// accounting.js
accounting.settings.currency = {{ site.accounting | replace: '=>', ':' }};

function money(amount) {
	return amount && accounting.formatMoney(amount.toString());
}

// Engine
{% include_relative _js/JekyllStoreEngine.js %}
JSE = JekyllStoreEngine;

JSE.Utils.loadJSON('/products.json', function(products){
  JSE.Actions.loadProducts({ products: products });
});

JSE.Utils.loadJSON('/countries.json', function(countries){
  JSE.Actions.loadCountries({ countries: countries });
});

JSE.Utils.loadJSON('/delivery-methods.json', function(methods){
  JSE.Actions.loadDeliveryMethods({ methods: methods });
});

JSE.Actions.setAddress({{ site.defaultAddress | replace: '=>', ':' }});
JSE.Actions.setPaymentOptions({{ site.payment | replace: '=>', ':' }});

PAYMILL_PUBLIC_KEY = '{{ site.paymillPublicKey }}';
