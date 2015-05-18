# Jekyll-Store/Front

## _products

All products must have at least a unique name, price and image. All other meta-data can be used for filtering.

If looking to export data from csv, see [csv_to_products](https://github.com/jekyll-store/csv_to_products).

## _config.yml

* `defaultAddress`
  * `country` - iso as defined in `/_data/countries.yml`

* `payment`
  * `tokenizer` - Name of a [Engine tokenizer](https://github.com/jekyll-store/engine#tokenizers), corresponding to a supported payment gateway.
  * `currency` - [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code.
  * `hook` - url for your [Microservice](https://github.com/jekyll-store/microservice) instance or similar app for handling payment processing.

* `image_prefix`: Folder or url to be prefixed to all images

* `paymillPublicKey`: [Paymill public key](https://developers.paymill.com/en/introduction/your-account/) (Only if using Paymill)

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

## json

`products.json` must have the fields used for the products explicitly stated.

## Reset Hook

To keep your [Microservice](https://github.com/jekyll-store/microservice) instance (or similar) up to date. Make sure to create a [github webhook](https://developer.github.com/webhooks/creating/) on your repository with it's reset url.

## Building Javascript

Jekyll-Store Front uses [Browersify](https://github.com/substack/node-browserify) to compile the scripts together and to transpile JSX. If you would like to make changes to any of these files, you will have to do the following:

1. Install [node.js](https://nodejs.org/download/)
2. Install the packages: `npm install`
3. Delete duplicate packages: `npm dedupe`
4. Watch whilst making changes: `npm run watch`
5. Build the finalized version: `npm run build`

## Contributing

1. [Fork it](https://github.com/jekyll-store/front/fork)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
