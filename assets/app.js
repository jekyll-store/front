---
---

{% include_relative _js/compiled.js %}

// Settings
accounting.settings.currency = {{ site.accounting | replace: '=>', ':' }};
PAYMILL_PUBLIC_KEY = '{{ site.paymillPublicKey }}';
JSE.Actions.setTrackingId({ id: '{{ site.tracking_id }}' });
JSE.Actions.setAddress({{ site.defaultAddress | replace: '=>', ':' }});
JSE.Actions.setPaymentOptions({{ site.payment | replace: '=>', ':' }});

// Data
loadJSON('{{ site.baseurl }}/products.json', function(products){
  JSE.Actions.loadProducts({ products: products });
});

JSE.Actions.loadCountries({
  countries: {{ site.data.countries | replace: '=>', ':' }}
});

JSE.Actions.loadDeliveryMethods({
  methods: {{ site.data.delivery-methods | replace: '=>', ':' }}
});
