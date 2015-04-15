# Jekll-Store [Demo](http://jekyll-store.com)

Jekyll-Store is a lightweight, backend-free ecommerce solution that is easy to deploy, maintain and customize. It is comprised of three parts:

* [Jekll-Store Front](https://github.com/jekyll-store/front): a front-end made with the [Jekyll](https://github.com/jekyll/jekyll) static-site generator and reusable [React](https://github.com/facebook/react) components.

* [Jekll-Store Engine](https://github.com/jekyll-store/engine): javascript business logic written with the [RefluxJS](https://github.com/spoike/refluxjs) derivative of the [Flux](https://github.com/facebook/flux) architecture.

* [Jekyll-Store Microservice](https://github.com/jekyll-store/microservice): a small app for processing payments and sending transactional emails, currently written in Ruby.

# Front

## _products

All products must have at least a unique name, price and image. All other meta-data can be used for filtering.

## _config.yml

* `defaultAddress`
  * `country` - iso as defined in `/_data/countries.yml`

* `payment`
  * `tokenizer` - Name of a [Engine](https://github.com/jekyll-store/engine) tokenizer, corresponding to a supported payment gateway. Currently available:
    * Paymill
  * `currency` - [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code.
  * `hook` - url for your [Microservice](https://github.com/jekyll-store/microservice) instance or similar app for handling payment processing.

* `image_prefix`: Folder or url to be prefixed to all images

* `paymillPublicKey`: [Paymill public key](https://developers.paymill.com/en/introduction/your-account/). **Not** private key!

* `accounting`: [accounting.js config](http://openexchangerates.github.io/accounting.js/#documentation)

* `prose`: [prose.io config](https://github.com/prose/prose/wiki/Prose-Configuration)

## _data

### countries.yml

Countries are given zones to group them and match which delivery methods are applicable for deliveries to that country.

### delivery-methods.yml

Each delivery method must have a unique name.

Each delivery method must have zones to match which countries they are applicable for.

Each delivery method must have a calculator that is the name of a valid [Jekll-Store Engine](https://github.com/jekyll-store/engine) calculator and the args to be used for the calculator. Currently available calculators:
* Fixed
* Percent
* Tiered

## JSX Transformer

The [React](https://github.com/facebook/react) components can be found in `/assets/_js/components` and are collated into the `assets/components.jsx` file. This file is then transpiled into javascript live in browser using Facebook's JSX Transformer. This allows for easy development as components can be edited just like any other file. However for production, if you want to improve performance, it is advised to transpile offline using [react-tools](https://www.npmjs.com/package/react-tools).

## Contributing

1. Fork it ( https://github.com/[my-github-username]/front/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
