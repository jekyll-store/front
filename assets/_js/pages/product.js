var JSE = require('jekyll-store-engine');

if(document.getElementById('product-page')) {
	JSE.Stores.Basket.listen(function() {
		window.location.href = '{{ site.baseurl }}/basket';
	});

	// Load Yotpo
  (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.src="//staticw2.yotpo.com/0aHEMLDicyiDM2Fb1ZTDuCMMharSoZrmwbq2LFhG/widget.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();
}
