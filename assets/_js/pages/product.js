var JSE = require('jekyll-store-engine');

if(document.getElementById('product-page')) {
	JSE.Stores.Basket.listen(function() {
		window.location.href = '{{ site.baseurl }}/basket';
	});
}
