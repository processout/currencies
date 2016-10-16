# currencies
Package for iso currencies, supports multiple languages

## Installation

`npm install iso-currencies --save`

## Usage

```js
  var currencies = require('iso-currences')


  console.log(currencies.list()) // list of all (with their information)

  dirham = currencies.information("AED") // get information for AED
  console.log(dirham.num) // ISO number of currency
  console.log(dirham.places) // Number of decimal places for currency
  console.log(dirham.name) // Official name of currency
  console.log(dirham.countries) // Countries that use the currency

  console.log(currencies.isValid("aed")) // Whether the currency code is valid
```

## Tests

`npm test`